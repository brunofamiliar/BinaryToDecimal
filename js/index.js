
handleUserInput = (event) => {
    const elementResult = document.getElementById("result");
    
    const { value } = event;
        
    if(value === ""){
        elementResult.textContent = "Hello Word!";
        return;
    }

    const result = convertToDecimal(value);

    elementResult.textContent = result
}

restrictCharacters = (event) => {
    const regex = /[^0 | 1]*/gi;
    event.value = event.value.replace(regex, "")
}

convertToDecimal = (value) => {
    let position = 0;
    let result = 0;

    while(position < value.length){
        let binaryNumber = Number(value[position]);
        let expoent = value.length - (position + 1);
        
        result += binaryNumber * Math.pow(2, expoent);
        position++;
    }

    return result;
}

addNumberToInput = (event) => {
    const elementInput = document.getElementById("input-number");

    if(elementInput.value.length >= 20)
        return;

    const { value } = event;

    elementInput.value += value;

    handleUserInput(elementInput);
}

removeNumberToInput = () => {
    const elementInput = document.getElementById("input-number");
 
    elementInput.value = elementInput.value.substring(0, elementInput.value.length-1);

    handleUserInput(elementInput);
}
