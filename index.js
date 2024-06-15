

let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver =false;

window.onload = function(){
    setGame();
}

function setGame() {
    for(let i=0;i<9;i++){
        let tile = document.createElement('div');
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole,1000);
    setInterval(setPlant,2000);
}

function getRendomtile1(){
    let num1 = Math.floor(Math.random()*9);
    return num1.toString();
}
function getRendomtile2(){
    let num2 = Math.floor(Math.random()*9);
    return num2.toString();
}

function setMole(){
    if(gameOver){
        return;
    }
    if(currMoleTile){
        currMoleTile.innerHTML ="";
    }
    let mole = document.createElement('img');
    mole.src ="./monty-mole.png";

    let num = getRendomtile1();
    if(currPlantTile && currPlantTile.id == num){
        return;
    }
    
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole)
}

function setPlant(){
    if(gameOver){
        return;
    }
    if(currPlantTile){
        currPlantTile.innerHTML ="";
    }
    let plant = document.createElement('img');
    plant.src = './piranha-plant.png'
    let num1 = getRendomtile2();
    if(currMoleTile && currMoleTile.id == num1 ){
        return;
    }
    currPlantTile = document.getElementById(num1);
    currPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameOver){
        return;
    }
    if(this == currMoleTile){
        score += 10;
        document.getElementById('score').innerText = score.toString();
    }else if( this == currPlantTile){
        document.getElementById('score').innerText = "Game over " + score.toString();
        gameOver=true;
    }
}