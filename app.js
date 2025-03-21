//selecting the element
let body=document.querySelector("body");
let level=document.querySelector("h2");
let boxes=document.querySelectorAll(".box");
let playGround=document.querySelector(".inner");
let helpBtn=document.querySelector(".help");
//initialising variable
let started=false;
let memArr=[];
//memArr=['box1' ,"box2"..]
let userArr=[]
let levelNum=0;
let num=0;
let clicks=0;//count userclick
let score=0;//keydown is written as mention in h2


//  building the core logic
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(started){
// console.log("click");
box.classList.add("user");
setTimeout(()=>{
    box.classList.remove("user")
},600) 
clicks++;
const targetid=box.getAttribute("id");
userArr.push(targetid);
checker();
 }    
    })
})

//function to check userinput
function checker(){
       if(userArr[clicks-1]!=memArr[clicks-1]){
        level.innerText=`you have lost the game,your score is ${score}`
        started=false;
        userArr=[];
        memArr=[];
        clicks=0;
        num=0;
        body.classList.add('gameOver')
        setTimeout(()=>{
            body.classList.remove("gameOver")
        },600)
        levelNum=1;
    }
    else{
        num++;//increment num=1.....4
    }
    //increment score and level
    if(num==memArr.length && num !=0){//user click is correct then
        score+=10;
        userArr=[];
        clicks=0;
        num=0;
        setTimeout(selectBox,400)
    }
}
body.addEventListener('keydown',()=>{
    if(started==false){
        started=true;
        selectBox();
    }
});
   
    function selectBox(){
        level.innerText=`level ${levelNum}`;
        levelNum++;
        let randVal=Math.floor(Math.random()*4)//this gives 0to3 interger math.floor is used to convert into integer
        flashRand(randVal); 
memArr.push(boxes[randVal].id)
    }
function flashRand(randVal){
    boxes[randVal].classList.add('memFlash')
    setTimeout(()=>{
        boxes[randVal].classList.remove('memFlash');
    },[2000])
}
helpBtn.addEventListener('click',()=>{
 let initText=level.innerText;
   level.innerText=`Memory array is:${memArr}`
   setTimeout(()=>{
    level.innerText=initText
   },1000)
})
