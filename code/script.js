// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let name = prompt("Please enter your name:")
alert("Hi " + name +"!")

let errorMessage = "Invalid choice. Please select a number between 1 and 3."

// Step 2 - Food choice
let food;
let foodChoice = prompt(`What type of food would you like to order?
Enter a number:
1 - Pizza 
2 - Pasta 
3 - Salad`)

switch(foodChoice){
  case "1":
    food = "Pizza"
    break;
  case "2":
    food = "Pasta"
    break;
  case "3":
    food = "Salad"
    break;
  default:
    alert(errorMessage)
}
alert("You chose " + food)

// Step 3 - Subtype choice
let subtype;
let type;
switch(foodChoice){
  case "1":
    subtype = prompt(`Select a Pizza type:
    1 - Hawaii
    2 - Calzone
    3 - Kebab`)

    switch(subtype){
      case "1":
        type = "Hawaii"
        break;
      case "2":
        type = "Calzone"
        break;
      case "3":
        type = "Kebab"
        break;
      default: 
        alert(errorMessage)      
    }
    break;
  case "2":
    subtype = prompt(`Select a Pasta type:
    1 - Spaghetti Carbonara
    2 - Fettuccine Alfredo
    3 - Cheesy tortellini`)

    switch(subtype){
      case "1":
        type = "Spaghetti Carbonara"
        break;
      case "2":
        type = "Fettuccine Alredo"
        break;
      case "3":
        type = "Cheesy tortellini"
        break;
      default: 
        alert(errorMessage)      
    }
    break;
  case "3":
    subtype = prompt(`Select a Salad type:
    1 - Ceaser Salad
    2 - Olivier Salad
    3 - Greek Salad`)

    switch(subtype){
      case "1":
        type = "Ceaser Salad"
        break;
      case "2":
        type = "Olivier Salad"
        break;
      case "3":
        type = "Greek Salad"
        break;
      default: 
        alert(errorMessage)      
    }
    break;
    default:
      alert(errorMessage)
}

alert("You chose " + type)

// Step 4 - Age
let age = prompt("Is this food for a child or an adult? Type your age:")
Number(age)
let userConfirmation;

if(age<18){
  alert("One child size. It will be 10€")
  userConfirmation = prompt(`Are you sure you want to order this?
  Enter a number to confirm
  1 - Yes
  2 - No`)
}
else if(age>17){
  alert("One adult size. It will be 15€")
  userConfirmation = prompt(`Are you sure you want to order this`)
}
else {
  alert(errorMessage)
}
// Step 5 - Order confirmation
if(userConfirmation === "1"){
  alert("Thank you for your order. Your meal will be prepared. See you soon!")
}
else if(userConfirmation === "2"){
  alert("No problem, come back and order anytime you want")
}
else{
  alert("Invalid choice. Please select 1 for Yes or 2 for No.")
}