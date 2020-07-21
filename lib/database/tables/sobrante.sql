CREATE DATABASE IF NOT EXISTS parron;

USE parron;

CREATE TABLE IF NOT EXISTS sobrante (
  id           INT(11)      NOT NULL AUTO_INCREMENT,
  dia          VARCHAR(10)  NOT NULL,
  sucursal_id  INT(11)      NOT NULL,
  torta_id     INT(11)      NOT NULL,
  tamano_id    INT(11)      NOT NULL,
  cantidad     INT(3)       NOT NULL,
  estado       INT(1)       DEFAULT 1,
  PRIMARY KEY(id)
);

DESCRIBE sobrante;

