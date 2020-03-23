let baseUrl = "";
// 这里定义没生效，慢慢理解吧
switch (process.env.NODE_ENV) { //注意变量名是自定义的
  case 'dev':
    baseUrl = "http://localhost:8088/"  //开发环境url
    break
  case 'serve':
    baseUrl = "http://localhost:8088/"   //生产环境url
    break
}

export default baseUrl;
