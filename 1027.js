function solution(dartResult) {
    var answer = [];
    var score = 0;
    var result = 0;
    
    for(let i=0; i<dartResult.length; i++) {
        if(isNaN(dartResult[i])==false) {
            if(isNaN(dartResult[i])==false && isNaN(dartResult[i+1]) == false) {
                score = 10;   
                i++;
            } else {
                score = parseInt(dartResult[i]);
            }
        }
        else if(dartResult[i] == 'S') {
            answer.push(score);
        }
        else if(dartResult[i] == 'D') {
            answer.push(score ** 2);
        }
        else if(dartResult[i] == 'T') {
            answer.push(score ** 3);
        }
        else if(dartResult[i] == '#') {
            answer[answer.length -1] = -1 * answer[answer.length -1];
        }
        else if(dartResult[i] == '*') {
            answer[answer.length -1] *= 2;
            answer[answer.length -2] *= 2;
        }
    }
    for(let i=0; i<answer.length; i++) {
        result += parseInt(answer[i]);
    }
    return result;
}
