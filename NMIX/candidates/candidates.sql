-- phpMyAdmin SQL Dump
-- version 3.5.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 28, 2013 at 08:42 AM
-- Server version: 5.1.68-cll
-- PHP Version: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `emuel_db2`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidates`
--

CREATE TABLE IF NOT EXISTS `candidates` (
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `spouse` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `year_born` varchar(255) NOT NULL,
  `party` varchar(255) NOT NULL,
  `religion` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `candidates`
--

INSERT INTO `candidates` (`first_name`, `last_name`, `spouse`, `state`, `year_born`, `party`, `religion`) VALUES
('Mitt', 'Romney', 'Ann', 'Massachusetts', '1947', 'Republican', 'Mormon'),
('Newt', 'Gingrich', 'Callista Bisek - Marriane Ginther - Jackie Battley', 'Georgia', '1943', 'Republican', 'Roman Catholic'),
('Ron', 'Paul', 'Carol Wells', 'Texas', '1935', 'Libertarian', 'Baptist'),
('Barack', 'Obama', 'Michelle', 'Illinois', '1961', 'Democratic', 'Christianity'),
('Rick', 'Santorum', 'Karen', 'Pennsylvania', '1958', 'Republican', 'Roman Catholic'),
('Rick', 'Perry', 'Anita', 'Texas', '1950', 'Republican', 'Evangelical Christian'),
('Michelle', 'Bachmann', 'Marcus', 'Minnesota', '1956', 'Republican', 'Evangelical Christian'),
('Jon', 'Huntsman', 'Mary Kaye Cooper', 'Utah', '1960', 'Republican', 'Mormon'),
('Herman', 'Cain', 'Gloria', 'Georgia', '1945', 'Republican', 'Baptist');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
