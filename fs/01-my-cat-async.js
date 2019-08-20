var fs = require('fs');

//获取命令行参数
var file = process.argv[2];

fs.readFile(file, function (err, buf) {
    if (err) {//出错 打印错误信息 退出程序
        console.log(err.message);   
        process.exit(1);
    } else {
        console.log(buf.toString('utf8'));
    }   
})
// 执行程序 $  node ./fs/01-my-cat-async.js ./fs/01-my-cat-async.js 

//高级文件操作api 异步方式实现cat 查看文件功能 