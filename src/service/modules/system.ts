import myRequet from "..";

export function commodityDataRequest() {
  return myRequet.get({
    url: '/main/system/totalcommodity'
  })
}
