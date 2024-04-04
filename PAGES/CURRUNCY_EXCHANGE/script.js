const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");

fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {
        display(data);
    });

function display(data) {
    const entries = Object.entries(data);
    for (var i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
}

// Real-time conversion (on input change)
num.addEventListener('input', () => {
    convertFromInput();
});

// Conversion on button click
btn.addEventListener("click", () => {
    convertFromInput();
});

function convertFromInput() {
    let currency1 = select[0].value;
    let currency2 = select[1].value;
    let value = num.value;

    if (currency1 === currency2) {
        if (confirm("You've selected the same currency. Change one of them?")) {} else {
            ans.value = "";
        }
    } else if (value !== "") {
        convert(currency1, currency2, value);
    } else {
        ans.value = "";
    }
}

function setcountryflag1(code) {
    var flag = code.value.substr(0, code.value.length - 1).toLowerCase();
    document.getElementById('countryflag1').src = "https://flagcdn.com/16x12/" + flag + ".png";
}

function setcountryflag2(code) {
    var flag = code.value.substr(0, code.value.length - 1).toLowerCase();
    document.getElementById('countryflag2').src = "https://flagcdn.com/16x12/" + flag + ".png";
}

function convert(currency1, currency2, value) {
    const host = "api.frankfurter.app";
    fetch(
            `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
        )
        .then((val) => val.json())
        .then((val) => {
            ans.value = Object.values(val.rates)[0];
        });
}

// right click 
// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault()
// }, false)

//loader
// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(function () {
//         document.querySelector('.loader').style.display = 'none';
//         document.getElementById('app').style.display = 'block';
//     }, 5000);
// });
