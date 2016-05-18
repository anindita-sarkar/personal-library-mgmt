-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 18, 2016 at 06:26 PM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `plm_dev`
--

-- --------------------------------------------------------

--
-- Table structure for table `plm_books`
--

CREATE TABLE IF NOT EXISTS `plm_books` (
  `id` int(11) NOT NULL COMMENT 'Unique ID of the book',
  `ISBN` varchar(30) DEFAULT NULL COMMENT 'The ISBN of the book',
  `Title` varchar(255) NOT NULL COMMENT 'The title / name of the book',
  `Authors` varchar(255) DEFAULT NULL COMMENT 'The author(s) of the book',
  `Genre_ID` int(11) NOT NULL COMMENT 'The genre to which this book belongs.',
  `Summary` varchar(2000) DEFAULT NULL COMMENT 'The detailed summary of the book',
  `Notes` varchar(255) DEFAULT NULL COMMENT 'Notes about the book. '
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COMMENT='The book table comprises of all the book related information in the system. ';

--
-- Dumping data for table `plm_books`
--

INSERT INTO `plm_books` (`id`, `ISBN`, `Title`, `Authors`, `Genre_ID`, `Summary`, `Notes`) VALUES
(1, '978-1449374648', 'Cloud Native Java: Designing Resilient Systems with Spring Boot, Spring Cloud, and Cloud Foundry 1st Edition', 'Josh Long', 1, 'Learn the essentials of the Spring Boot microframework for developing modern, cloud-ready JVM applications and microservices across a variety of environments. With this practical book, you’ll learn everything you need to know to get started working with Spring Boot.  A modern cloud-native architecture looks very different from the architectures inspired by the economics of scale ten years ago. Now that the cloud is the default for everyone—and not just trailblazers like Google, Amazon, Twitter, and Netflix—Spring Boot and Spring Cloud offer the best tools to commoditize the architecture of the cloud. This book shows you how to leverage Spring Boot to build modular, highly-scalable applications.', 'None'),
(2, '978-1617292545', 'Spring Boot in Action 1st Edition \r\n', 'Craig Walls\r\n', 1, 'Summary  A developer-focused guide to writing applications using Spring Boot. You''ll learn how to bypass the tedious configuration steps so that you can concentrate on your application''s behavior.  Purchase of the print book includes a free eBook in PDF, Kindle, and ePub formats from Manning Publications.  About the Technology  The Spring Framework simplifies enterprise Java development, but it does require lots of tedious configuration work. Spring Boot radically streamlines spinning up a Spring application. You get automatic configuration and a model with established conventions for build-time and runtime dependencies. You also get a handy command-line interface you can use to write scripts in Groovy. Developers who use Spring Boot often say that they can''t imagine going back to hand configuring their applications. About the Book  Spring Boot in Action is a developer-focused guide to writing applications using Spring Boot. In it, you''ll learn how to bypass configuration steps so you can focus on your application''s behavior. Spring expert Craig Walls uses interesting and practical examples to teach you both how to use the default settings effectively and how to override and customize Spring Boot for your unique environment. Along the way, you''ll pick up insights from Craig''s years of Spring development experience.  What''s Inside  Develop Spring apps more efficiently Minimal to no configuration Runtime metrics with the Actuator Covers Spring Boot 1.3 About the Reader  Written for readers familiar with the Spring Framework.  About the Author  Craig Walls is a software developer, author of the popular book Spring in Action, Fourth Edition, and a frequent speaker at conferences. Table of Contents  Bootstarting Spring Developing your first Spring Boot application Customizing configuration Testing with Spring Boot Getting Groovy with the Spring Boot CLI Applying Grails in Spring Boot Taking a peek inside with the Actuator Deploying Spring Boot applications APPENDIXES Spr', 'None'),
(3, '978-1449361303', 'ZooKeeper: Distributed Process Coordination 1st Edition \r\n', 'Flavio Junqueira\r\n', 1, 'Building distributed applications is difficult enough without having to coordinate the actions that make them work. This practical guide shows how Apache ZooKeeper helps you manage distributed systems, so you can focus mainly on application logic. Even with ZooKeeper, implementing coordination tasks is not trivial, but this book provides good practices to give you a head start, and points out caveats that developers and administrators alike need to watch for along the way.  In three separate sections, ZooKeeper contributors Flavio Junqueira and Benjamin Reed introduce the principles of distributed systems, provide ZooKeeper programming techniques, and include the information you need to administer this service.  Learn how ZooKeeper solves common coordination tasks Explore the ZooKeeper API’s Java and C implementations and how they differ Use methods to track and react to ZooKeeper state changes Handle failures of the network, application processes, and ZooKeeper itself Learn about ZooKeeper’s trickier aspects dealing with concurrency, ordering, and configuration Use the Curator high-level interface for connection management Become familiar with ZooKeeper internals and administration tools\r\n', 'None'),
(4, '978-1449358624', 'Learning Spark: Lightning-Fast Big Data Analysis 1st Edition\r\n', 'Holden Karau\r\n', 1, 'Data in all domains is getting bigger. How can you work with it efficiently? Recently updated for Spark 1.3, this book introduces Apache Spark, the open source cluster computing system that makes data analytics fast to write and fast to run. With Spark, you can tackle big datasets quickly through simple APIs in Python, Java, and Scala. This edition includes new information on Spark SQL, Spark Streaming, setup, and Maven coordinates.  Written by the developers of Spark, this book will have data scientists and engineers up and running in no time. You’ll learn how to express parallel jobs with just a few lines of code, and cover applications from simple batch jobs to stream processing and machine learning.  Quickly dive into Spark capabilities such as distributed datasets, in-memory caching, and the interactive shell Leverage Spark’s powerful built-in libraries, including Spark SQL, Spark Streaming, and MLlib Use one programming paradigm instead of mixing and matching tools like Hive, Hadoop, Mahout, and Storm Learn how to deploy interactive, batch, and streaming applications Connect to data sources including HDFS, Hive, JSON, and S3 Master advanced topics like data partitioning and shared variables\r\n', 'None');

-- --------------------------------------------------------

--
-- Table structure for table `plm_genre`
--

CREATE TABLE IF NOT EXISTS `plm_genre` (
  `ID` int(11) NOT NULL COMMENT 'Unique ID of the genre.',
  `Name` varchar(100) NOT NULL COMMENT 'Name of the genre. '
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COMMENT='The genre table contains all the genre which are linked with books. ';

--
-- Dumping data for table `plm_genre`
--

INSERT INTO `plm_genre` (`ID`, `Name`) VALUES
(1, 'Technical'),
(2, 'Comedy');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `plm_books`
--
ALTER TABLE `plm_books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plm_genre`
--
ALTER TABLE `plm_genre`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `plm_books`
--
ALTER TABLE `plm_books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Unique ID of the book',AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `plm_genre`
--
ALTER TABLE `plm_genre`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Unique ID of the genre.',AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
