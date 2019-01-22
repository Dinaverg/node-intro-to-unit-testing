let expect = require('chai').expect
let fizzBuzzer = require('../fizzBuzzer.js')

describe('fizzBuzzer', function() {
    it('should return "fizzbuzz" for multiples of 15', function() {
        let multiplesOf15 = [-15, 0, -0, 15, 30, 300, 15585]
        multiplesOf15.forEach(function(num) {
            expect(fizzBuzzer(num)).to.equal('fizz-buzz')
        })
    })
    it('should return "buzz" for multiples of 5 (that are not also multiples of fifteen)', function() {
        let multi5 = [-20, -5, 5, 10, 55, 695]
        multi5.forEach(function(num) {
            expect(fizzBuzzer(num)).to.equal('buzz')
        })
    })
    it('should return "fizz" for multiples of 3 (that are not also multiples of 15)', function() {
        let multi3 = [-66, 3, 27, 243, 6561]
        multi3.forEach(function(num) {
            expect(fizzBuzzer(num)).to.equal('fizz')
        })
    })
    it('should return the number provided for any other input', function() {
        let otherNums = [-53, -2, 1, 11, 1111111]
        otherNums.forEach(function(num) {
            expect(fizzBuzzer(num)).to.equal(num)
        })
    })
    it('should throw an error for any non-numerical inputs', function() {
        let notNums = [null, undefined, false, true, '1', '2', 'a', function() {}, [1, 0]]
        notNums.forEach(function(thing) {
            //expect(fizzBuzzer(thing)).to.throw() *this syntax won't 
            expect(function() {
                fizzBuzzer(thing)
            }).to.throw(Error)
        })
    }) //NaN doesn't work here
})