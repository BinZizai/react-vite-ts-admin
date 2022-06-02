const commonVars = {
  '@link-color': '#1280F7', // 链接色
  '@success-color': '#3CBAAE', // 成功色
  '@warning-color': '#FAAD14', // 警告色
  '@error-color': '#FF4D4F', // 错误色
  '@heading-color': '#262626',
  '@text-color': '#595959',
  '@text-color-secondary': '#8c8c8c',
  '@disabled-color': '#bfbfbf',
  '@border-color-base': '#d9d9d9', // base border outline a component
  '@border-color-split': '#d9d9d9', // split border inside a component
  '@divider-color': '#f0f0f0',
  '@background-color-light': '#f5f5f5', // background of header and selected item
  '@background-color-base': '#f5f5f5' // Default grey background color
};
export const customer = {
  loginBackground: 'http://oss-cdn.mkh.cn/picture/2022-1-20/zSjT8REBtyBgHaK8XN1T7.png',
  loginLogo: 'http://oss-cdn.mkh.cn/picture/2022-1-20/AzDn-_pGrZy8EOaQfMHdt.png',
  lessVars: {
    ...commonVars,
    '@primary-color': '#FF4240'
  }
};
export const ecology = {
  loginBackground: 'http://oss-cdn.mkh.cn/picture/2022-1-20/cOdo_UQY-AQqfOSmzjdeX.png',
  loginLogo: 'http://oss-cdn.mkh.cn/picture/2022-1-20/imxhEOhvORY4zg_BCGyEt.png',
  lessVars: {
    ...commonVars,
    '@primary-color': '#009688'
  }
};
export const tech = {
  loginBackground: 'http://oss-cdn.mkh.cn/picture/2022-1-20/cOdo_UQY-AQqfOSmzjdeX.png',
  loginLogo: 'http://oss-cdn.mkh.cn/picture/2022-1-20/VRwaQtCS6XMHpdCxSRJtW.png',
  lessVars: {
    ...commonVars,
    '@primary-color': '#1280F7',
    '@menu-inline-submenu-bg': '#F6FAFF'
  }
};
const config = {
  customer,
  ecology,
  tech
};

export default config;
