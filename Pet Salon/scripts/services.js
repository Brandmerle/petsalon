//using jQuery

document.getElementById("results");
$("#results");

let servicesForm = $("#servicesForm").css("border", "1px solid black",);

//constuctor
class Service {
    constructor(description, price) {
        this.description = description;
        this.price = price;
    }
}
//register
function register(){
    let description = $("#descriptionInput").val();
    $("#results").append(`<li>${description}</li`);
    let price = $("#priceInput").val();
    $("#results").append(`<li>${price}</li`);
    console.log("A new service was added");

}

function init(){
    $("#registerBtn").on('click', register);
    
}


window.onload=init;