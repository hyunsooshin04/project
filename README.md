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
   `group` char(20) NOT NULL,
   `rank` char(20) NOT NULL,
   `gender` char(10) NOT NULL,
   `tell` char(20) NOT NULL,
   `joindate` datetime DEFAULT NULL,
   PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;