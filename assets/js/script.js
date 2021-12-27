console.log('hello')

//Listen for clicks on Generate Quote button 
document.getElementById("generateQuote").addEventListener("click", generateQuote);

//Get form values, calculate quote price and produce form output
function generateQuote() {
    let typeItem = document.getElementById("typeItem").value;
    let collectingFrom = document.getElementById("collectingFrom").value;
    let bristolDelivery = document.getElementById("bristolDelivery").value;

    //Get item price
    let itemPrice = calculatePrice(typeItem);

    //Get delivery price (surcharge for longer distances) 
    let surCharge = calculateSurcharge(itemPrice, collectingFrom);

    //Create output 
    var theOutput = "<p>Thank you for your quote request</p>";
    var itemCharge = "<p>Your item collection charge is £" + (itemPrice);

    //Output surcharge for collections from Bath
    if (surCharge === 0) {
        theOutput += "<p>No distance surcharge</p>";
        } else {
            theOutput += "<p>Your distance surcharge is £" + surCharge;
        }

        theOutput += itemCharge + "<p>Your quote total is: £" + (itemPrice + surCharge);

    //Change output if 'other' is selected as type of item 
    if (typeItem === "other") {
        var theOutput = "";
        theOutput += "<p>Call us for a bespoke quote";
    }

        //Display the output 
        document.getElementById("displayPrice").innerHTML = theOutput;
    }     
    

//Calculates Item Price
function calculatePrice (typeItem) {
    let itemPrice = 20;
    let extraCharge = 0;
        if (typeItem === "wardrobe") {
                extraCharge = 20;
            } else if (typeItem === "chestofDrawers") {
                extraCharge = 10;  
            } else if (typeItem === "largeBed") {
                extraCharge = 20;   
            } else if (typeItem === "singleBed") {
                extraCharge = 10;   
            } else if (typeItem === "sofa") {
                extraCharge = 10;    
            } else if (typeItem === "sofaLarge") {
                extraCharge = 20; 
            } else if (typeItem === "armChair") {
                extraCharge = 5;  
            } else if (typeItem === "cupboard") {
                extraCharge = 5; 
            } else if (typeItem === "diningTable") {
                extraCharge = 10; 
            } else {
            
        }   
    
        itemPrice += extraCharge;
    
        return itemPrice;
    }


//Calculates surcharge
function calculateSurcharge (itemPrice, collectingFrom) {
    let surCharge = 0;
        if (collectingFrom === "bristol") {
            surCharge = 0;
            } else if (collectingFrom === "bath") {
            surCharge = 7;
            } else {
        }
    
        return surCharge;
}

  // Display and change color of quote result div when quote is generated
  document.getElementById("generateQuote").addEventListener("click", changeBackground);
  let priceColor = document.getElementById("displayPrice");

  function changeBackground() {
      priceColor.style.backgroundColor = "rgb(42, 187, 42)";
      priceColor.style.border = "1px solid transparent;";
      priceColor.style.borderRadius = "4px";
      priceColor.style.boxShadow = "0px 1px 4px 2px rgb(42, 187, 42)";
      priceColor.style.display = "block";
  }

  //Animate van in footer when quote is generated

  var vanSpeed = 50;
  var vanPosition = 0;
  var animation;

  var van = document.getElementById("littleVan");
  document.getElementById("generateQuote").addEventListener("click", vanMove);

  function vanMove() {
      clearInterval(animation);
      animation = setInterval(frame, vanSpeed);


  function frame() {
  vanPosition += 2;
  van.style.left = vanPosition + 'px';
  }

  //Reset van when options are changed 

  function vanBack() {
    let select = document.getElementsByTagName("select");
    select.addEventListener("click" , vanBack);
    if (vanPosition < 260) 
        clearInterval(animation);
        console.log("Whew! That was close!");
    } 
}
