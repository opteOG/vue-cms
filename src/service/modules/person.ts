import myRequet from "..";

export function personalDataRequest() {
  return myRequet.get({
    url: '/personalmessage'
  })
}