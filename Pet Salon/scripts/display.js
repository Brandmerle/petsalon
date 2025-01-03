console.log("Hello from dispay pets")

function displayPet(){
    let cardsSection=document.getElementById("pets");
    let result="";

    for(let i=0; i<pets.length; i++){
        let pet = pets[i];

        result += `
            <div id="${i}" class="card col-3 mx-2">
                <div class="card-body">
                    <h5 class="card-title">${pet.name} - <span class="text-secondary">${pet.service}</span> </h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${pet.breed}</h6>
                    <p class="card-text">${pet.gender}, ${pet.age}</p>
                    <button class="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>    
        `
    }

    cardsSection.innerHTML = result;
}