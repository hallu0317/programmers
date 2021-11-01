function solution(price, money, count) {
    let answer = 0;
    for(let i=1; i<=count; i++) {
        answer += i*price; 
    }
    let result = money - answer;
    if(result >= 0) {
        return 0;
    } else {
        return Math.abs(result);
    }
}

//
function solution(price, money, count) {
    let answer = 0;
    for(let i=1; i<=count; i++) {
        answer += i*price; 
    }
    return answer > money ? answer-money : 0;
}
