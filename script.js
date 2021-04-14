window.onload = function () {
    initColorPicker();
    initColorPicker2();
    initColorPicker3();

};

function initColorPicker() {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    let colorPickers = document.getElementsByClassName("picker");
    setColorPickerEventListeners(colorBox, rgb, colorPickers);
}

function setColorPickerEventListeners(colorBox, rgb, pickerElements) {
    let pickerLen = pickerElements.length;
    for (let i = 0; i < pickerLen; i++) {
        pickerElements[i].addEventListener('change', () => {
            let red = rgb.red.value;
            let green = rgb.green.value;
            let blue = rgb.blue.value;
            setBoxBGColor(colorBox, red, green, blue);
            setDisplayValues(red, green, blue)
        });
    }
}

function setBoxBGColor(colorBox, red, green, blue) {
    let rgbVal = [red, green, blue].join(',');
    colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
}

function setDisplayValues(red, green,blue) {
    let redVal = document.getElementById("redVal");
    let greenVal = document.getElementById("greenVal");
    let blueVal = document.getElementById("blueVal");

    redVal.innerText = red;
    greenVal.innerText = green;
    blueVal.innerText = blue;

}
function initColorPicker2() {
    let colorBox2 = document.getElementById("color-box2");
    let rgb = {
        red2: document.getElementById("red2"),
        green2: document.getElementById("green2"),
        blue2: document.getElementById("blue2")
    };
    let colorPickers2 = document.getElementsByClassName("picker2");
    setColorPickerEventListeners2(colorBox2, rgb, colorPickers2);
}

function setColorPickerEventListeners2(colorBox2, rgb, pickerElements2) {
    let pickerLen2 = pickerElements2.length;
    for (let i = 0; i < pickerLen2; i++) {
        pickerElements2[i].addEventListener('change', () => {
            let red2 = rgb.red2.value;
            let green2 = rgb.green2.value;
            let blue2 = rgb.blue2.value;
            setBoxBGColor2(colorBox2, red2, green2, blue2);
            setDisplayValues2(red2, green2, blue2)
        });
    }
}

function setBoxBGColor2(colorBox2, red2, green2, blue2) {
    let rgbVal2 = [red2, green2, blue2].join(',');
    colorBox2.style.backgroundColor = "rgb(" + rgbVal2 + ")";
}

function setDisplayValues2(red2, green2,blue2) {
    let redVal2 = document.getElementById("redVal2");
    let greenVal2 = document.getElementById("greenVal2");
    let blueVal2 = document.getElementById("blueVal2");

    redVal2.innerText = red2;
    greenVal2.innerText = green2;
    blueVal2.innerText = blue2;

}
function initColorPicker3() {
    let colorBox3 = document.getElementById("color-box3");
    let rgb = {
        red3: document.getElementById("red3"),
        green3: document.getElementById("green3"),
        blue3: document.getElementById("blue3")
    };
    let colorPickers3 = document.getElementsByClassName("picker3");
    setColorPickerEventListeners3(colorBox3, rgb, colorPickers3);
}

function setColorPickerEventListeners3(colorBox3, rgb, pickerElements3) {
    let pickerLen3 = pickerElements3.length;
    for (let i = 0; i < pickerLen3; i++) {
        pickerElements3[i].addEventListener('change', () => {
            let red3 = rgb.red3.value;
            let green3 = rgb.green3.value;
            let blue3 = rgb.blue3.value;
            setBoxBGColor3(colorBox3, red3, green3, blue3);
            setDisplayValues3(red3, green3, blue3)
        });
    }
}

function setBoxBGColor3(colorBox3, red3, green3, blue3) {
    let rgbVal3 = [red3, green3, blue3].join(',');
    colorBox3.style.backgroundColor = "rgb(" + rgbVal3 + ")";
}

function setDisplayValues3(red3, green3,blue3) {
    let redVal3 = document.getElementById("redVal3");
    let greenVal3 = document.getElementById("greenVal3");
    let blueVal3 = document.getElementById("blueVal3");

    redVal3.innerText = red3;
    greenVal3.innerText = green3;
    blueVal3.innerText = blue3;

}