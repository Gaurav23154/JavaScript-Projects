let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".btn");
let newGamebtn=document.querySelector(".newgamebtn");
let msgContainer=document.querySelector(".winner-container");
let msg=document.querySelector("#para");
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
  [3, 4, 5],
];
const resetGame=()=>{
    trueO=true;
    enableboxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratuations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
  for (pattern of winPatterns) {

    let pos1=  boxes[pattern[0]].innerText;
    let pos2=  boxes[pattern[1]].innerText;
    let pos3=  boxes[pattern[2]].innerText;
    if(pos1 != "" && pos2 != "" && pos3!=""){
        if(pos1 === pos2 && pos2 === pos3){
            showWinner(pos1)
        }
    }
  }
};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

