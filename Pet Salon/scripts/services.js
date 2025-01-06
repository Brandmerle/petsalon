//using jQuery
//constuctor
function Service(description, price){

}
//register
function register(){
    console.log("A new service was added");
}

function init(){
    $("#registerBtn").on('click', register);

}

window.onload=init;