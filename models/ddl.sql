CREATE DATABASE `infoTravel` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;

CREATE TABLE `BOLETOS` (
  `id_ticket` int(10) NOT NULL,
  `id_infotravel` int(17) NOT NULL,
  `ciudad_origen` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ciudad_destino` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_ida` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `fecha_llegada` time NOT NULL,
  `fecha_regreso` timestamp NULL DEFAULT NULL,
  `numero_piso` int(1) NOT NULL,
  `numero_asiento` int(2) NOT NULL,
  `precio_antes` int(6) NOT NULL,
  `descuento` int(6) NOT NULL,
  `precio_despues` int(6) NOT NULL,
  `confirmado` bit(1) NOT NULL DEFAULT b'0',
  `rut_FK` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_tipo_asiento_FK` int(2) NOT NULL,
  `id_empresa_FK` int(3) NOT NULL,
  `id_ticket_vuelta` int(10) DEFAULT NULL,
  PRIMARY KEY (`id_ticket`),
  UNIQUE KEY `id_infotravel_UQ` (`id_infotravel`),
  KEY `BOLETOS_FK` (`rut_FK`),
  KEY `BOLETOS_FK_1` (`id_tipo_asiento_FK`),
  KEY `BOLETOS_FK_2` (`id_empresa_FK`),
  KEY `BOLETOS_FK_3` (`id_ticket_vuelta`),
  CONSTRAINT `BOLETOS_FK` FOREIGN KEY (`rut_FK`) REFERENCES `USUARIOS` (`rut`),
  CONSTRAINT `BOLETOS_FK_1` FOREIGN KEY (`id_tipo_asiento_FK`) REFERENCES `TIPOS_ASIENTOS` (`id_tipo_asiento`),
  CONSTRAINT `BOLETOS_FK_2` FOREIGN KEY (`id_empresa_FK`) REFERENCES `EMPRESAS_TRANSPORTE` (`id_empresa`),
  CONSTRAINT `BOLETOS_FK_3` FOREIGN KEY (`id_ticket_vuelta`) REFERENCES `BOLETOS` (`id_ticket`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `EMPRESAS_TRANSPORTE` (
  `id_empresa` int(3) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` bit(1) NOT NULL,
  PRIMARY KEY (`id_empresa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `ROLES` (
  `id_rol` int(2) NOT NULL,
  `nombre` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` bit(1) NOT NULL,
  PRIMARY KEY (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `TICKETS_DATA` (
  `rut` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_phone` int(9) NOT NULL,
  `emergency_phone` int(9) NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nacionality` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_ticket` int(10) NOT NULL AUTO_INCREMENT,
  `go_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `go_arrive_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `city_from_depart` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city_to_depart` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `climb_stop_depart` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descent_stop_depart` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `floor_number_depart` int(1) NOT NULL,
  `seat_number_depart` int(2) NOT NULL,
  `before_price_depart` int(6) NOT NULL,
  `dcto_depart` int(6) NOT NULL,
  `after_price_depart` int(6) NOT NULL,
  `seat_type_depart` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_depart` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `back_date` timestamp NULL DEFAULT NULL,
  `back_arrive_date` timestamp NULL DEFAULT NULL,
  `city_from_return` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city_to_return` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `climb_stop_return` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descent_stop_return` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `floor_number_return` int(1) DEFAULT NULL,
  `seat_number_return` int(2) DEFAULT NULL,
  `before_price_return` int(6) DEFAULT NULL,
  `dcto_return` int(6) DEFAULT NULL,
  `after_price_return` int(6) DEFAULT NULL,
  `seat_type_return` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company_return` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_ticket`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `TIPOS_ASIENTOS` (
  `id_tipo_asiento` int(2) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` bit(1) NOT NULL,
  PRIMARY KEY (`id_tipo_asiento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `USUARIOS` (
  `rut` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono_personal` int(9) NOT NULL,
  `telefono_emergencia` int(9) NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nacionalidad` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_rol_FK` int(2) NOT NULL,
  PRIMARY KEY (`rut`),
  KEY `USUARIOS_FK` (`id_rol_FK`),
  CONSTRAINT `USUARIOS_FK` FOREIGN KEY (`id_rol_FK`) REFERENCES `ROLES` (`id_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
