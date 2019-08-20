var fs = require('fs');

//获取命令行参数
var file = process.argv[2];

//创建可读流 管道到 标准输出流
fs.createReadStream(file).pipe(process.stdout);


// 执行程序 $  node ./fs/01-my-cat-stream.js ./fs/01-my-cat-stream.js 
//流的方式 实现cat 查看文件功能 