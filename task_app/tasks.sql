-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2020 a las 22:44:22
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `taskapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `task` varchar(150) NOT NULL,
  `date` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`id`, `task`, `date`) VALUES
(30, 'moviles 3', '11/06/20'),
(31, 'Study PHP', '12/06/20'),
(33, 'Study python', '12/06/20'),
(34, 'Study Javascript', '12/06/20'),
(35, 'jfxgcch', 'jgjkhjkll'),
(36, 'proyeto de nuevas tecnologias fahl', '10/12/20'),
(37, 'proyeto de nuevas tecnologias fahl', '10/12/20'),
(41, 'Study PHP3', '12/06/20'),
(42, 'WEB 3', '11/06/20'),
(43, 'WEB 2', '11/06/20'),
(44, 'WEB I', '11/06/20'),
(45, 'WEB II', '11/06/20'),
(46, 'WEB III-fahl', '11/06/20'),
(47, 'WEB III-fahl123', '11/06/20'),
(48, 'WEB 3', '11/06/20'),
(49, 'moviles 3', '11/06/20'),
(50, 'moviles3', '11/06/20'),
(51, 'moviles 3', '11/06/20'),
(52, 'moviles 3', '15/11/2020');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
