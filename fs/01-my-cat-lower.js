var fs = require('fs');

//获取命令行参数
var file = process.argv[2];  

//获取文件长度
var len = fs.statSync(file).size;

//创建Buffer
var buf = new Buffer(len);

//底层文件操作是需要打开文件的
var fid=fs.openSync(file,'r');

//把文件读取到Buffer里面
fs.readSync(fid,buf,0,len,0);

//打印文件内容
console.log(buf.toString('utf8'));

//关闭文件
fs.closeSync(fid);

//执行程序  $ node ./fs/01-my-cat-lower.js ./fs/01-my-cat-lower.js 
//底层文件操作api 同步方式实现cat 查看文件功能 