const btn=document.querySelector(".btn");   
const diceImg=document.querySelector(".firstContainer");
const rollData=document.querySelector("#roll-history");
const rollHistory=[];
btn.addEventListener("click",()=>{
    diceImg.classList.add("rollanimation");
    setTimeout(()=>{
        diceImg.classList.remove("rollanimation");
        displayDice();     
    },1000);
});
function displayDice(){
    const diceNo=Math.floor(Math.random() * 6 ) + 1;
    const diceFace=showNo(diceNo);
    diceImg.innerHTML=diceFace;
    rollHistory.push(diceNo);
    updateRollHistory();
}
function updateRollHistory(){
      rollData.innerHTML="";
      let i=1;
    for(let it of rollHistory){
        const listItem=document.createElement("li");
        listItem.innerHTML=`Roll No ${i} : <span>${showNo(it)} `;
        i++;
        rollData.appendChild(listItem);
    }
}
function showNo(diceNo){
    switch(diceNo){
        case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
    }
}