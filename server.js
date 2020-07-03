// 引入express框架
const express = require("express");
const app = express();

// 引入代理中间件
const { createProxyMiddleware  } = require('http-proxy-middleware');

// 设置静态资源
app.use(express.static("./index"));

// 使用代理
app.use('/', createProxyMiddleware({
    target: 'https://gateway-int.bmw-emall.cn/',
    pathRewrite: {
        '^/api' : ''
    },
    changeOrigin: true
  
}));

app.listen(8082);
console.log("服务启动成功");