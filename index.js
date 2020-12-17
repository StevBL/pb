

// global variables
const container = document.querySelector(".container");
const containerProg = document.querySelector('.containerPB');
const btnEnter = document.querySelector('.btnEnter');


//style - bg Color
const body = document.querySelector(".bg");
body.style.backgroundColor = "#272c34";
body.style.overflow = "hidden";
body.style.fontFamily = "Verdana";

function progBarGenerator() {
    containerProg.innerHTML = `<div class="pb"><div id="progress"></div></div>`;
  }

function calc(quantity, goal){
    return (quantity * 100) / goal;
}

function movePB(quantity, goal) {
    let adv = Math.ceil(goal/10);
    let porc = calc(quantity, goal);
    console.log(porc);

    for(let i = 1; i <= adv; i++){
        let parts = (goal / adv) * i;
        if(parts <= porc){
          document.querySelector("#progress").style.width = `${porc}%`;
        }
    }
}

function moveOnClick(){
    let quantity = document.getElementById('quantity').value;
    let goal = document.getElementById('goal').value;

    if(!isNaN(quantity) && !isNaN(goal)){
    progBarGenerator();
    movePB(quantity, goal);
    }else{
        alert('Please enter only numeric and valid values.');
    }

}

