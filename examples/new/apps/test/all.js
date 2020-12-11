let eureka = http().url("http://localhost:8761/actuator/").get();
console.log(eureka);

let config = http().url("http://localhost:8888/actuator/").get();
console.log(config);

let coms = http().url("http://localhost:8091/actuator/").get();
console.log(coms);