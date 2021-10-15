function solution(seoul) {
    var answer = '';
    var cnt=0;
    for(var i=0; i<seoul.length; i++){
        if(seoul[i] === "Kim"){
            cnt = i;
        }
    }
    answer = '김서방은 '+cnt+'에 있다';
    return answer;
}

// indexOf 
function solution(seoul) {
    var idx = 0;
    
    idx = seoul.indexOf('Kim');
    return '김서방은 '+idx+'에 있다';
}
