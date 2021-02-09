let baseUrl = "";

switch (process.env.NODE_ENV) {
    case 'development':
        // console.info("==============>"+process.env.NODE_ENV)
        //baseUrl = "http://localhost:2222/"  //开发环境url
        break
    case 'production':
        // console.info("==============>"+process.env.NODE_ENV)
        //baseUrl = "http://localhost:3333/"   //生产环境url
        break
    default:
        // baseUrl = process.env.NODE_ENV; //可以打印查看 process.env.NODE_ENV 值
        break;
}

export default baseUrl;