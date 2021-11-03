function solution(sizes) {
    var answer = 0;
    let high = [];
    let low = [];
    
    for(let i=0; i<sizes.length; i++) {
        high.push(Math.max(...sizes[i]));
        low.push(Math.min(...sizes[i]));
    }
    answer = Math.max(...high) * Math.max(...low);
    return answer;
}

// map
function solution(sizes) {
    const lower = [];
    const higher = [];
    sizes.map(([s0, s1]) => {
        if(s0 > s1){
            higher.push(s0);
            lower.push(s1);
        }else{
            lower.push(s0);
            higher.push(s1);
        }
    })
    return Math.max(...higher) * Math.max(...lower);
}
