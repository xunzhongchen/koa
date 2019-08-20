var fs = require('fs');

//获取命令行参数
var dir = process.argv[2];

console.log(fs.readdirSync(dir));