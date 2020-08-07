CREATE DATABASE IF NOT EXISTS parron;

USE parron;
DROP TABLE IF EXISTS programacionSemanal;

CREATE TABLE programacionSemanal (
  id           INT(11)      NOT NULL AUTO_INCREMENT,
  dia          INT(1)       NOT NULL,
  sucursal_id  INT(11)      NOT NULL,
  torta_id     INT(11)      NOT NULL,
  tamano_id    INT(11)      NOT NULL,
  cantidad     INT(3)       NOT NULL,
  estado       INT(1)       DEFAULT 1,
  createdAt    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  updatedAt    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);
ALTER TABLE programacionSemanal ADD UNIQUE programacionSemanalUnique(sucursal_id, dia, torta_id, tamano_id);

DESCRIBE programacionSemanal;

