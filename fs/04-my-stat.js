var fs = require('fs');

//获取命令行参数
var file = process.argv[2];

console.log(fs.statSync(file));

//查看文件详细信息 