let pets = [] // empty array
//object literal
let petSalon = {
    name: "The Fashion Pet",
    address:{
        street: "Palm Ave",
        zip: "22333",
    },
    phone: "666-555-7777",
} 

console.log(petSalon);

//creating the pets
let pet1={
    name: "Scooby",
    age: 60,
    gender: "Male",
    service: "Grooming",
    breed: "Mastiff",
}
let pet2={
    name: "Dooby",
    age: 6,
    gender: "Female",
    service: "Trim Nails",
    breed: "Dalmation",
}
let pet3={
    name: "Doo",
    age: 5,
    gender: "Male",
    service: "Bath",
    breed: "Husky",
}

pets.push(pet1,pet2,pet3);
console.log(pets);

function displayNames(){
    for(i=0;i<pets.length,i++){
        document.getElementById("petNames").innerHTML+=`<p> ${pets[i].name}</p>`;
}
    document.getElementById("petsInfo").innerHTML="We have " + pets.length + "pets";


}
displayNames()