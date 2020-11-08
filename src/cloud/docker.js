docker = {
    images: function (cid) {
        if (cid) {
            let result = cmd({ 'args': ["bash", "-c", "docker images | grep " + cid] }).exe().getRaw();
            let elements = [];
            let all = result.split('\n');
            all.forEach(element => {
                let row = element.replace(/  +/g, ';;').split(';;');
                if (row[0] !== '') {
                    elements.push({
                        'repository': row[0],
                        'tag': row[1],
                        'imageId': row[2],
                        'created': row[3],
                        'size': row[4]

                    });

                }

            });
            return elements;

        } else {
            return this._exe(params, 'image');

        }

    },
    stop: function(params){
        this._exe(params, 'stop');

    },
    rm: function(params){
        this._exe(params, 'rm');
        
    },
    inspect: function(id){
        return cmd({ 'args': ['docker','inspect', id], 'wait': true }).exe().getRaw()
        
    },
    ps: function (cid) {
        if (cid) {
            let result = cmd({ 'args': ["bash", "-c", "docker ps -a | grep " + cid] }).exe().getRaw();
            let elements = [];
            let all = result.split('\n');
            all.forEach(element => {
                let row = element.replace(/  +/g, ';;').split(';;');
                if (row[0] !== '') {
                    elements.push({
                        'containerId': row[0],
                        'image': row[1],
                        'command': row[2],
                        'created': row[3],
                        'status': row[4]

                    });

                }

            });
            return elements;

        } else {
            return this._exe({}, 'ps');

        }

    },
    build: function (params) {
        return this._exe(params, 'build');

    },
    run: function (params) {
        return this._exe(params, 'run');

    },
    _exe: function (params, command) {
        if (params && params.args) {
            params.args.unshift('docker', command);

        }
        return cmd(params).exe().getRaw();

    }

}
