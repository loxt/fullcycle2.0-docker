USE fullcycle;

CREATE TABLE IF NOT EXISTS peoples
(
    id
        INT
            UNSIGNED
                     NOT
                         NULL
        AUTO_INCREMENT,
    name
        VARCHAR(255) NOT NULL,
    PRIMARY KEY
        (
         id
            )
);
