CREATE TABLE IF NOT EXISTS `plantscare`.`plants` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(25),
    `instance` VARCHAR(25) NOT NULL,
    `sensor` VARCHAR(25) NOT NULL,
    `wateringMethod` VARCHAR(25) NOT NULL,
    `wateringDuration` SMALLINT UNSIGNED NOT NULL,
    `needWater` BOOLEAN
);
