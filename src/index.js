module.exports = function toReadable (number) {
    let result = '';
    if (number === 0) {
        result = 'zero';
    }
    const num_1_19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const hundred = Math.floor(number / 100); 
    number = number % 100; 
    const ten = Math.floor(number / 10);
    const one = (number % 10);
    
    if (hundred) {
        let readHundred = num_1_19[hundred];
        result = readHundred + ' ' + 'hundred';
    }

    if (ten>0 || one>0)

        if (!(result ===''))
        {
            result = result + ' ';
        }

    {
        if (ten < 2)
        {
            result = result + num_1_19[ten * 10 + one];
        }
        else
        {
            result = result + tens[ten];
            if (one>0)
            {
                result = result + ' ' + num_1_19[one];
            }
        }
    }
    return result;
}
