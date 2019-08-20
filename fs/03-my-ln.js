var fs = require('fs');
var opt, src, lnk;

switch (process.argv.length) {
    case 4:
        src = process.argv[2];
        lnk = process.argv[3];
        fs.linkSync(src, lnk);
        break;
    case 5:
        opt = process.argv[2];
        src = process.argv[3];
        lnk = process.argv[4];
        if (opt === '-s') {
            fs.symlinkSync(src, lnk);
        } else {
            console.log('wrong');
        }
        break;
    default:
        console.log('wrong');
}

//$ ln 00.js 00.lnk 创建硬链接
//$ ln -s 00.js 00.lnk 创建软链接