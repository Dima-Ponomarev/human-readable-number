const encodeOneDigit = num => ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'][num];
const encodeTens = num => ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][num-2];
const encodeTeens = num => {
    if (num < 10){
        return encodeOneDigit(num);
    } else {
        return ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'][num - 10]
    }
}
const encodeTriplet = num => {
    let string = '';
    if (num >= 100){
        string = encodeOneDigit(Math.floor(num / 100)) + ' hundred';
    }
    const tens = num % 100;
    if (tens >= 20){
        if (string !== ''){
            string += ' ';
        }
        string += encodeTens(Math.floor(tens / 10));
        if (tens % 10 > 0){
            string += ' ' + encodeOneDigit(tens % 10);
        }
    } else if (tens !== 0){
        if (string !== ''){
            string += ' ';
        }
        string += encodeTeens(tens)
    }
    return string;
}

module.exports = function toReadable (number) {
    if (number === 0){
        return 'zero'
    } else {
        return encodeTriplet(number)
    }
    
}
