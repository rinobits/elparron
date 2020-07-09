-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: localhost    Database: parron
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
-- Table structure for table `armar`
--

DROP TABLE IF EXISTS `armar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `armar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `torta_id` int(11) NOT NULL,
  `tamano_id` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `mensaje` varchar(255) DEFAULT NULL,
  `valor` int(11) NOT NULL,
  `abono` int(11) NOT NULL,
  `horaEntrega` varchar(255) NOT NULL,
  `imagen` text,
  `estado` int(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `armar`
--

LOCK TABLES `armar` WRITE;
/*!40000 ALTER TABLE `armar` DISABLE KEYS */;
/*!40000 ALTER TABLE `armar` ENABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargos`
--

LOCK TABLES `cargos` WRITE;
/*!40000 ALTER TABLE `cargos` DISABLE KEYS */;
/*!40000 ALTER TABLE `cargos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comunas`
--

DROP TABLE IF EXISTS `comunas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comunas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `estado` int(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comunas`
--

LOCK TABLES `comunas` WRITE;
/*!40000 ALTER TABLE `comunas` DISABLE KEYS */;
/*!40000 ALTER TABLE `comunas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empleados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rut` varchar(255) NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `apellidoPaterno` varchar(255) NOT NULL,
  `apellidoMaterno` varchar(255) NOT NULL,
  `cargo_id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `estado` int(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `rut` (`rut`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `masasabors`
--

LOCK TABLES `masasabors` WRITE;
/*!40000 ALTER TABLE `masasabors` DISABLE KEYS */;
INSERT INTO `masasabors` VALUES (1,'blanco',1,'2020-07-07 23:34:02','2020-07-07 23:34:02'),(2,'chocolate',1,'2020-07-07 23:34:09','2020-07-07 23:34:09'),(3,'nuez',1,'2020-07-07 23:34:19','2020-07-07 23:34:19');
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
INSERT INTO `masatipos` VALUES (1,'bizcocho',1,'2020-07-07 23:04:17','2020-07-07 23:04:17'),(2,'hoja',1,'2020-07-07 23:04:27','2020-07-07 23:04:27'),(3,'panqueque',1,'2020-07-07 23:04:35','2020-07-07 23:04:35'),(4,'merengue',1,'2020-07-07 23:04:41','2020-07-07 23:04:41');
/*!40000 ALTER TABLE `masatipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sabors`
--

DROP TABLE IF EXISTS `sabors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sabors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `estado` int(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sabors`
--

LOCK TABLES `sabors` WRITE;
/*!40000 ALTER TABLE `sabors` DISABLE KEYS */;
INSERT INTO `sabors` VALUES (1,'piña',1,'2020-07-07 23:09:38','2020-07-07 23:09:38'),(2,'lúcuma',1,'2020-07-07 23:09:45','2020-07-07 23:09:45'),(3,'nueces',1,'2020-07-07 23:09:53','2020-07-07 23:09:53'),(5,'frambuesa',1,'2020-07-07 23:10:02','2020-07-07 23:10:02'),(7,'chocolate',1,'2020-07-07 23:10:17','2020-07-07 23:10:17'),(8,'manjar',1,'2020-07-07 23:10:20','2020-07-07 23:10:20'),(9,'vainilla',1,'2020-07-07 23:10:24','2020-07-07 23:10:24'),(10,'solo manjar',1,'2020-07-07 23:10:33','2020-07-07 23:10:33');
/*!40000 ALTER TABLE `sabors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sucursals`
--

DROP TABLE IF EXISTS `sucursals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sucursals` (
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `rut` (`rut`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sucursals`
--

LOCK TABLES `sucursals` WRITE;
/*!40000 ALTER TABLE `sucursals` DISABLE KEYS */;
/*!40000 ALTER TABLE `sucursals` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tamanos`
--

LOCK TABLES `tamanos` WRITE;
/*!40000 ALTER TABLE `tamanos` DISABLE KEYS */;
INSERT INTO `tamanos` VALUES (1,'1/2','6 personas',1,'2020-07-08 00:09:33','2020-07-08 00:09:33'),(2,'1','12 personas',1,'2020-07-08 00:09:41','2020-07-08 00:09:41'),(4,'2','18 personas',1,'2020-07-08 00:10:54','2020-07-08 00:10:54'),(5,'3','24 personas',1,'2020-07-08 00:11:05','2020-07-08 00:11:05'),(6,'4','30 personas',1,'2020-07-08 00:11:10','2020-07-08 00:11:10'),(7,'5','40 personas',1,'2020-07-08 00:11:18','2020-07-08 00:11:18'),(8,'6','50 personas',1,'2020-07-08 00:11:24','2020-07-08 00:11:24');
/*!40000 ALTER TABLE `tamanos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `torta`
--

DROP TABLE IF EXISTS `torta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `torta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `masaTipo_id` int(11) NOT NULL,
  `masaSabor_id` int(11) NOT NULL,
  `sabor_id` int(11) NOT NULL,
  `estado` int(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `torta`
--

LOCK TABLES `torta` WRITE;
/*!40000 ALTER TABLE `torta` DISABLE KEYS */;
INSERT INTO `torta` VALUES (1,1,1,1,1,'2020-07-07 23:39:26','2020-07-07 23:39:26'),(2,1,1,2,1,'2020-07-07 23:39:29','2020-07-07 23:39:29'),(3,1,3,3,1,'2020-07-07 23:39:39','2020-07-07 23:39:39'),(4,1,1,5,1,'2020-07-07 23:39:58','2020-07-07 23:39:58'),(5,1,1,7,1,'2020-07-07 23:41:08','2020-07-07 23:41:08'),(6,1,1,10,1,'2020-07-07 23:42:15','2020-07-07 23:42:15'),(7,2,1,8,1,'2020-07-07 23:43:09','2020-07-07 23:43:09'),(8,2,1,2,1,'2020-07-07 23:43:36','2020-07-07 23:43:36'),(9,2,1,3,1,'2020-07-07 23:43:48','2020-07-07 23:43:48'),(10,2,1,9,1,'2020-07-07 23:44:12','2020-07-07 23:44:12'),(11,2,1,10,1,'2020-07-07 23:44:26','2020-07-07 23:44:26');
/*!40000 ALTER TABLE `torta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
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
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'admin','$2b$10$2lTk/wQjqqSsG6yMi29PyuHBb2GqDNP38ieMTi4kqLCZEVbyM8qrK',1,1,'2020-07-08 18:43:54','2020-07-08 18:43:54');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-09 10:27:28
