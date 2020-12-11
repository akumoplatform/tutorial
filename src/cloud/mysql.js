mysql = {
    execFile: function (params, file) {
        params.args.unshift('mysql');
        params.push('<');
        params.push(file);
        return cmd(params).exe().getRaw();

    }
}
