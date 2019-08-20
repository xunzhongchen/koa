var fs = require('fs');

//获取命令行参数
var src = process.argv[2];

var lnk = fs.readlinkSync(src);

console.log(src,'->',lnk);