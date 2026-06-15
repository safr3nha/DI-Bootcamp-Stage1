SELECT COUNT(*) FROM actors;

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES (NULL, NULL, NULL, NULL);

SELECT * FROM actors WHERE first_name IS NULL;
