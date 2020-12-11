io.rel('var/global.js');

let base = config.paths.sql;

let preSqlFiles = ['dropUsers.sql', 'dropSchema.sql'];
let sqlFiles = ['createSchemas.sql', 'createUsers.sql', 'others.sql'];

runSqlFiles(preSqlFiles, base);
runSqlFiles(sqlFiles, base);

function runSqlFiles(files, base) {
    let pass = System.var('mysqlPass');
    let user = System.var('mysqlUser');
    let command = 'mysql --password=' + pass + ' --user=' + user + ' --host=localhost < ';

    files.forEach(file => {
        let args = ['cmd.exe', '/c', command + file];
        let params = { 'args': args, 'base': base, 'wait': false };

        console.log(cmd(params).exe().getRaw());

    });

}
