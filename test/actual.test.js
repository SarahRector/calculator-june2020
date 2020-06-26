// IMPORT MODULES under test here:
// import example from '../example.js';
import {add, subtract, multiply, divide} from "../functions.js"

const test = QUnit.test;

test('it should add two numbers together', (expect) => {
    const aThing = 5
    const anotherThing = 5
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(aThing, anotherThing);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should add two numbers together', (expect) => {
    const thing1 = 6
    const thing2 = 2
    const expected = 8;
    const actual = add(thing1, thing2);
    expect.equal(actual, expected);
});
test('it should add two numbers together', (expect) => {
    const redFish = 12
    const blueFish = 20
    const expected = 32;
    const actual = add(redFish, blueFish);
    expect.equal(actual, expected);
});

test('it should subtract two numbers', (expect) => {
    const muppet = 4
    const muppet2 = 2
    const expected = 2;
    const actual = subtract(muppet, muppet2);
    expect.equal(actual, expected);
});
test('it should subtract two numbers', (expect) => {
    const gonzo1 = 12
    const gonzo2 = 2
    const expected = 10;
    const actual = subtract(gonzo1, gonzo2);
    expect.equal(actual, expected);
});
test('it should subtract two numbers', (expect) => {
    const fozzi1 = 8
    const fozzi2 = 5
    const expected = 3;
    const actual = subtract(fozzi1, fozzi2);
    expect.equal(actual, expected);
});

test('it should multiply two numbers', (expect) => {
    const muppet3 = 4
    const muppet4 = 2
    const expected = 8;
    const actual = multiply(muppet3, muppet4);
    expect.equal(actual, expected);
});
test('it should multiply two numbers', (expect) => {
    const gonzo3 = 12
    const gonzo4 = 2
    const expected = 24;
    const actual = multiply(gonzo3, gonzo4);
    expect.equal(actual, expected);
});
test('it should multiply two numbers', (expect) => {
    const fozzi3 = 8
    const fozzi4 = 5
    const expected = 40;
    const actual = multiply(fozzi3, fozzi4);
    expect.equal(actual, expected);
});

test('it should divide two numbers', (expect) => {
    const muppet5 = 4
    const muppet6 = 2
    const expected = 2;
    const actual = divide(muppet5, muppet6);
    expect.equal(actual, expected);
});
test('it should divide two numbers', (expect) => {
    const gonzo5 = 12
    const gonzo6 = 2
    const expected = 6;
    const actual = divide(gonzo5, gonzo6);
    expect.equal(actual, expected);
});
test('it should divide two numbers', (expect) => {
    const fozzi5 = 8
    const fozzi6 = 4
    const expected = 2;
    const actual = divide(fozzi5, fozzi6);
    expect.equal(actual, expected);
});