let music= new Audio('img/music.mp3');
let turnSound= new Audio('img/ting.mp3');
let gameOver= new Audio('img/gameover.mp3');
let turn = "X";
let gameover= false;
//Function To Change The Turn
const changeTurn = ()=>{
    return turn=== "X"?"0":"X";
};


//Function To Check The Winner.

const checkWin= ()=>{
    let boxtext=  document.getElementsByClassName('boxText');
    let wins= [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && ((boxtext[e[2]].innerText === boxtext[e[1]].innerText)) &&(boxtext[e[0]].innerText!== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText+" Won";
            gameover= true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= '200px';
        }
    });
};


//Main Logic.

let box= document.getElementsByClassName('box');
Array.from(box).forEach(element =>{
    let boxtext= element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText= turn;
           turn=  changeTurn();
            turnSound.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName('info')[0].innerText= `Turn For ${turn}`;
            }
        }
    } );
});

//Reset Button.

let reset= document.getElementById('reset');
reset.addEventListener('click', ()=>{
    let boxtexts= document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element =>{
        element.innerText= '';
    });
    turn= 'X';
    gameover= false;
    document.getElementsByClassName('info')[0].innerText= `Turn For ${turn}`;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width= '0px';
});