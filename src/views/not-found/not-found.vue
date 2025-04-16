<template>
  <div class="not-found">
    <canvas id="cvs"></canvas>
  </div>
</template>

<script setup lang="ts">
import getRandomColor from '@/utils/getRandomColor';
import getRandomNumber from '@/utils/getRandomNumber';
import { onMounted } from 'vue';

onMounted(() => {
  //初始化
  const canvas = document.querySelector('canvas') as HTMLCanvasElement;
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  //绘制圆
  class Point {
    x: number; //x坐标
    y: number; //y坐标
    r: number; //半径
    color: string; //颜色
    speedX: number; //水平运动速度
    speedY: number; //竖直运动速度
    lastDrawTime: null | number; // 上次绘画时间
    constructor(x: number, y: number, r: number, color: string) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.color = color;
      this.speedX = getRandomNumber(-50, 50);
      this.speedY = getRandomNumber(-50, 50);
      if (this.speedX === 0) this.speedX = 25;
      if (this.speedY === 0) this.speedY = 25;
      this.lastDrawTime = null;
    }
    draw() {
      if (this.lastDrawTime) {
        const duration: number = (Date.now() - this.lastDrawTime) / 1000;
        this.x += this.speedX * duration;
        this.y += this.speedY * duration;
        if (this.x <= this.r || this.x > canvas.width - this.r) {
          this.speedX = -this.speedX;
          this.speedY = -this.speedY;
        }
        if (this.y <= this.r || this.y > canvas.height - this.r) {
          this.speedY = -this.speedY;
          this.speedX = -this.speedX;
        }
      }
      ctx.beginPath();
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 5;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
      ctx.strokeStyle = this.color;
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.stroke();
      this.lastDrawTime = Date.now();
    }
  }
  //绘制背景
  class Graph {
    points: Array<Point>;
    constructor(num: number) {
      this.points = new Array<Point>();
      for (let i = 0; i < num; i++) {
        this.points.push(
          new Point(
            getRandomNumber(50, canvas.width - 50),
            getRandomNumber(50, canvas.height - 50),
            getRandomNumber(20, 50),
            getRandomColor(),
          ),
        );
      }
    }
    draw() {
      requestAnimationFrame(() => {
        this.draw();
      });
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.strokeStyle = 'white';
      ctx.font = '48px 思源黑体_CN';
      ctx.textAlign = 'center';
      ctx.strokeText(
        '您输入的地址无效，请重新输入',
        canvas.width / 2,
        canvas.height / 2,
      );

      for (let i = 0; i < this.points.length; i++) {
        const p = this.points[i];
        p.draw();
      }
    }
  }
  const graph = new Graph(30);
  graph.draw();
});
</script>

<style lang="less" scoped>
.not-found {
  #cvs {
    width: 100%;
    height: 100%;
    background-color: #333336;
  }
}
</style>
