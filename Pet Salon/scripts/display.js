console.log("Hello from dispay pets")

function displayRow(){
    let cardSection=document.getElementById("pets");
    let result="";

    for(let i=0; i<pets.length; i++){
        let pet = pets[i];

        result += `
        <tr id="${i}">
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.type}</td>
            <td><button class="btn btn-success btn-sm"onclick="deletePet(${i})">Delete</button></td>
        </tr>       
        `
        /* 
    result += `
      <div id="${i}" class="card col-3 mx-2 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${pet.name} - <span class="text-secondary"> ${pet.service}</span> </h5>
          <h6 class="card-subittle mb-2 text-body-secondary">${pet.breed}</h6>
          <p class="card-text">${pet.gender}, ${pet.age}</p>
          <button class="btn btn-danger btn-sm">Delete</button>
        </div>
      </div>
    `*/
    }

    cardSection.innerHTML = result;
    displayInfo();
}

function displayInfo(){
    let total= document.getElementById("total");
    let groomingSpan=document.getElementById("gTotal");
    let groomingCounter=0;
    

    total.innerHTML=pets.length;
    console.log("total: ", pets.length);

    for(let i=0; i<pets.length; i++){
        console.log("--pet: ", pets[i]);

        if(pets[i].service == "Grooming"){
            groomingCounter++;
        }
    groomingSpan.innerHTML=groomingCounter;

    }
}

function displayTypes(){
    let dogSpan = document.getElementById("dogTotal");
    let dogCounter = 0; 
    
  
    for(let i=0; i<pets.length; i++){ // traveling the array
      console.log("-- pet: ", pets[i]);
  
  
      if(pets[i].type == "Dog"){
        dogCounter++;//increases the value +1
      }
  
      dogSpan.innerHTML = dogCounter;// prints into the HTML
    }
     
    let catSpan = document.getElementById("catTotal");
    let catCounter = 0;

    for(let i=0; i<pets.length; i++){ // traveling the array
      console.log("-- pet: ", pets[i]);
  
  
      if(pets[i].type == "Cat"){
        catCounter++;
      }
  
      catSpan.innerHTML = catCounter;


  }
  let birdSpan = document.getElementById("birdTotal");
  let birdCounter = 0;

  for(let i=0; i<pets.length; i++){ 
    console.log("-- pet: ", pets[i]);


    if(pets[i].type == "Bird"){
      birdCounter++;
    }

    birdSpan.innerHTML = birdCounter;
}
}
