CREATE DATABASE IF NOT EXISTS `SCHOOL`;

USE `SCHOOL`;

DROP TABLE IF EXISTS `resultado`;

CREATE TABLE
    `resultado` (
        `id` int NOT NULL AUTO_INCREMENT,
        `bimestre` enum ("PRIMEIRO", "SEGUNDO", "TERCEIRO", "QUARTO") NOT NULL,
        `disciplina` enum ("Biologia", "Artes", "Geografia", "Sociologia") NOT NULL,
        `nota` float NOT NULL,
        `criadoEm` datetime NOT NULL,
        `atualizadoEm` datetime NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;