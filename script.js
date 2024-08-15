let movesCounter=15;
const randomNumber=(Math.floor(Math.random()*100))+1;
function start(){
    document.getElementById('start').style.display='none';

    document.getElementById('card').style.display='block';
}
document.getElementById("move").innerHTML=`${movesCounter}`;

function cheak(){

    let gusedNumber=Number(document.getElementById('number').value);
    if(gusedNumber==""){
        alert("chose a number between 1 t0 100")
    }
    else{
    if(randomNumber === gusedNumber){
        document.getElementById("ans").innerHTML="Congratulations! You won!";

      document.getElementById('restart').style.display='block'; 
    }
    else if(randomNumber !== gusedNumber){
     if(randomNumber>gusedNumber){
        document.getElementById('up').classList.add('t');
        document.getElementById('down').classList.remove('t');

        }
        else {
            document.getElementById('down').classList.add('t');
            document.getElementById('up').classList.remove('t');
         
        }
        movesCounter-=1;   
    }
    if(movesCounter===0){
         alert("Restart the game")
        document.getElementById("ans").innerHTML="You Lose!";
        document.getElementById("number").disabled=true;
        document.getElementById('restart').style.display='block'; 
    }
    
    document.getElementById("move").innerHTML=`${movesCounter}`;
    document.getElementById('number').value = '';
}
}
function reloadPage() {
    location.reload();
}
