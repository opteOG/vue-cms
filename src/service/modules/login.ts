import myRequet from '..';

export function accountLogin() {
  return myRequet.post({
    url: '/login',
  });
}
