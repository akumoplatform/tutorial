function runSqlFiles(files, base) {
    let pass = System.var('mysqlPass');
    let user = System.var('mysqlUser');
    let command = 'mysql --password=' + pass + ' --user=' + user + ' --host=localhost < ';
    let params = { 'args': args, 'base': base, 'wait': false };

    files.array.forEach(file => {
        let args = ['cmd.exe', '/c', command + file];
        console.log(cmd(params).exe().getRaw());

    });

}


function waitProcess(p) {
    while (true) {
        if ( (p.isStopped()) ){
            break;
        }
    }
}

function printLogFile2(file, p) {
    let count = 0;
    while (true) {
        if (Files.count(file) > count) {
            console.log(Files.line(file, count));
            count += 1;

        }
        if (Files.count(file) == count && (p.isStopped()) ){
            break;
        }
    }
}