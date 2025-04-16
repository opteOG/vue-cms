import myRequet from "..";

export function goodsDataRequest() {
  return myRequet.get({
    url: '/commodity'
  })
}