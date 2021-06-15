console.log("Hello World")

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

console.log(fromEuroToDollar(100))

const fromDollarToYen = function(valueInDollar){
    let valueInYen = (valueInDollar / 1.2) * 127.9;
    return valueInYen;
}

console.log(fromDollarToYen(100))

const fromYenToPound = function(valueInYen){
    let valueInPound = (valueInYen / 127.9) * 0.8;
    return valueInPound;
}
console.log(fromYenToPoun(100))

module.exports = { fromEuroToDollar ,fromDollarToYen ,fromYenToPound}

