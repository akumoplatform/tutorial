grant super on *.* to 'propr_cocomo_lrdb_owner'@'localhost';
flush privileges;

set global log_bin_trust_function_creators=1;