//Longest Common Prefix
function longestCommonPrefix(strings) {
    let prefix = '';
    if(strings.length === 0) return prefix;
    for(let i = 0; i < strings[0].length; i++) {
        const character = strings[0][i];
        for(let j = 0; j < strings.length; j++) {
            if(strings[j][i] !== character) return prefix;
        }
        prefix = prefix + character;
    }
    return prefix;
}

console.log(longestCommonPrefix(["floor", "flood", "flower"]))

//Valid Parentheses
function validParentheses(s) {
    let parentheses = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else if(stack[stack.length - 1] === parentheses[s[i]]) {
            stack.pop();
        } else return false;
    }
    return stack.length ? false : true;
}

console.log(validParentheses("()[]{}"))
console.log(validParentheses("(]"))
console.log(validParentheses("([)]"))
console.log(validParentheses("({})"))

//Merge Two Sorted Lists