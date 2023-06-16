const createAnimalTable = `CREATE TABLE animals (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL
);`

const createBreedTable = `CREATE TABLE breeds (
  breed_id SERIAL PRIMARY KEY,
  animal_id INT NOT NULL REFERENCES animals (id) ON DELETE CASCADE,
  breed_type VARCHAR(255) NOT NULL,
  breed_image VARCHAR(1000)
);`

const insertBreeds = `INSERT INTO breeds(animal_id, breed_type, breed_image)
VALUES (873949768395784194, 'ducks', 'https://jaclynsimages.s3.us-east-2.amazonaws.com/ducklings.jpg'),
(873949768395784194, 'chickens', 'https://jaclynsimages.s3.us-east-2.amazonaws.com/chickenCard.jpg'),
(873949768395784194, 'geese', 'https://jaclynsimages.s3.us-east-2.amazonaws.com/geese.jpg'),
(873949768395849730, 'lizards', 'https://jaclynsimages.s3.us-east-2.amazonaws.com/lizards.jpg'),
(873949768395849730, 'frogs', 'https://jaclynsimages.s3.us-east-2.amazonaws.com/frogs.jpg'),
(873949768395849730, 'turtles', 'https://jaclynsimages.s3.us-east-2.amazonaws.com/turtles.jpg'),
(873949768395882498, 'black soldier flies', 'https://jaclynsimages.s3.us-east-2.amazonaws.com/fly.jpg'),
(873949768395882498, 'mealworms', 'https://jaclynsimages.s3.us-east-2.amazonaws.com/mealworm.jpeg')
`

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
  createBreedTable,
  insertAnimals,
  insertBreeds,
  alterAnimalsTable,
  addImagesToTypes
}

