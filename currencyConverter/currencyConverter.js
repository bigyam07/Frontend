const baseUrl = "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api";
// INR_USD.json
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.getElementById("btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

window.addEventListener("load", () => {
    updateExchangeRate();
});

for(let select of dropdowns) {
    for(let currencyCode in countryList) {
        let newOption = document.createElement("option")
        newOption.innerText = currencyCode;
        newOption.value = currencyCode;
        if(select.name === "from" && currencyCode ==="USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currencyCode ==="INR") {
            newOption.selected = "selected";
        }
        select.append(newOption); 

    }
    select.addEventListener("change", (e) => {
        updateFlag(e.target);
    })
}

const updateFlag = (element) => {
    let currencyCode = element.value;
    console.log(currencyCode);
    let countryCode = countryList[currencyCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    
    if(element.name == 'from') {
        let img = document.getElementById("flagSrc1");
        img.src = newSrc;
    } else if (element.name =='to') {
        let img = document.getElementById("flagSrc2");
        img.src = newSrc;
    }
};

btn.addEventListener("click", async (e)=> {
    e.preventDefault();
    updateExchangeRate();
});

async function updateExchangeRate() {
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;
    if(amtValue == "" || amtValue < 1) {
        amtValue =  1;
        amount.value = 1;
    }
    // console.log(fromCurr.value, toCurr.value);
    const URL = `${baseUrl}/${toCurr.value}_${fromCurr.value}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.rate;
    let finalAmount = amtValue * rate;
    msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount}${toCurr.value}`;
}