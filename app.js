var inputs = document.querySelectorAll("input");
var spans = document.querySelectorAll("span");
var check = 0;

function inputTest(event){
  for(i = 0; i < inputs.length; i++){
      inputs[i].classList.remove("error");
      spans[i].innerHTML = "";
      check = 0;
      }
  for(i = 0; i < inputs.length; i++){
    if (inputs[i].value == ""){
      inputs[i].classList.add("error");
      spans[i].innerHTML = inputs[i].name + " cannot be empty";
      check++;
      }
  }
  if(inputs[2].value.includes("@") === false){
    spans[2].innerHTML ="This is not a valid e-mail";
    check++;
  }
  if(check > 0){
      event.preventDefault();
  }
}
document.getElementById("green").addEventListener("click", inputTest);
