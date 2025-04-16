const searchConfig = {
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '角色名称：',
      placeholder: '请输入查询的角色名称',
      span: 6,
    },
    {
      type: 'input',
      prop: 'leader',
      label: '权限介绍：',
      placeholder: '请输入查询的权限介绍',
      span: 6,
    },
    {
      type: 'date-picker',
      prop: 'time',
      label: '时间：',
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      span: 10,
    },
  ],
};

export default searchConfig