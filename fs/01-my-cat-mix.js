
var fs = require('fs');

//获取命令行参数
var file = process.argv[2];

// 返回一个文件描述符  默认有三个文件描述符被保留 0-stdin 标准输入流,1-stdout 标准输出流 2-stderr 错误流
var fid = fs.openSync(file, 'r');

var buf = fs.readFileSync(fid);

// console.log(buf.toString('utf8'));
fs.writeSync(1,fs.readFileSync(fid).toString('utf8')); 

fs.closeSync(fid);

// 执行程序 $  node ./fs/01-my-cat-mix.js ./fs/01-my-cat-mix.js 

//高级与底层文件操作api混合 实现cat 查看文件功能 