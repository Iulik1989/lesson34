const checkNumber = require('./ex1')

describe('test checkNumber functionality', () => {
    test('should return error with wrong arg', () => {
        expect(checkNumber('str')).toBe("please use a number");  
        expect(checkNumber(NaN)).toBe("please use a number");  
    })

    test('shoud return false with number less than 50', () => {
        expect(checkNumber(50)).toBe(false);
        expect(checkNumber(3)).toBeFalsy();    
    })

    test('shoud return true with number greater than 50 and less than 100', () => {
        expect(checkNumber(51)).toBe(true);
        expect(checkNumber(70)).toBeTruthy();    
        expect(checkNumber(99)).toBe(true);
    })

    test('shoud return false with number greater than 99', () => {
        expect(checkNumber(100)).toBe(false);
        expect(checkNumber(150)).toBeFalsy();    
    })
})
   