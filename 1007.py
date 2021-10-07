def solution(n):
    answer = 0
    for i in range(1,n+1):
        if(n%i==0):
            answer += i
    return answer



//js
function solution(n) {
    var answer = 0;
    
    for(var i=1;i<=n;i++) {
        if(n%i==0) {
            answer += i;
        }
    }
    return answer;
}
