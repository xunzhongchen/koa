var fs = require('fs');

//获取命令行参数
var mod = process.argv[2];
var src = process.argv[3];

fs.chmodSync(src,mod);


//更改文件权限