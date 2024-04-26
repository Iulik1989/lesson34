const checkStr = require('./ex5')

const arr = ['str1', 'str2', 'str3', 'str4', 'str5']
const falseStr = 'str2'
const trueStr = 'str4'


test('checkStr', () => {
    expect(checkStr(arr, falseStr)).toBe(false)
    expect(checkStr(arr, trueStr)).toBe(true)
})