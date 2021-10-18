function solution(s) {
    var temp = parseInt(s);
    if(s.length==4 || s.length==6){
        if(s==temp) {
            return true;
        }
    }
    return false;
}
