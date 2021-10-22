function solution(a, b) {
    var answer = 0;
    if(a>b) {
        for(var i=a; i>=b; i--) {
            answer += i;
        }    
    }
    else {
        for(var i=b; i>=a; i--) {
            answer += i;
        }
    }
    return answer;
}

# Math
function adder(a, b, s = 0){
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}
