// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const boogerButton = document.getElementById('add-button');
// get the add-result span
const boogerSpan = document.getElementById('add-result');

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subSpan = document.getElementById('sub-result');

const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multSpan = document.getElementById('mult-result');

const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divSpan = document.getElementById('div-result');


// initialize state 

// set the event handler to the button
boogerButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    const sum = Number(value1) + Number(value2);

    // update the textContent of the span
    boogerSpan.textContent = sum;
});

subButton.addEventListener('click', () => {
    const subValue1 = subInput1.value;
    const subValue2 = subInput2.value;
    console.log(subValue1, subValue2);
    const sum = Number(subValue1) - (subValue2);
    subSpan.textContent = sum;
});

multButton.addEventListener('click', () => {
    const multValue1 = multInput1.value;
    const multValue2 = multInput2.value;
    console.log(multValue1, multValue2);
    const sum = Number(multValue1) * (multValue2);
    multSpan.textContent = sum;
});

divButton.addEventListener('click', () => {
    const divValue1 = divInput1.value;
    const divValue2 = divInput2.value;
    const sum = Number(divValue1) / (divValue2);
    divSpan.textContent = sum;
});