let response = http().url("http://localhost:8089/api/customer/v1").get();
console.log(response);

let responseAll = http().url("http://localhost:8089/api/customer/v1/all").get();
console.log(responseAll);