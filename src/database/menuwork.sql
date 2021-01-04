-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-01-2021 a las 19:37:38
-- Versión del servidor: 10.4.11-MariaDB-log
-- Versión de PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `menuwork`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `character`
--

CREATE TABLE `character` (
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `origin` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `id` int(11) NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `species` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `episode` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `created` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `character`
--

INSERT INTO `character` (`name`, `origin`, `location`, `id`, `gender`, `status`, `species`, `type`, `image`, `episode`, `url`, `created`, `user_id`) VALUES
('Abadango Cluster Princess', 'Alive', '{\"name\":\"Abadango\",\"url\":\"https://rickandmortyapi.com/api/location/2\"}', 6, 'Female', 'Alive', 'Alien', '\"\"', 'https://rickandmortyapi.com/api/character/avatar/6.jpeg', '[\"https://rickandmortyapi.com/api/episode/27\"]', 'https://rickandmortyapi.com/api/character/6', '2017-11-04T19:50:28.250Z', 13);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `my_friend`
--

CREATE TABLE `my_friend` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `gender` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `my_friend`
--

INSERT INTO `my_friend` (`id`, `name`, `createdAt`, `updateAt`, `gender`) VALUES
(1, 'Raul', '2021-01-02 22:39:58.407965', '2021-01-02 22:39:58.420852', ''),
(2, 'Francisca', '2021-01-02 22:39:58.407965', '2021-01-02 22:39:58.420852', ''),
(3, 'Sebastian', '2021-01-02 22:39:58.407965', '2021-01-02 22:39:58.420852', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_spanish_ci NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `role`, `createdAt`, `updateAt`) VALUES
(13, 'Javierceballos@gmail.com', '$2a$10$z2O5K7meCRAayScW9.UlqeojjbJMlxXjH8A9qo6ctFJpvdsrH4ZAy', 'admin', '2021-01-03 00:03:59.564142', '2021-01-03 00:03:59.564142'),
(14, 'eballos@gmail.com', '$2a$10$zHIQwIMBTVlgTZz6Hswe9.SG6oudpRymhBpcETxIZ/Z.SB/caUPve', 'suscriptor', '2021-01-03 22:34:19.321004', '2021-01-03 22:34:19.321004');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `character`
--
ALTER TABLE `character`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `my_friend`
--
ALTER TABLE `my_friend`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_78a916df40e02a9deb1c4b75ed` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `character`
--
ALTER TABLE `character`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `my_friend`
--
ALTER TABLE `my_friend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
