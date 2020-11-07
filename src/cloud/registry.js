io.lib('/docker/docker.js');

function registry(configurations) {
    return {
        config: configurations,
        all: function () {
            let clientHttp = http().url(this.config.url);
            return clientHttp.get();
        },
        up: function (params) {
            if (Array.isArray(params)){
                params.forEach(c =>{
                    task(function(){
                        console.log('task: ' + JSON.stringify(c));
                        docker.run(c);

                    });

                })

            }else{
                console.log(docker.run(params));

            }

        }
    }
}