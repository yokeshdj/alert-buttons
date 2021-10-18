var btns = document.getElementById("buttons");
btns.addEventListener("click",function(){
    if(event.target.textContent === "Show"){
        generateButtons();
    }
    else{
        alert(event.target.textContent);
    }
})
function generateButtons(){
    var div = document.createElement("div");
    for(var i=0; i<5; i++){
        let newBtn = document.createElement("button");
        newBtn.textContent = i+1;
        div.append(newBtn);
    }
    btns.append(div);
}