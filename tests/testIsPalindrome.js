import chai from 'chai';
import chaiHttp from 'chai-http';
import checkPalindrome from '../palindromeCheck';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Test a string is a palindrome', () => {
    it('should return true if a string is a palindrome', (done) => {
        const result = checkPalindrome('malayalam')
        result.should.be.eq(true);
        done();
    })

    it('should return false if a string is not a palindrome', (done) => {
        const result = checkPalindrome('english')
        result.should.be.eq(false);
        done();
    })
});