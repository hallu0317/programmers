function solution(s) {
    var answer = [];
    answer = s.split("").sort().reverse();
    return answer.join("");
}
