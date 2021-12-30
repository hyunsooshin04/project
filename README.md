# project
CREATE DATABASE project;

USE project;

CREATE TABLE `admin_id` (
   `id` char(20) NOT NULL,
   `pwd` char(20) NOT NULL,
   `name` char(20) NOT NULL,
   `email` char(30) NOT NULL,
   `companyname` char(20) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table user_id (
   `id` char(20) NOT NULL,
   `pwd` char(20) NOT NULL,
   `name` char(20) NOT NULL,
   `email` char(30) NOT NULL,
   `company` char(20) NOT NULL,
   `department` char(20) NOT NULL,
   `position` char(20) NOT NULL,
   `gender` char(10) NOT NULL,
   `tell` char(20) NOT NULL,
   `joindate` datetime DEFAULT NULL,
   PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into admin_id (id, pwd, name, email, company) values ("shsshs11203", "asdf11203", "신현수", "shsshs11203@naver.com", "SchCompany")