"use strict";


const buttonChange = document.querySelector(`.change`);
const buttonConvert = document.querySelector(`.convert`);
const inputMeter = document.querySelector(`.m`);
const inputCentimeter = document.querySelector(`.cm`);
const inputFeet = document.querySelector(`.ft`);
const inputInch = document.querySelector(`.in`);
const inputMeterTwo = document.querySelector(`.m-2`);
const inputCentimeterTwo = document.querySelector(`.cm-2`);
const inputFeetTwo = document.querySelector(`.ft-2`);
const inputInchTwo = document.querySelector(`.in-2`);
const overlayOne = document.querySelector(`.overlay-1`);
const overlayTwo = document.querySelector(`.overlay-2`);


let isChange = true;

overlayOne.classList.remove(`hidden-1`);

buttonChange.addEventListener(`click`, () =>{
    if(isChange === true){
        overlayTwo.classList.remove(`hidden-2`);
        overlayOne.classList.add(`hidden-1`);

        inputMeter.value = ``;
        inputCentimeter.value = ``;
        inputFeet.value = ``;
        inputInch.value = ``;
    }
    
    else if(isChange === false){
        overlayTwo.classList.add(`hidden-2`);
        overlayOne.classList.remove(`hidden-1`);

        inputFeetTwo.value = ``;
        inputInchTwo.value = ``;
        inputMeterTwo.value = ``;
        inputCentimeterTwo.value = ``;
    }

    isChange = !isChange;
});

buttonConvert.addEventListener(`click`, () =>{
    if(isChange === true){

        if(inputMeter.value.length !== 0 && inputMeter.value > 0){
            inputFeet.value = inputMeter.value * 3.3;
        }


        if(inputCentimeter.value.length !== 0 && inputCentimeter.value > 0){
            inputInch.value = inputCentimeter.value / 2.5;
        }

    }

    else if(isChange === false){

        if(inputFeetTwo.value.length !== 0 && inputFeetTwo.value > 0){
            inputMeterTwo.value = inputFeetTwo.value / 3.3;
        }

        
        if(inputInchTwo.value.length !== 0 && inputInchTwo.value > 0){
            inputCentimeterTwo.value = inputInchTwo.value * 2.5;
        }

    }
});