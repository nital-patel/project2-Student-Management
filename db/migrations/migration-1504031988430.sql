CREATE TABLE student
(
id serial,
student_name VARCHAR(20),
email VARCHAR(25),
gender VARCHAR(10),
phone_number VARCHAR(10),
profile_image VARCHAR(250),
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS class
(
id serial,
name VARCHAR(20),
instructor VARCHAR(25),
start_date VARCHAR(10),
end_date VARCHAR(10),
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS student_classes (
     "student_id" serial,
     "class_id" serial,
     CONSTRAINT "student_id_fk" FOREIGN KEY ("student_id") REFERENCES student("id") ON DELETE CASCADE,
     CONSTRAINT "class_id_fk" FOREIGN KEY ("class_id") REFERENCES class("id") ON DELETE CASCADE
 );
