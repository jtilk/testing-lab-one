let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {

   //Set up a test below...
    test("The ChangeHandler class is defined.", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
    })

    test("amountDue is set based on an argument", function()
    {
        let vendingMachine = new ChangeHandler(105);

        expect(vendingMachine.amountDue).toEqual(105);
    })
    //Set up a test below...
    test("The ChangeHandler class is defined.", function() {
        // Remember, you can arrange, act, and assert...start small
        expect(ChangeHandler).toBeDefined();
    })

    test("cashTendered is set to zero.", function() {
        let vendingMachine = new ChangeHandler(100);
        expect(vendingMachine.cashTendered).toBe(0);
    })

    test("Insert a penny", function() {
        //arrange
        const vendingMachine = new ChangeHandler(105);
        //act
        vendingMachine.insertCoin("penny");
        //act & assert
        expect(vendingMachine.cashTendered).toBe(1);
    })

    test("Insert a nickel", function() {
        //arrange
        const vendingMachine = new ChangeHandler(105);
        //act
        vendingMachine.insertCoin("nickel");
        //act & assert
        expect(vendingMachine.cashTendered).toBe(5);
    })

    test("Insert a dime", function() {
        //arrange
        const vendingMachine = new ChangeHandler(105);
        //act
        vendingMachine.insertCoin("dime");
        //act & assert
        expect(vendingMachine.cashTendered).toBe(10);
    })

    test("Inserting a quarter adds 25 to cashTendered.", function() {
        const vendingMachine = new ChangeHandler(105);
        vendingMachine.insertCoin("quarter");
        expect(vendingMachine.cashTendered).toBe(25);
    })
     
      test("Inserting a penny adds 1 to cashTendered.", function() {
        // Arrange
        const vendingMachine = new ChangeHandler(105);
        // Act
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("dime");
        vendingMachine.insertCoin("nickel");
        vendingMachine.insertCoin("penny");
        // Act & Assert
        expect(vendingMachine.cashTendered).toBe(41);
    })

    test("Returns false if cashTendered less than amountDue.", function() {
        const vendingMachine = new ChangeHandler(130);
     
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
     
        expect(vendingMachine.isPaymentSufficient()).toBe(false);
     })

     test("tests to see if 32 change produces 1 quarters, 1 nickels, 2 pennies", function () {

        const vendingMachine = new ChangeHandler(100);

        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("nickel");
        vendingMachine.insertCoin("penny");
        vendingMachine.insertCoin("penny");

     expect(vendingMachine.giveChange()).toEqual({
         quarters: 1,
         dimes: 0,
         nickels: 1,
         pennies: 2
     });

     test("tests to see if 10 change produces 1 dimes", function () {

        const vendingMachine = new ChangeHandler(100);

        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("nickel");
        vendingMachine.insertCoin("penny");
        vendingMachine.insertCoin("penny");

     expect(vendingMachine.giveChange()).toEqual({
         quarters: 0,
         dimes: 1,
         nickels: 0,
         pennies: 0
     });

     test("tests to see if 27 change produces 1 quarters, 2 pennies", function () {

        const vendingMachine = new ChangeHandler(100);

        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("nickel");
        vendingMachine.insertCoin("penny");
        vendingMachine.insertCoin("penny");

     expect(vendingMachine.giveChange()).toEqual({
         quarters: 1,
         dimes: 0,
         nickels: 0,
         pennies: 2
     });


     test("tests to see if 68 change produces 2 quarters, 1 dimes, 1 nickels, 3 pennies", function () {

        const vendingMachine = new ChangeHandler(100);

        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("quarter");
        vendingMachine.insertCoin("nickel");
        vendingMachine.insertCoin("penny");
        vendingMachine.insertCoin("penny");

     expect(vendingMachine.giveChange()).toEqual({
         quarters: 2,
         dimes: 1,
         nickels: 1,
         pennies: 3
     });
    })
});