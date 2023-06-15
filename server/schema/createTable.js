const createAnimalTable = `CREATE TABLE animals (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL
);`

createUserTable = `CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    zipcode INT,
    phone INT
)`

const insertAnimals = `INSERT INTO animals (type)
VALUES('fowl'),('lizards'),('bugs')
`
const alterAnimalsTable = `ALTER TABLE animals ADD image VARCHAR(1000)
`
const addImagesToTypes = `UPDATE animals SET image = $1 WHERE id = $2`

module.exports = {
  createAnimalTable,
  insertAnimals,
  alterAnimalsTable,
  addImagesToTypes
}

