let calculatebtn = document.querySelector("button");

calculatebtn.addEventListener("click", () => {
    // Get the latest values when the button is clicked
    let amount = parseFloat(document.querySelector(".inputbillamount").value)||0;
    let tipPercentage = parseFloat(document.querySelector(".inputtip").value)||0;
    let output = document.querySelector(".calculate h3");
    
    
    // Calculate the tip amount
    let tip = (tipPercentage * amount) / 100;

    // Calculate the total amount including the tip
    let totalAmount = amount + tip;

    // Update the output element with the calculated total amount
    output.innerText = `Tip: Rs${tip.toFixed(2)}, Total: Rs${totalAmount.toFixed(2)}`;

   

});