import { getWalkers } from "./database.js"
import { getCities } from "./database.js"
import { getWalkerCities } from "./database.js"

const walkers = getWalkers()
const walkerCities = getWalkerCities()
const cities = getCities()


document.addEventListener(
    "click",  
    (clickEvent) => {
        const itemClicked = clickEvent.target
        console.log(clickEvent.target)
        /*
        Only run the rest of the logic if a walker <li> was clicked
        */
       console.log(itemClicked.id)
       if (itemClicked.id.startsWith("walker")) {
           
           const [,walkerId] = itemClicked.id.split("--")
           
           /*
           Now that you have the primary key of a walker object,
           find the whole object by iterating the walkers array.
           */
          for (const walker of walkers) {
              if (walker.id === parseInt(walkerId)) {
                  const assignments = filterWalkerCitiesByWalker(walker)
                  const theseCities = assignedCityNames(assignments)
                  
                  window.alert(`${walker.name} services ${theseCities}`)
                }
            }
        }
    }
)
    
    
    const filterWalkerCitiesByWalker = () => {
        const assignments = []
        for (const assignment of walkerCities) {
            for (const walker of walkers) {
            if (assignment.walkerId === walker.id) {
                assignments.push(assignment)
                }
            }
        }
    return assignments
    }
     //TODO LATER: assign variable name so it can be invoked
      //TODO LATER: import function wherever it should go
      
    



// NEXT Define a function that builds a string of city names. Needs a paramter for assignments array.
const assignedCityNames = (filteredCities) => {
    let cityString = ""

    for (const filteredCity of filteredCities){
      for (const city of cities) {
        if(city.id === filteredCity.cityId) {
        //Add the name of the matching city to the array of city names
        cityString = `${cityString} and ${city.name}`
        }
      }
    }
    return cityString
}


// for (const walker of walkers) {
//     if (walker.id === parseInt()) {
//         const assignments = filterWalkerCitiesByWalker(walker)
//         const cities = assignedCityNames(assignments)

//         window.alert(`${walker.name} services ${cities}`)
//     }
// }



export const Walkers = () => {
    let walkerHTML = "<ul>"
    
    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }
    
    walkerHTML += "</ul>"
    return walkerHTML
}
Walkers()