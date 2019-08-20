var fs = require('fs');

//获取命令行参数
var file = process.argv[2];


fs.writeFileSync(file,'');

// 实现touch  创建文件功能