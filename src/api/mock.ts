export const user = {
  permissions: [],
  roles: [],
  sysUser: {
    avatar: '/src/assets/img/user.jpeg',
    createTime: '',
    userId: 1,
    tenantId: 1,
    username: '斌',
    phone: '',
    password: '123456'
  }
};

export const code = {
  error: true,
  repCode: 0,
  repData: {
    jigsawImageBase64: '/src/assets/img/slider-bg.jpg',
    originalImageBase64: '/src/assets/img/slider-bg.jpg',
    result: true,
    secretKey: '',
    token: '',
    success: true
  },
  repMsg: '',
  success: true
};

export const login_res = {
  access_token: '我是token',
  active: true,
  expires_in: 0,
  license: '',
  refresh_token: '我是token',
  scope: '',
  token_type: 'Authorization',
  user_info: {
    tenantId: 1
  }
};

export const menus = [
  {
    id: 10157,
    parentId: -1,
    weight: 0,
    name: 'home',
    clientId: 'base_message',
    keepAlive: '0',
    moduleType: '1',
    clientName: '首页',
    icon: 'icon-storehouse',
    permission: null,
    remark: null,
    displayStatus: '1',
    label: '首页',
    sort: 0,
    configure: null,
    type: '0',
    path: '/',
    moduleTypeName: '首页',
    status: '1'
  },
  {
    id: 10158,
    parentId: -1,
    weight: 0,
    name: '用户管理',
    clientId: 'base_message',
    keepAlive: '0',
    moduleType: null,
    clientName: '用户管理',
    icon: 'icon-staff',
    permission: null,
    remark: null,
    displayStatus: '1',
    label: '用户管理',
    sort: 0,
    configure: null,
    type: '0',
    path: '/admin/user/index',
    moduleTypeName: null,
    status: '1'
  },
  {
    id: 10156,
    parentId: -1,
    weight: 0,
    name: '商品',
    clientId: 'base_message',
    keepAlive: '0',
    moduleType: '1',
    clientName: '商品',
    icon: 'icon-system',
    permission: null,
    remark: null,
    displayStatus: '1',
    label: '商品',
    sort: 0,
    configure: null,
    type: '0',
    path: '/goods',
    moduleTypeName: '基础设置',
    status: '1',
    children: [
      {
        id: 10160,
        parentId: 10156,
        weight: 0,
        name: '商品分类',
        clientId: 'base_message',
        keepAlive: '0',
        moduleType: '1',
        clientName: '商品',
        icon: null,
        permission: null,
        remark: null,
        displayStatus: '1',
        label: '商品分类',
        sort: 0,
        configure: null,
        type: '0',
        path: '/goods/sort/index',
        moduleTypeName: '基础设置',
        status: '1'
      },
      {
        id: 10161,
        parentId: 10156,
        weight: 0,
        name: '分类列表',
        clientId: 'base_message',
        keepAlive: '0',
        moduleType: null,
        clientName: '分类列表',
        icon: null,
        permission: null,
        remark: null,
        displayStatus: '1',
        label: '分类列表',
        sort: 0,
        configure: null,
        type: '0',
        path: '/goods/sort-list/index',
        moduleTypeName: null,
        status: '1'
      },
      {
        id: 10162,
        parentId: 10156,
        weight: 0,
        name: '我找不到',
        clientId: 'base_message',
        keepAlive: '0',
        moduleType: '1',
        clientName: '我找不到',
        icon: null,
        permission: null,
        remark: null,
        displayStatus: '1',
        label: '我找不到',
        sort: 0,
        configure: null,
        type: '0',
        path: '/goods/not-fond',
        moduleTypeName: '我找不到',
        status: '1'
      }
    ]
  }
];
