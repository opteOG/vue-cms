import myRequest from '..';
//用户管理
export function userDataRequest() {
  return myRequest.get({
    url: '/main/management/user',
  });
}
//部门管理
export function departmentRequest() {
  return myRequest.get({
    url: '/main/management/department',
  });
}
//部门管理搜索
export function departmentSearchRequest(name: string) {
  return myRequest.post({
    url: '/main/management/department/search',
    params: {
      name: name,
    },
  });
}

//角色管理
export function characterRequest() {
  return myRequest.get({
    url: '/main/management/character',
  });
}

//菜单管理
export function menuRequest() {
  return myRequest.get({
    url: '/main/management/menu',
  });
}
