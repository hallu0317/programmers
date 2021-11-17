function solution(answers) {
    var answer = [];
    let num1 = [1,2,3,4,5];
    let num2 = [2,1,2,3,2,4,2,5];
    let num3 = [3,3,1,1,2,2,4,4,5,5];
    let cnt = [0,0,0];
    
    for(let i=0; i<answers.length; i++) {
        if(answers[i] == num1[i%num1.length]) {
            cnt[0]++;
        }
        if(answers[i] == num2[i%num2.length]) {
            cnt[1]++;
        }
        if(answers[i] == num3[i%num3.length]) {
            cnt[2]++;
        }
    }

    for(let j=0; j<cnt.length; j++) {
        if(cnt[j] == Math.max(...cnt)) {
            answer.push(j+1);
        }
    }
    return answer;
}
