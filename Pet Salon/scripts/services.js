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

function validService(service){
    let isValidDes=true;
    let isValidPrice=true;

    if(service.description==""){
        //if i get here the description is empty
        isValidDes=false;
        $("#txtDescription").css("border","4px solid red");
        $("#desRequirementText").show();
    }else{
        $("#txtDescription").css("border","1px solid black");
        $("#desRequirementText").hide();

    }
    if(service.price==""){
        //if i get here the description is empty
        isValidPrice=false;
        $("#txtPrice").css("border","4px solid red");
        $("#priceRequirementText").show();
    }else{
        $("#txtPrice").css("border","1px solid black");
        $("#priceRequirementText").hide();

    }
    

    return isValidDes && isValidPrice; //&& = And

}
//register
function register(){
    let inputDescription = $("#txtDescription").val();
    $("#results").append(`<li>${inputDescription}</li`);
    let inputPrice = $("#txtPrice").val();
    $("#results").append(`<li>${inputPrice}</li`);
    console.log("A new service was added");
    $("input").val("");
    let newService = new Service(inputDescription,inputPrice);
    if(validService(newService)){
        save(newService);
    }
    console.log(newService);
    //save(newService); //this function is on the storeManager js
    
    //clear the form
    $("#textDescription").val("");
    $("#textPrice").val("");

}
function init(){
    $("#registerBtn").on('click', register);
    $("#desRequirementText").hide();
    $("#priceRequirementText").hide();
    
}


window.onload=init;