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

