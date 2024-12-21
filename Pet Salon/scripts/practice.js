var globalVariable = "I am in global scope";

function myFunction(){
    var localVariable = "I am a local scope";
    console.log(globalVariable);
    console.log(localVariable); //local variable only works withing the curly's
    if(true){
        let blockVariable = "I am a block varible";
        console.log(blockVariable);
    }
}

myFunction();