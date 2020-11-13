// eg. '/Users/Documents'
let path = System.var('user.dir');

var create = function (fileName) { console.log('created: ' + fileName); }
var modify = function (fileName) { console.log('modified: ' + fileName); }
var remove = function (fileName) { console.log('deleted: ' + fileName); }

watcher(create, modify, remove, path);

task(() => {
    wait(1000);
    Files.write(path + System.separator() + 'test.txt', 'hello world');

});
