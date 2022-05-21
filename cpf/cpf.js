console.log("Alô aqui é o JS")

function check() {
    // console.log("Início da checagem")
    
    let userInput = document.getElementById("cpf").value;
    const success = document.getElementById("success");
    const error = document.getElementById("error");

    success.style.display = "none";
    error.style.display = "none";
    

    if (isValidCPF(userInput)) {
        console.log("Foi!");
        success.style.display = "block";
    } else {
        console.log("Não foi :(");
        error.style.display = "block";
    };


};

function isValidCPF(number) {
    if (number.length != 11) {
        return false;
    };

    let subnumber = number.slice(0, 9);
    // console.log(`Subnumber is ${subnumber}`);

    let descArray = [10, 9, 8, 7, 6, 5, 4, 3, 2];

    let verify1 = 0;
    let verifySum1 = 0;
    for (let i = 0; i < subnumber.length; i++) {
        verifySum1 += number[i] * descArray[i];
        // console.log(`Multiplied ${number[i]} by ${descArray[i]}.`);
        // console.log(`Sum updated to ${verifySum1}`);
    };
    
    verify1 = (verifySum1 * 10) % 11
    verify1 === 10? verify1 = 0 : null;

    // console.log(`1st digit must be ${verify1}`);

    let verify2 = 0;
    subnumber = subnumber + verify1;
    descArray.unshift(11);

    let verifySum2 = 0;
    for (let i = 0; i < subnumber.length; i++) {
        verifySum2 += number[i] * descArray[i];
        // console.log(`Multiplied ${number[i]} by ${descArray[i]}.`);
        // console.log(`Sum updated to ${verifySum2}`);
    };

    verify2 = (verifySum2 * 10) % 11
    verify2 === 10? verify2 = 0 : null;

    // console.log(`2nd digit must be ${verify2}`);

    // console.log(`${number[9]} must be ${verify1} and ${number[10]} must be ${verify2}`)

    return (number[9] == verify1 && number[10] == verify2);
};