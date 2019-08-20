var fs = require('fs');

//获取命令行参数
var uid = process.argv[2];
var gid = process.argv[3];
var file = process.argv[4];

fs.chownSync(file,Number(uid),Number(gid));


//$ sudo ./04-my-chown.js 0 0 xyz

//更改文件所属