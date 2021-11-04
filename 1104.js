function solution(a, b) {
    var answer = 0;
    let day = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    let date = [31,29,31,30,31,30,31,31,30,31,30,31];
    for(let i=0; i<a-1; i++) {
        answer += date[i];
    }
    answer = day[(answer+b-1)%7];
    return answer;
}
