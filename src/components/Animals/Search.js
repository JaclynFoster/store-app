// import React, { useState } from 'react'
// import { BsSearch } from 'react-icons/bs'
// import SPAGridCard from './SPAGridCard'


// const Search = ({animalBreed}) => {
    // const [searchResults, setSearchResults] = useState({query: '', result:[]})

    // const searchAnimals = (e) => {
    //     const results =  animalBreed.filter(breed => {
    //         let name = breed.breed_name.toLowerCase()
    //         let params = e.target.value.toLowerCase()
    //         if (e.target.value === '') 
    //             return breed
    //         return name.includes(params)
    //     })
    //     setSearchResults({
    //         query: e.target.value,
    //         result: results
    //     })
    // }

 

    // return(
        // <div className="search-container">
        //     <BsSearch className="search-icon"/>
        //     <input 
        //     placeholder="Search for Animal Breed..."
        //     type="search"
        //     className="search-input"
        //     value={searchResults.query}
        //     onChange={searchAnimals}
        //     />
        // <div>
        // {/* {checkFilter().map(breed => {
        //   return <SPAGridCard  breed={breed}/>
        // })} */}
        // </div>
        // </div>
//     )
// }

// export default Search