function solution(S) {
    if (S === " " || S === "") return " ";
    return S.split("").findIndex((_, i) => 
        S.substring(0, i) === S.substring(i + 1).split("").reverse().join("")
    );
}

const str1 = "racecar";
const str2 = "maam"
const str3 =  " "
console.log(`String1 : ${str1} , Reversal character position : `,solution(str1)); 
console.log(`String2 : ${str2} Reversal character position :`,solution(str2));   
console.log(`String3 : ${str3} Reversal character position :`,solution(str3));   
