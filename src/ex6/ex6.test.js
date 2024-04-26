const {func, arr, obj1, result} = require('./ex6')

// const arr = [
//     {
//         name: 'Alex'
//     },
//     {
//         name: 'Vasile'
//     },
//     {
//         name: 'Victor'
//     }
// ]

// const obj1 =  {
//     name: 'Alex'
// }

// const result = [   
//     {
//         name: 'Vasile'
//     },
//     {
//         name: 'Victor'
//     }
// ]

test('remove obj', () => {

    expect(func(arr, obj1)).toEqual(result)
    expect(result).toHaveLength(arr.length - 1)

})