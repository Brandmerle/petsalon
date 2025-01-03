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

//constructor (add the breed and services)
function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}
//create the variables for the HTML elements
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function register(){

    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value)//create the new object
    //console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    pets.push(newPet); //push the newPet into the existing array from below
    console.log(pets); //display the array on the console

    displayRow();
    clearForm();
}

function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtService").value="";
}

function init(){
//create 3 pets
let pet1 = new Pet("scooby",60,"Male","Poodle","Grooming");
let pet2 = new Pet("Dooby",50,"Female","Dane","Vaccines");
let pet3 = new Pet("Doo",40,"Male","Pitbull","Nails");

pets.push(pet1,pet2,pet3);
console.log("pets:", pets);

displayRow();
}
window.onload=init;//wait to render the HTML
