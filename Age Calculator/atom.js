const calculateAgebtn=document.querySelector(".thirdContainer button");
calculateAgebtn.addEventListener("click",calculateAge);
function calculateAge(){
    const getAgeInput=document.querySelector(".enterDob").value;
    const showAge=document.querySelector(".thirdContainer p");
    if(getAgeInput === ""){
        alert("Please Enter Your Age");
    }
    else{
        const CurrDob=CalculateCurrentAge(getAgeInput);
        showAge.innerHTML=`Your age is ${CurrDob} Years Old`;
    }
}
function CalculateCurrentAge(getAgeInput){
    const birthDate=new Date(getAgeInput);
    const currDate=new Date();
    let age=currDate.getFullYear()-birthDate.getFullYear();
    let month=currDate.getMonth()-birthDate.getMonth();
    if(month < 0 || (month === 0 && currDate.getDate() < birthDate.getDate())){
        age--;
    }
    return age;
}