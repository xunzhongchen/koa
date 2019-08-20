var fs = require('fs');
var join = require('path').join;

//获取命令行参数
var src = process.argv[2];


if (fs.statSync(src).isFile()) fs.unlinkSync(src);

if (fs.statSync(src).isDirectory()) deleteDir(src);

function deleteDir(folder) {
    var files = fs.readdirSync(folder);

    for (var i = 0; i < files.length; i++) {
        var file = join(folder, files[i]);
        if (fs.statSync(file).isFile()) {
            fs.unlinkSync(file);
            continue;
        }

        if (fs.statSync(src).isDirectory()) {
            deleteDir(file);
        }

        fs.rmdirSync(folder);
    }
}