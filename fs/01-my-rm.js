var fs = require('fs');

//获取命令行参数
var file = process.argv[2];

if (fs.statSync(file).isFile()) {//判断是否文件
    fs.unlinkSync(file) //删除该文件
}