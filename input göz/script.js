let inp1 = document.getElementById("inp1");
function show(){
    let btn = document.getElementById("btn");


    
    if( inp1.type == 'password'){
        inp1.type = 'text'
        eyes.className = "fa-solid fa-eye-low-vision"
        btn.className = "btn btn-sm btn-danger"
    

    }else{
        inp1.type = 'password'
         eyes.className= "fa-solid fa-eye"
         btn.className = "btn btn-sm btn-success"


    }

}
let spn = document.getElementById('spn');
function sayi(){
    if(inp1.value.length >=8){
       spn.className = "badge bg-success"
        spn.innerHTML = 'Güclüdür'
    }else{
        spn.innerHTML= 'Zəifdir'
        spn.className = "badge bg-danger"
    }
}


inp1.onblur = function(){
    spn.style.display = 'none' 
}

inp1.onfocus = function(){
if(inp1.value.length > 1 ) {
    spn.style.display = 'inline' 

}
}