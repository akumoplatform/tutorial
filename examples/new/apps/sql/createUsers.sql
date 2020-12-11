create user 'propr_config_owner'@'localhost' identified by 'tmnl123';
grant all on propr_config.* to 'propr_config_owner'@'localhost';

create user 'propr_coms_owner'@'localhost' identified by 'tmnl123';
grant all on propr_coms.* to 'propr_coms_owner'@'localhost';

create user 'propr_cocomo_lrdb_owner'@'localhost' identified by 'tmnl123';
grant all on propr_cocomo_lrdb.* to 'propr_cocomo_lrdb_owner'@'localhost';

create user 'propr_tibcows_owner'@'localhost' identified by 'tmnl123';
grant all on propr_tibcows.* to 'propr_tibcows_owner'@'localhost';

create user 'propr_tariffs_owner'@'localhost' identified by 'tmnl123';
grant all on propr_tariffs.* to 'propr_tariffs_owner'@'localhost';

flush privileges;


