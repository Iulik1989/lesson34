// ['str1', 'str2', 'str3', 'str4', 'str5']
// 'str3' false
// 'str4' true

const checkStr = (list, str) => {
    return list.some((item, idx) => item === str && idx > 2)
}

module.exports = checkStr;