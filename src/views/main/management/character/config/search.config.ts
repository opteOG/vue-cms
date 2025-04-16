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
      type: 'select',
      prop: 'select',
      label: '权限选择：',
      placeholder: '请选择查询的权限',
      span: 6,
      options: [
        {
          label: '管理员',
          value: '管理员'
        },
        {
          label: '开发者',
          value: '开发者'
        },
        {
          label: '运营者',
          value: '运营者'
        },
        {
          label: '应用拥有者',
          value: '应用拥有者'
        }
      ]
    },
    {
      type: 'date-picker',
      prop: 'time',
      label: '时间：',
      startPlaceholder:'开始时间',
      endPlaceholder: '结束时间',
      span: 10,
    },
  ],
};

export default searchConfig;
