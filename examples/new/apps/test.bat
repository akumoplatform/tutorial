START /MAX "STOP" akumo -i:others\\stopJava.js
START /MAX "Mysql" akumo -i:infra\\mysql.js -Denv:win-dev -DmysqlUser:root -DmysqlPass:Aplux230880
timeout 3
START /MAX "SDS" akumo -i:services\\sds.js -Denv:win-dev
timeout 3
START /MAX "CONFIG" akumo -i:services\\config.js -Denv:win-dev
timeout 3
START /MAX "COMS" akumo -i:services\\coms.js -Denv:win-dev
START /MAX "TARIFFS" akumo -i:services\\tariffs.js -Denv:win-dev
