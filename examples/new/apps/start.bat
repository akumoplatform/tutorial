START /MAX "STOP" akumo -i:others\\stopJava.js
timeout 3
START /MAX "Mysql" akumo -i:infra\\mysql.js -Denv:win-dev -DmysqlUser:root -DmysqlPass:Aplux230880
timeout 3
START /MAX "SDS" akumo -i:services\\sds.js -Denv:win-dev
timeout 3
START /MAX "CONFIG" akumo -i:services\\config.js -Denv:win-dev
timeout 3
START /MAX "COMS" akumo -i:services\\coms.js -Denv:win-dev
REM START /MAX "TIBCOWS" akumo -i:services\\tibcows.js -Denv:win-dev
START /MAX "ActiveMQ" akumo -i:infra\\broker.js -Denv:win-dev
START /MAX "COCOMO" akumo -i:services\\cocomo.js -Denv:win-dev & pause
START /MAX "CONSUMER" akumo -i:services\\consumer.js -Denv:win-dev
START /MAX "PROCESSOR" akumo -i:services\\processor.js -Denv:win-dev
REM START /MAX "TARIFFS" akumo -i:services\\tariffs.js -Denv:win-dev
