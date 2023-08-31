// Array value
const itemsList = [
    "Apple",
    "Orange",
    "Pineapple"
];

function validation() {
    if (userDataValidation()) {
        let findValue = itemsList.find((a) => a === getUserValue());

        if (findValue != undefined) {
            document.getElementById("alertDialog").innerText = "It is (" + findValue + ")";
        } else {
            document.getElementById("alertDialog").innerText = "It is not in the inventory.!";
        }
    }
}

function initialLoad() {
    let controls = "";
    // Advanced option
    /* itemsList.forEach(element => {
        controls += ("<li>" + element + "</li>");
    }); */

    // Basic option
    for (let i = 0; i < itemsList.length; i++) {
        controls += ("<li class=\"list-group-item\">" + itemsList[i] + "</li>");
    }

    document.getElementById("itemList").innerHTML = controls;
}

// Empty string validation
function userDataValidation() {
    const outputData = "No data";
    let resultValidation = false;

    if (getUserValue() != "") {
        resultValidation = true;
        setUserValue("");
    } else {
        setUserValue(outputData);
    }

    return resultValidation;
}

function getUserValue() {
    return document.getElementById("inputValue").value;
}

function setUserValue(newValue) {
    document.getElementById("outputValue").innerText = newValue;
}

// main function
initialLoad();