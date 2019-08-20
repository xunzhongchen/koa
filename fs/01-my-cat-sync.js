var fs = require('fs');

//获取命令行参数
var file = process.argv[2];

var buf = fs.readFileSync(file);
console.log(buf.toString('utf8'));

//执行程序 $ node ./fs/01-my-cat-sync.js ./fs/01-my-cat-sync.js 
//高级文件操作api 同步方式实现cat 查看文件功能 