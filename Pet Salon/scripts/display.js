console.log("Hello from dispay pets")

function displayRow(){
    let tableSection=document.getElementById("pets");
    let result="";

    for(let i=0; i<pets.length; i++){
        let pet = pets[i];

        result += `
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Breed</th>
                    <th scope="col">Service</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>${pet.name}</td>
                    <td>${pet.age}</td>
                    <td>${pet.gender}</td>
                    <td>${pet.breed}</td>
                    <td>${pet.service}</td>
                    <td><button class="btn btn-danger btn-sm">Delete</button></td>
                   
                </tbody>
                </table>
            </div>    
        `
    }

    tableSection.innerHTML = result;
}