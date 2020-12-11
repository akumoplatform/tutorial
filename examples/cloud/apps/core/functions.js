function print(file, p) {
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