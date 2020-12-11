Cmds.wait(true);
let pids = Cmds.pids(['java']);

pids.forEach(pid => {
    console.log('killing: ' + pid);
    
});

Cmds.kill(pids);