<template>
  <div class="avatar-change">
    <VueCropper
      ref="cropper"
      :img="option.img"
      :outputSize="option.outputSize"
      :outputType="option.outputType"
      :info="option.info"
      :canScale="option.canScale"
      :autoCrop="option.autoCrop"
      :autoCropWidth="option.autoCropWidth"
      :autoCropHeight="option.autoCropHeight"
      :fixed="option.fixed"
      :fixedNumber="option.fixedNumber"
      :full="option.full"
      :fixedBox="option.fixedBox"
      :canMove="option.canMove"
      :canMoveBox="option.canMoveBox"
      :original="option.original"
      :centerBox="option.centerBox"
      :height="option.height"
      :infoTrue="option.infoTrue"
      :maxImgSize="option.maxImgSize"
      :enlarge="option.enlarge"
      :mode="option.mode"
    ></VueCropper>
    <div class="btns">
      <el-button type="primary" @click="handleUpload"
        >选择文件<input
          type="file"
          accept="image/*"
          style="display: none"
          ref="input"
          @change="handleChange"
      /></el-button>
      <el-button type="success">保存并上传</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue-cropper/dist/index.css';
import { VueCropper } from 'vue-cropper';
import { ref } from 'vue';
import type { UploadInstance } from 'element-plus';

const upload = ref<UploadInstance>();
const input = ref();

const handleUpload = () => {
  input.value.click()
};



const handleChange = (e: any) => {
  const file = e.target.files[0]
  console.log(file)
  const reader = new FileReader()
  reader.addEventListener(
    "load",
    () => {
      // 将图像文件转换为 Base64 字符串
      option.value.img = reader.result as string;
    },
    false,
  );
  reader.readAsDataURL(file)

};


//裁剪框实例
const cropper = ref<InstanceType<typeof VueCropper>>();

// vue-cropper的基本配置
const option = ref({
  img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', //裁剪图片的地址
  outputSize: 1, //裁剪生成图片的质量(可选0.1 - 1)
  outputType: 'jpeg', //裁剪生成图片的格式（jpeg || png || webp）
  info: true, //图片大小信息
  canScale: true, //图片是否允许滚轮缩放
  autoCrop: true, //是否默认生成截图框
  autoCropWidth: 150, //默认生成截图框宽度
  autoCropHeight: 150, //默认生成截图框高度
  fixed: true, //是否开启截图框宽高固定比例
  fixedNumber: [1, 1], //截图框的宽高比例
  full: false, //false按原比例裁切图片，不失真
  fixedBox: false, //固定截图框大小，不允许改变
  canMove: false, //上传图片是否可以移动
  canMoveBox: true, //截图框能否拖动
  original: false, //上传图片按照原始比例渲染
  centerBox: false, //截图框是否被限制在图片里面
  height: true, //是否按照设备的dpr 输出等比例图片
  infoTrue: false, //true为展示真实输出图片宽高，false展示看到的截图框宽高
  maxImgSize: 3000, //限制图片最大宽度和高度
  enlarge: 1, //图片根据截图框输出比例倍数
  mode: '300px 300px', //图片默认渲染方式
});
</script>

<style lang="less" scoped>
.avatar-change {
  height: 80%;
  width: 100%;
  padding: 20px;
}
.btns {
  margin-top: 20px;
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 10px;
  }
}
</style>
