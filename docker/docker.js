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
            return this._exe(params, 'ps');

        }

    },
    build: function (params, obj) {
        if (obj) {
            return this._exe(params, 'build', obj);

        }
        return this._exe(params, 'build');

    },
    run: function (params, obj) {
        return this._exe(params, 'run', obj);

    },
    _exe: function (params, command, obj) {
        if (params) {
            params.unshift('docker', command);

        }
        let params2cmd = { 'args': params };
        if (obj && obj.base) {
            params2cmd.base = obj.base;

        }
        if (obj && obj.stop) {
            params2cmd.stop = obj.stop;

        }
        return cmd(params2cmd).exe().getRaw();

    }

}
