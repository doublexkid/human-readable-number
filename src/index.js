module.exports = function toReadable (number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen', 'twenty'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];
    
    const numberString = number.toString();

    if (number === 0) {
        return 'zero';
    }

    if (number < 20) {
        return ones[number];
    }
    else if (number >= 20 && number < 100) {
        return (tens[Math.trunc(number / 10)] + (number % 10 > 0 ? ' ' + ones[number % 10].trim(): "")
        );
    }
    else if (number >= 100) {
        return (ones[Math.trunc(number / 100)] +
            " hundred" +
            (number % 100 == 0 ? "" : " " + toReadable(number % 100)));
    }




    toReadable(999);

  
}
