# react + antd + ts + vite + recoil 后台项目模板

## 简介
- 技术栈： react + typescript + react-router 6 + recoil + vite + antd

- 代码校验：eslint + prettier

## 启动

```js
// 安装依赖
npm install
// 本地启动
npm run dev
// 构建
npm run build
```

## 功能

- 界面排版简洁高效
- 侧边栏菜单根据路由配置动态生成
- 前端水印（可去除）
- 记录浏览记录的胶囊导航标签

![登录页](https://qa-oss.elebuys.com/resource/chart/202403281625380003306714.png)

![内容页](https://qa-oss.elebuys.com/resource/chart/202403281626500003306715.png)

## 关于路由

路由：是`模拟后台返回菜单`，采用`约定式路由`动态生成。在 src/page 文件夹下，文件的路径和后台菜单里的 path 路径相匹配。详情见 App.tsx

## lint配置，默认使用prettier

- vscode设置文件settings.json里配置：

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
```
