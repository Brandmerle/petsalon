function save(item){
    console.log(item);

    let data= read();
    data.push(item);

    let val = JSON.stringify(data);
    console.log(val);

    localStorage.setItem("services",val);
}

function read(){
    let data=localStorage.getItem("services");

    if(!data) {
        return[];

    }else{
        let list = JSON.parse(data);  //parse is oposite to stringify
        return list
    }
}