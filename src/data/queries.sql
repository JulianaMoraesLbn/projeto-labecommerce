CREATE TABLE table_labecommerce_aquisition (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    total_price FLOAT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES table_labecommerce_users (id),
    FOREIGN KEY (product_id) REFERENCES table_labecommerce_products (id)
);

CREATE TABLE table_labecommerce_users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(6) NOT NULL
);

CREATE TABLE table_labecommerce_products (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL,
    image_url VARCHAR(255)
);

SELECT * FROM table_labecommerce_aquisition;
SELECT * FROM table_labecommerce_users;
SELECT * FROM table_labecommerce_products;

