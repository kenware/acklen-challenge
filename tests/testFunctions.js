import chai from 'chai';
import chaiHttp from 'chai-http';
import checkPalindrome from '../functions/palindromeCheck';
import checkOccurenceInString from '../functions/characterInString'

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Test a string is a palindrome and number of character in string', () => {
    it('should return true if a string is a palindrome', (done) => {
        const result = checkPalindrome('malayalam')
        result.should.be.eq(true);
        done();
    })

    it('should return number of character in a string', (done) => {
        const result = checkOccurenceInString('This is not english test')
        result.should.be.eq(4);
        done();
    })
});
