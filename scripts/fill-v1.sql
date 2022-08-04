DROP TABLE IF EXISTS stocks;
DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price INTEGER
);

CREATE TABLE stocks (
    product_id UUID,
    count INTEGER,
    CONSTRAINT fk_products FOREIGN KEY(product_id) REFERENCES products(id)
);

WITH product_ids as (
    INSERT INTO products (
        title, description, price
    ) VALUES
        ('First', 'First description', 1),
        ('Second', 'Second description', 2),
        ('Third', 'Third description', 3),
        ('Fourth', 'Fourth description', 4)
    RETURNING id, title
), counts as (
    SELECT * FROM (
        VALUES
        ('First', 10),
        ('Second', 20),
        ('Third', 30),
        ('Fourth', 40)
    ) AS t(title, count)
)
INSERT INTO stocks(product_id, count)
SELECT product_ids.id, counts.count FROM product_ids
INNER JOIN counts
ON product_ids.title = counts.title;

