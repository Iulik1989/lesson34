const runFunc = (callback, condition) => {
    if(condition) {
        callback(condition)
    }
}

module.exports = runFunc;