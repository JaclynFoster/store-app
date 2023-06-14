const createAnimalTable = `CREATE TABLE animals (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL
);`

const insertAnimals = `INSERT INTO animals (type)
VALUES('fowl'),('lizards'),('bugs')
`

module.exports = { createAnimalTable, insertAnimals }
