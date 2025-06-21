//event listener
const NameInput=document.getElementById("name-input");
let name='';
//console.log(NameInput);
//Event listener is the same as setintervall callback fuction
NameInput.addEventListener("input",nameInputHasChanged);
function submitButtonOnclick(){
    let nameValue=document.getElementById("name-input").value;
    name=nameValue;
    window.location.href="game.html";
}


function nameInputHasChanged(){
    let nameValue=NameInput.value;
    console.log(nameValue);
    let pSubmit=document.querySelector("#submit-button");

    if(nameValue.length >=4){
        //when the value name>4

        pSubmit.innerHTML=`<button onclick= 'submitButtonOnclick()'>submit</button>`;
        return;
    }
    pSubmit.innerHTML=``
}