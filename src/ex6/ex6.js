const func = (arr, obj) => {
    return arr.filter(item => JSON.stringify(obj) !== JSON.stringify(item))
}

const arr = [
    {
        name: 'Alex'
    },
    {
        name: 'Vasile'
    },
    {
        name: 'Victor'
    }
]

const obj1 =  {
    name: 'Alex'
}

const result = [   
    {
        name: 'Vasile'
    },
    {
        name: 'Victor'
    }
]


module.exports = {
    func,
    result,
    obj1,
    arr
};

