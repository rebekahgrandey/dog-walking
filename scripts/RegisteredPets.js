import { getPets } from "./database.js"

const pets = getPets()

document.addEventListener(
    "click",  
    (clickEvent) => {
        const itemClicked = clickEvent.target
    
        if (itemClicked.id.startsWith("pet")) {
        
            const [,petPrimaryKey] = itemClicked.id.split("--")
            
            /*
            Now that you have the primary key,
            find the whole object by iterating the walkers array.
            */
           const matchingPet = null
           for (const pet of pets) {
               if (pet.id === parseInt(petPrimaryKey)) {
                   window.alert(`${pet.name} barks at you`)
                   matchingPet = pet
                }
            }
        }
    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

// walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`


// const [petId] = itemClicked.id.split(" ")
    
// // Use array deconstruction to assign the primary key to a variable named petPrimaryKey

// const petPrimaryKey = 