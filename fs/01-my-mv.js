var fs = require('fs');

//获取命令行参数
var src = process.argv[2];
var dst = process.argv[3];

fs.renameSync(src,dst);