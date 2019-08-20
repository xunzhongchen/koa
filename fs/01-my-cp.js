var fs = require('fs');

//获取命令行参数
var src = process.argv[2];
var dst = process.argv[3];

fs.createReadStream(src).pipe(fs.createWriteStream(dst));

// 实现cp  拷贝功能