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

//Merge Two Sorted Lists