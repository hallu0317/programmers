function solution(s) {
    var answer = '';
    var l = s.length;
    if(l % 2 == 0) {
        answer = s[parseInt(l/2)-1];
        answer = answer + s[parseInt(l/2)];
    }
    if(l % 2 != 0) {
        answer = s[parseInt(l/2)];
    }
    return answer;
}
