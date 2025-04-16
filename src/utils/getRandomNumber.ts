/**
 * 闭区间
 * @param {*} min
 * @param {*} max
 * @returns { Number }
 */
export default function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}