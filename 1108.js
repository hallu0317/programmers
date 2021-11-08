function solution(d, budget) {
    var answer = 0;
    let dd = d.sort((a,b)=>a-b);
    
    for(let i=0; i<dd.length; i++) {
        if(budget-dd[i]>=0) {
            budget = budget - dd[i];
            answer++;
        }
    }
    return answer;
}
