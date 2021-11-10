function solution(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++) {
        if(s(i) %2 ==0) {
            answer += i;
        }
        else {
            answer -= i;
        }
    }
    return answer;
}
function s(n) {
    var cnt = 0;
    for(var k=1; k<=n; k++) {
        if(n%k==0) {
            cnt++;
        }
    }
    return cnt;
}

// 제곱근이 정수이면 약수는 홀수개.
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
