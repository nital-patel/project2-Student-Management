DROP TABLE data;

CREATE TABLE IF NOT EXISTS data
(
id serial,
name VARCHAR(20),
instructor VARCHAR(25),
start_date VARCHAR(10),
end_date VARCHAR(10),
PRIMARY KEY(id,start_date,end_date)
);
