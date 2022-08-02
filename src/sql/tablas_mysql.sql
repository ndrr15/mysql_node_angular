CREATE TABLE `CarnetVacunacion`.`TBL_SYSUSUARIOS`(
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    `password` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    `role` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    `createdAt` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updateAt` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `nombre` TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    `apellido` TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    `cedula_nit` INT(12) NOT NULL,
    `bitactivo` BIT(1) NOT NULL DEFAULT b'1',
    `bitborrado` BIT(1) NOT NULL DEFAULT b'0',
    PRIMARY KEY(`id`),
    UNIQUE `username_index`(`username`),
    UNIQUE `cédula_nit_index`(`cedula_nit`)
) ENGINE = MyISAM;