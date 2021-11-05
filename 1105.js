function solution(numbers) {
    let answer = [];
    let temp = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j]);
        }
    }
    answer = [...new Set(temp)];

    return answer.sort(function(a,b){
        return a-b;
    });
}

// sort함수 문법
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}
