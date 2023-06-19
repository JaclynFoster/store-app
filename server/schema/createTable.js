const createAnimalTable = `CREATE TABLE animals (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL
);`

const createTypesTable = `CREATE TABLE types (
  type_id SERIAL PRIMARY KEY,
  animal_id INT NOT NULL REFERENCES animals (id) ON DELETE CASCADE,
  type_name VARCHAR(255) NOT NULL,
  type_image VARCHAR(1000)
);`

const createBreedsTable = `CREATE TABLE breeds (
breed_id SERIAL PRIMARY KEY,
animal_id INT NOT NULL REFERENCES animals (id) ON DELETE CASCADE,
type_id INT NOT NULL REFERENCES types (type_id) ON DELETE CASCADE,
breed_image VARCHAR(1000),
breed_name VARCHAR(255) NOT NULL,
price INT,
details VARCHAR(10000)
);`

const insertBreeds = `INSERT INTO breeds(animal_id, type_id, breed_image, breed_name, price, details)

`
//ERROR:
//VALUES (873949768395784194, 874505992323563521, 'https://jaclynsimages.s3.us-east-2.amazonaws.com/blueRunnerCard.jpeg', 'Blue Runner Ducks', 10, 'All Runners were originally bred in Southeast Asia for high egg production and excellent mobility. There is evidence of their ancient ancestry from stone carvings in Java that are over 2000 years old. These ducks are still being used as they were then. Flocks of ducks are herded daily from field to field eating waste rice, weed seeds, insects, slugs and other bugs. They are then put in a bamboo pen at night where they lay their eggs and are released the following morning to clean other fields. During the course of their lives the ducks may cover hundreds of miles in their travels. Therefore, a hardy mobile duck is absolutely necessary - you will not find a better foraging duck than the Runner. Why are they called Indian Runners? Tradition has it the ducks were first imported into England in the 1850s and were named Indians as the ship had proceeded from India and had traded with the "Indies". It wasn't until 1909 that the importing family acknowledged that they came from Southeast Asia - not India. But by then the name had stuck and the breed was extremely popular throughout the country. Until the Khaki Campbell was bred, Runners were by far the most productive egg laying ducks. Prior to the turn of the century there were many egg trials in England where representatives of different breeds and farmers were put on a common site and their egg production monitored and compared.')
//VALUES (873949768395784194, 874505992323563521, 'https://jaclynsimages.s3.us-east-2.amazonaws.com/muscovyCard.jpg', 'Muscovy Ducks', 21, 'The Muscovy duck is a duck native to the Americas, from the Rio Grande Valley of Texas and Mexico south to Argentina and Uruguay. Feral Muscovy ducks are found in New Zealand, Australia, and in Central and Eastern Europe. The male Muscovy Duck is the largest duck in North America, but the female is only half his size. After laying 8 to 15 eggs, she does all of the nest defense and raises the ducklings which have sharp claws and hooked bills to climb out of the nest. Most people keep Muscovy ducks for their eggs and companionship, but traditionally, they've been kept for meat as well. This breed lays about 120 eggs per year, and is said to have the highest meat yield of any duck. For these reasons, Muscovy ducks are very popular dual-purpose ducks for homesteads and small farms.')
//DONE:
//VALUES (873949768395784194, 874505992323563521, 'https://jaclynsimages.s3.us-east-2.amazonaws.com/buffCard.png', 'Buff Ducks', 9, 'The Buff or Buff Orpington was developed by the William Cook family who lived in the Orpington area of Kent, England in the early 1900s. It was developed as a multipurpose bird, with the ability to lay good quantities of eggs along with having the size and feather color to make a good roasting duck. Some even claim that the buff colored feathers are easier to pluck than the white Pekin feathers. These attractive ducks are often kept solely as farm pets or “pond ornaments” due to their generous nature and graceful beauty.')
//VALUES (873949768395784194, 874505992323563521, 'https://jaclynsimages.s3.us-east-2.amazonaws.com/magpieCard.jpeg', 'Magpie Ducks', 13, 'Black and White Magpie ducklings are very attractive with their black and white down, that is a blueprint of the adult plumage. They are kept primarily for their beauty and for exhibition, but are also useful as a dual-purpose breed for meat and eggs. Magpie Duck have distinvtive markings that make it unique among ducks and a beautiful addition to any flock. The back, tail, and top of the head are either black or blue, while the remainder of the bird is white with sharp, clear distinctions between the white and colored areas. This Welsh breed was developed in the 1900s by M.C. Gower Williams and Oliver Drake as a beautiful yet productive bird. It is believed to have been created from a mix of Runner, Huttegem, and Termonde ducks. The Magpie first arrived in the United States in the 1960s, and they are regarded as fi ne egg producers. They are active foragers as well.')
//VALUES (873949768395784194, 874505992323563521, 'https://jaclynsimages.s3.us-east-2.amazonaws.com/khakiCampbellCard.jpeg', 'Khaki Campbell Ducks', 8, 'The Khaki Campbell is one of the more famous and popular duck breeds due to its excellent egg production. It was introduced in 1901 by Mrs. Adele Campbell of Gloucestershire, England. She experimented with Runners crossed with Rouen and Mallards but never revealed the exact genetic makeup of her Campbells. The advantage over the pure Runner was a more useful carcass for meat and improved egg production. Though they have been turned into an exhibition type breed, she was adamant that her birds were designed for production, not the exhibition hall. Initially they were a fairly mixed color breed but later an emphasis was placed on the current khaki color. It is interesting that at the same time the khaki color was being bred into the Campbell, there was a patriotic fervor for the British troops fighting the Boer War who also wore the khaki color. Once the "Khaki" was attached to "Campbell", the breed gained even more popularity. The Khaki Campbell gained even more renown due to the egg laying contests where it averaged up to 39 more eggs laid than the second best breed. One Khaki Campbell laid 346 eggs in 365 days while another laid one egg a day for 225 straight days!')
//VALUES (873949768395784194, 874505992323563521, 'https://jaclynsimages.s3.us-east-2.amazonaws.com/callCard.jpeg', 'Call Ducks', 30, 'Call Ducks are very tame and great with children. They are extremely active and animated and are a lot of fun to watch. The females are very loud though, so be aware that neighbors may find them annoying and that you may not want to place your Call Duck enclosure close to your bedroom window. Their chattiness is very cute, and they will even interact with humans. If alarmed, Call Ducks can fly and are exceptional fliers. Call Ducks were developed in the mid-1800s in Great Britain supposedly from old Dutch lines of Coy or Decoy Ducks. The small size was bred into them so they could lure larger wild ducks into funnel traps and then be able to fit through the trap exit hole and escape the trap, leaving the larger ducks inside. They were bred for their calling. Their call is very high pitched, carries well over long distances, luring wild ducks to get within range of hunters. The original Call Duck lines were made up of hard-working birds with strong working abilities. In the 1900s the rules and popularity of hunting were in a state of change, and Call Ducks were becoming rarer and rarer. However, around the middle of the 20th century, interest in Call Ducks was revived, and today they are one of the most popular breeds of duck for exhibition and show.')
//VALUES (873949768395784194, 874505992323563521, 'https://jaclynsimages.s3.us-east-2.amazonaws.com/whiteCrestedCard.jpg', 'White Crested Ducks', 10, 'Crested ducks are a domestic breed with fairly unknown origins, even though their existence dates back more than 2,000 years. These regal looking poultry birds were traditionally kept for meat and eggs but are now largely kept as pets. The cresting on these ducks is also sometimes found in mallards, which nearly all duck breeds originated from, as a mutation. Through selective breeding for the trait, the crested duck breed was ultimately developed and standards set. The crest is a heterozygous for a mutation that is genetic and causes a skull deformity. The dominant gene mutation causes a gap to grow in the duck embryo’s skull. In this gap a mass of fatty tissue emerges. On the fatty tissue feathers start to grow, creating either large and full or rather skinny crests that are less broad.')
//VALUES (873949768395784194, 874505992323563521, 'https://jaclynsimages.s3.us-east-2.amazonaws.com/pekinCard.jpg', 'Pekin Ducks', 12, 'The Pekin duck is among the most popular breeds kept in the United States, both in backyards and on homesteads across the country. Pekin ducks are a multi-purpose breed, meaning they have traditionally been raised for egg and meat production. As noted, Pekin ducks, both hens, and drakes are known to be friendly and non-aggressive poultry birds. They sometimes accept being petted by those who are raising them as either a pet or egg bird. Handling the ducklings frequently from the time they are hatched will help get the birds accustomed to being held and touched if this is an important consideration for you.')
//VALUES (873949768395784194, 874505992323563521, 'https://jaclynsimages.s3.us-east-2.amazonaws.com/cayugaCard.jpg', 'Cayuga Ducks', 8, 'The Cayuga duck is used for meat and egg production and does well at poultry shows. The name comes from where it was once very popular, Cayuga Lake, New York State. Admitted into the American Standard of Perfection in 1874. Noted feature is the iridescent beetle green color coming from the black feathers in the correct light. However, as Cayugas age, they naturally molt into gradually more white feathering — more so in hens than in drakes. The Cayuga duck is one of the most popular ducks for showing. They are very active foragers and love to eat snails, slugs and other destructive insects. The Cayuga duck is calm and does not fly and lays both white and darker eggs. The darker eggs have a dark film on the egg shell and are really not a dark shell.')

const insertTypes = `INSERT INTO types(animal_id, type_name, type_image)
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
const alterTypesTable = `ALTER TABLE breeds RENAME TO types`
const alterTypesColumn = `ALTER TABLE types RENAME COLUMN breed_image TO type_image`
const addImagesToTypes = `UPDATE animals SET image = $1 WHERE id = $2`

module.exports = {
  createAnimalTable,
  createTypesTable,
  createBreedsTable,
  insertAnimals,
  insertTypes,
  insertBreeds,
  alterAnimalsTable,
  alterTypesTable,
  alterTypesColumn,
  addImagesToTypes
}
