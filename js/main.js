
const optionButton = document.querySelector('button');
optionButton.addEventListener("click", function(){
    console.log("Are you sure?");
    confirm("Are you sure you want Cake with following feature?");
});
///I tried implementing the thank you messge below for the form submission but couldn't get what went wrong. Tried several times but failed. Hope you will give me some insight in this one.

const submitButton = document.querySelector("submitButton");
const popup = document.querySelector("popup");
const OkButton = document.querySelector("OkButton");

submitButton.addEventListener("click", function(){
    popup.classList.add("show");

});
OkButton.addEventListener("click", function(){
    popup.classList.remove("show");

});




