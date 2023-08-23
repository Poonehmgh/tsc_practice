CREATE DATABASE todoapp;

CREATE TABLE todos(
    id VARCHAR(255) PRIMARY KEY ,
    user_email VARCHAR(255) ,
    title VARCHAR(30) ,
    progress INT,
    date VARCHAR(300)
);

CREATE TABLE users(
  email VARCHAR(255) PRIMARY KEY ,
  hashed_password VARCHAR(255)
);

INSERT INTO todos(id, user_email, title, progress, date) VALUES (01, 'test@test.com', 'clean the windows', 10, '10.10.23 15:00');
INSERT INTO todos(id, user_email, title, progress, date) VALUES (02, 'test2@test.com', 'Bake a big cake', 20, '10.10.23 12:00');
INSERT INTO users(email, hashed_password) VALUES ('test@test.com', 'vfdjek');



CREATE USER pooneh_ WITH PASSWORD 'secret';
GRANT CONNECT ON DATABASE todoapp TO pooneh_;
GRANT ALL PRIVILEGES ON TABLE todos TO pooneh_;