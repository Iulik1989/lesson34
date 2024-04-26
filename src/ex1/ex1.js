const checkNumber = (num) => {
    if(typeof num !== 'number' || isNaN(num)) return 'please use a number';

    if(num < 100 && num > 50) {
        return true;
    } else {
        return false;
    }
}


module.exports = checkNumber;