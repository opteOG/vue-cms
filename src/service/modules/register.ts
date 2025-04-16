import myRequet from '..';

export function tokenRegister() {
  return myRequet.post({
    url: '/register',
  });
}
