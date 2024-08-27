let inputData = document.querySelector(".inputData");
let showData = document.querySelector(".yourData");
let addbtn = document.querySelector(".addbtn");
let collect=document.querySelector(".showData");

const data = [];

addbtn.addEventListener("click", () => {
  if (inputData.value.trim() !== "") {
    data.push(inputData.value.trim());
    inputData.value = "";
    Addvalue(data);
  }
});
const Addvalue = (data) => {
    if(data){
          showData.innerHTML = "";
  data.forEach((item, index) => {
    let listItem = document.createElement("div");
    listItem.setAttribute("class", "yourData");
    listItem.textContent = item;
    //Add delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("class", "dltbtn");
    deleteButton.setAttribute("data-index", index);
    // Delete Button Functionality
    deleteButton.addEventListener("click", () => {
      data.splice(index,1);
      Addvalue(data);
    });
    listItem.appendChild(deleteButton);
    showData.appendChild(listItem);
  });
    }
    else{
        collect.setAttribute("class" ,"hide");
    }

};
Addvalue(data);
