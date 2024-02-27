let j = 0;


let userNumber = document.getElementById("userNumber");
let earnedText = document.getElementById("earned")
let correctNumbers = document.getElementById("correct")
let counterText = document.getElementById("correctNumByUser");


let btnSubmit = document.getElementById("btn");
let btnRandom = document.getElementById("btnRandom");
let btnReset = document.getElementById("btnReset");

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("radioForm");

    for (var i = 1; i <= 90; i++) {
        var label = document.createElement("label");
        var input = document.createElement("input");

        input.type = "checkbox";
        input.name = "group1";
        input.value = i;
        input.id = "checkbox" + j

        label.appendChild(input);
        label.appendChild(document.createTextNode(i));

        form.appendChild(label);
        j++;
    }

});


function check(){
    let checkedCheckBoxes = document.querySelectorAll('input[name="group1"]:checked');
    if (checkedCheckBoxes.length > 6){
        checkedCheckBoxes.forEach(function(checkedCheckBox){
            checkedCheckBox.checked = false;
        })
    }
    return checkedCheckBoxes;
}


btnSubmit.addEventListener('click', function () {

    let counter = 0;

    let checkedCheckBoxes = document.querySelectorAll('input[name="group1"]:checked');
    let checkedNumbers = getCheckedCheckboxes();

    do {
        firstRandom = parseInt(Math.random() * 90 + 1);
        secondRandom = parseInt(Math.random() * 90 + 1);
        thirdRandom = parseInt(Math.random() * 90 + 1);
        fourthRandom = parseInt(Math.random() * 90 + 1);
        fifthRandom = parseInt(Math.random() * 90 + 1);
        sixthRandom = parseInt(Math.random() * 90 + 1);
    } while (
        firstRandom === secondRandom ||
        firstRandom === thirdRandom ||
        firstRandom === fourthRandom ||
        firstRandom === fifthRandom ||
        firstRandom === sixthRandom ||
        secondRandom === thirdRandom ||
        secondRandom === fourthRandom ||
        secondRandom === fifthRandom ||
        secondRandom === sixthRandom ||
        thirdRandom === fourthRandom ||
        thirdRandom === fifthRandom ||
        thirdRandom === sixthRandom ||
        fourthRandom === fifthRandom ||
        fourthRandom === sixthRandom ||
        fifthRandom === sixthRandom
    );




    if (checkedCheckBoxes.length === 6){
        let stringArray = checkedNumbers;
        let numberArray = [];

        for (let i = 0; i < stringArray.length; i++) {
            numberArray.push(parseInt(stringArray[i]));
        }
        if (numberArray[0]==firstRandom|| numberArray[0]==secondRandom || numberArray[0]==thirdRandom|| numberArray[0]==fourthRandom||numberArray[0]==fifthRandom||numberArray[0]==sixthRandom){
            counter += 1;
        }
        if (numberArray[1]==firstRandom|| numberArray[1]==secondRandom||numberArray[1]==thirdRandom|| numberArray[1]==fourthRandom|| numberArray[1]==fifthRandom|| numberArray[1]==sixthRandom){
            counter += 1;
        }
        if (numberArray[2]==firstRandom|| numberArray[2]==secondRandom||numberArray[2]==thirdRandom|| numberArray[2]==fourthRandom|| numberArray[2]==fifthRandom|| numberArray[2]==sixthRandom){
            counter += 1;
        }
        if (numberArray[3]==firstRandom|| numberArray[3]==secondRandom||numberArray[3]==thirdRandom|| numberArray[4]==fourthRandom|| numberArray[5]==fifthRandom|| numberArray[5]==sixthRandom){
            counter += 1;
        }
        if (numberArray[4]==firstRandom|| numberArray[4]==secondRandom||numberArray[4]==thirdRandom|| numberArray[4]==fourthRandom|| numberArray[4]==fifthRandom|| numberArray[4]==sixthRandom){
            counter += 1;
        }
        if (numberArray[5]==firstRandom|| numberArray[5]==secondRandom||numberArray[5]==thirdRandom|| numberArray[5]==fourthRandom|| numberArray[5]==fifthRandom|| numberArray[5]==sixthRandom){
            counter += 1;
        }
        
        userNumber.innerHTML = "Senin sayıların: " + numberArray.toString();

        reset();
        correctNumbers.innerHTML = "Doğru sayılar: " + firstRandom + "," + secondRandom + "," + thirdRandom + ","  + fourthRandom + "," + fifthRandom + "," + sixthRandom;

        if (counter <= 1){
            earnedText.innerHTML = "Hiç para kazanamadınız";
        }
        if (counter === 2){
            earnedText.innerHTML = "36,55 ₺ kazandınız";
        }
        if (counter === 3){
            earnedText.innerHTML = "387,60 ₺ kazandınız";
        }
        if (counter === 4){
            earnedText.innerHTML = "5.913,65 ₺ kazandınız"
        }
        if (counter === 5){
            earnedText.innerHTML = "298.641,50 ₺ kazandınız";
        }
        if (counter === 6){
            earnedText.innerHTML = "178.565.610,99 ₺ kazandınız"
        }
        counterText.innerHTML = "Tutturulan: " + counter;
    }
    

    
    else {
        alert("6 sayı seçiniz")
    }
})

btnReset.addEventListener('click', reset)

btnRandom.addEventListener('click', random)

function getCheckedCheckboxes() {
    
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedValues = [];
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedValues.push(checkbox.value);
        }
    });
    console.log(checkedValues);
    return checkedValues;
}

function random() {
    let firstRandomR = parseInt(Math.random() * 20 + 1);
    let secondRandomR = parseInt(Math.random() * (40 - 20) + 20);
    let thirdRandomR = parseInt(Math.random() * (60 - 40) + 40);
    let fourthRandomR = parseInt(Math.random() * (80 - 60) + 60);
    let fifthRandomR = parseInt(Math.random() * (85 - 80) + 80);
    let sixthRandomR = parseInt(Math.random() * (90 - 85) + 86);

    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        let checkboxValue = parseInt(checkbox.value);

        if (
            checkboxValue === firstRandomR ||
            checkboxValue === secondRandomR ||
            checkboxValue === thirdRandomR ||
            checkboxValue === fourthRandomR ||
            checkboxValue === fifthRandomR ||
            checkboxValue === sixthRandomR
        ) {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });
}

function reset() {
    let checkedCheckBoxes = document.querySelectorAll('input[name="group1"]:checked');
    checkedCheckBoxes.forEach(function(checkedCheckBox) {
        checkedCheckBox.checked = false;
    })
}



setInterval(check,100)