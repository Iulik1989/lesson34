const getData = require('./ex4');

const response = JSON.stringify([1,2,3])


global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(JSON.stringify([1,2,3]))
    })
)

test('test fetch', async () => {
    const data = await getData()
    expect(fetch).toBeCalledTimes(1);
    expect(data).toEqual([1,2,3])
})






