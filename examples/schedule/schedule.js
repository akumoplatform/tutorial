let command = 'ls';

if (System.isWindows()) {
    command = 'dir';

}
var processVar = process().args([command]);

var success = function (str) {
    console.log('success: ' + str);

}
var error = function (str) {
    console.log('error: ' + str);
    
}

schedule(success, error, 1000, processVar);
wait(20000);