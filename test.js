
test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require("./app.js")

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2;

    expected(exppected).toBe(dollars);
})

test("1 dolar a yenes", function(){
    const { fromDollarToYen } = require("./app.js")

    const Yen = fromDollarToYen(1)

    const expected = (1/1.2) * 127.9;

    expect(expected).toBe(Yen);
})

test("1 Yen a Pound", function(){
    const { fromYenToPound } = require("app.js")

    const Pound = fromYenToPound(1)

    const expected = (1/127.9) * 0.8;

    expect(expected).toBe(Pound);
})