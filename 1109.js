function solution(n) {
    let answer = [];

    n = n.toString(3);
    for(let i=0; i<n.length; i++) {
        answer.push(n[i]);
    }
    answer = answer.reverse();
    answer = answer.join("");

    return parseInt(answer,3);
}

//
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}
