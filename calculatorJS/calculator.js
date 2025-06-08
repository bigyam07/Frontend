const display = document.getElementById("display");
const appendToDisplay = (data) => {
    display.value = display.value + data;
};

const clearDisplay = () => {
    display.value = "";
};
const percentButton = document.getElementById("pbtn");
const calculate = () => {
   try {
    display.value = eval(display.value)
    if(display.value == "NaN") {
        percentButton.disabled = true;
    }
   } catch {
    display.value = "Syntax error";
   }
};

const clearLastString = () => {
    display.value = display.value.slice(0, -1);
};


const displayPercentage = () => {
        display.value = display.value/100;
};