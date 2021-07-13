
const isPalindrome = (str) => {
    return str == str.split("").reverse().join("");
}
export default isPalindrome;
