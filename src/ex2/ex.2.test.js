const createObj = require('./ex2');

const result = {
    name: 'Alex',
    age: 32, 
    job: 'dev'
}

test('should return and object', () => {
    expect(createObj('Alex', 32, 'dev')).toEqual(result)
})