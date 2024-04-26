const runFunc = require('./ex3')

describe('runFunc', () => {

    test('should run callback with condition true', () => {
        const callback = jest.fn()
        runFunc(callback, true)
        expect(callback).toHaveBeenCalled()
    })

    test('should not run callback with condition false', () => {
        const callback = jest.fn()
        runFunc(callback, false)
        expect(callback).not.toHaveBeenCalled()
    })
})