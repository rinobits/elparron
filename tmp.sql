-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: localhost    Database: parrot
-- ------------------------------------------------------
-- Server version	5.7.30-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `armados`
--

DROP TABLE IF EXISTS `armados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `armados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `torta_id` int(11) NOT NULL,
  `tamano_id` int(11) NOT NULL,
  `imagen` text,
  `estado` int(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `armados`
--

LOCK TABLES `armados` WRITE;
/*!40000 ALTER TABLE `armados` DISABLE KEYS */;
/*!40000 ALTER TABLE `armados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cargos`
--

DROP TABLE IF EXISTS `cargos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cargos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `estado` int(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargos`
--

LOCK TABLES `cargos` WRITE;
/*!40000 ALTER TABLE `cargos` DISABLE KEYS */;
INSERT INTO `cargos` VALUES (1,'desarrollador',1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'consultor',1,'2020-06-21 01:34:59','2020-06-21 01:34:59');
/*!40000 ALTER TABLE `cargos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `masasabors`
--

DROP TABLE IF EXISTS `masasabors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `masasabors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `estado` int(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `masasabors`
--

LOCK TABLES `masasabors` WRITE;
/*!40000 ALTER TABLE `masasabors` DISABLE KEYS */;
INSERT INTO `masasabors` VALUES (1,'nuez',1,'2020-06-21 19:24:21','2020-06-21 19:30:37'),(2,'blanco',1,'2020-06-21 19:28:52','2020-06-21 19:28:52'),(4,'chocolate',1,'2020-06-21 19:29:01','2020-06-21 19:29:01');
/*!40000 ALTER TABLE `masasabors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `masatipos`
--

DROP TABLE IF EXISTS `masatipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `masatipos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `estado` int(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `masatipos`
--

LOCK TABLES `masatipos` WRITE;
/*!40000 ALTER TABLE `masatipos` DISABLE KEYS */;
INSERT INTO `masatipos` VALUES (1,'bizcocho',1,'2020-06-21 18:10:29','2020-06-21 18:10:29'),(2,'hoja',1,'2020-06-21 18:10:40','2020-06-21 18:10:40'),(3,'panqueque',1,'2020-06-21 18:10:47','2020-06-21 18:10:47'),(4,'merengue',1,'2020-06-21 18:10:54','2020-06-21 18:10:54');
/*!40000 ALTER TABLE `masatipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sabores`
--

DROP TABLE IF EXISTS `sabores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sabores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `estado` int(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sabores`
--

LOCK TABLES `sabores` WRITE;
/*!40000 ALTER TABLE `sabores` DISABLE KEYS */;
INSERT INTO `sabores` VALUES (1,'piña',1,'2020-06-21 19:35:15','2020-06-21 19:35:15'),(2,'lúcuma',1,'2020-06-21 19:35:39','2020-06-21 19:35:39'),(3,'nueces',1,'2020-06-21 19:35:46','2020-06-21 19:35:46'),(4,'frambuesa',1,'2020-06-21 19:35:51','2020-06-21 19:35:51'),(5,'chocolate',1,'2020-06-21 19:35:59','2020-06-21 19:35:59'),(6,'manjar',1,'2020-06-21 19:36:05','2020-06-21 19:36:05'),(7,'vainilla',1,'2020-06-21 19:36:12','2020-06-21 19:36:12');
/*!40000 ALTER TABLE `sabores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sucursales`
--

DROP TABLE IF EXISTS `sucursales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sucursales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rut` varchar(255) NOT NULL,
  `razonSocial` varchar(255) NOT NULL,
  `giro` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `comuna_id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `contactoEmail` varchar(255) NOT NULL,
  `contactoNombre` varchar(255) NOT NULL,
  `colorFondo` varchar(255) NOT NULL,
  `colorLetra` varchar(255) NOT NULL,
  `estado` int(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sucursales`
--

LOCK TABLES `sucursales` WRITE;
/*!40000 ALTER TABLE `sucursales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sucursales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tamanos`
--

DROP TABLE IF EXISTS `tamanos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tamanos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tamano` varchar(255) NOT NULL,
  `personas` varchar(255) NOT NULL,
  `estado` int(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tamano` (`tamano`),
  UNIQUE KEY `personas` (`personas`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tamanos`
--

LOCK TABLES `tamanos` WRITE;
/*!40000 ALTER TABLE `tamanos` DISABLE KEYS */;
INSERT INTO `tamanos` VALUES (1,'1/2','6 personas',1,'2020-06-20 00:00:00','2020-06-20 00:00:00'),(2,'1','12 personas',1,'2020-06-20 00:00:00','2020-06-20 00:00:00'),(3,'2','18 personas',1,'2020-06-20 00:00:00','2020-06-20 00:00:00'),(4,'3','24 personas',1,'2020-06-20 00:00:00','2020-06-20 00:00:00'),(5,'4','30 personas',1,'2020-06-20 00:00:00','2020-06-20 00:00:00'),(6,'5','40 personas',1,'2020-06-20 00:00:00','2020-06-20 00:00:00'),(7,'6','50 personas',1,'2020-06-20 00:00:00','2020-06-20 00:00:00');
/*!40000 ALTER TABLE `tamanos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tortas`
--

DROP TABLE IF EXISTS `tortas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tortas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `masaTipo_id` varchar(255) NOT NULL,
  `masaSabor_id` varchar(255) NOT NULL,
  `sabor_id` varchar(255) NOT NULL,
  `estado` int(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tortas`
--

LOCK TABLES `tortas` WRITE;
/*!40000 ALTER TABLE `tortas` DISABLE KEYS */;
INSERT INTO `tortas` VALUES (1,'1','2','1',1,'2020-06-21 20:06:01','2020-06-21 20:06:01'),(2,'1','2','2',1,'2020-06-21 20:06:09','2020-06-21 20:06:09'),(3,'1','1','3',1,'2020-06-21 20:06:15','2020-06-21 20:06:15'),(4,'1','2','4',1,'2020-06-21 20:06:30','2020-06-21 20:06:30'),(5,'1','2','5',1,'2020-06-21 20:06:40','2020-06-21 20:06:40'),(6,'1','2','6',1,'2020-06-21 20:06:51','2020-06-21 20:06:51'),(7,'2','2','6',1,'2020-06-21 20:07:01','2020-06-21 20:07:01'),(8,'2','2','2',1,'2020-06-21 20:07:12','2020-06-21 20:07:12'),(9,'2','2','3',1,'2020-06-21 20:07:20','2020-06-21 20:07:20'),(10,'2','2','7',1,'2020-06-21 20:07:24','2020-06-21 20:07:24'),(11,'2','2','6',1,'2020-06-21 20:07:28','2020-06-21 20:07:28');
/*!40000 ALTER TABLE `tortas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `userPassword` varchar(255) NOT NULL,
  `empleado_id` int(11) NOT NULL,
  `estado` int(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','$2b$10$yx8eZzlI3zDQkYRlvmU9F.4ZU0wzNfk8x0TKWHlY/2J0j2COJV.bW',1,1,'2020-06-22 17:02:17','2020-06-22 17:02:17');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-22 18:11:30
