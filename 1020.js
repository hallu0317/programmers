function solution(s){
    var answer = false;
    var cnt1 = 0;
    var cnt2 = 0;
    for(var i=0; i<s.length; i++) {
        if (s[i] ==='p') {
            cnt1+=1;
        }
        else if(s[i]==='P') {
            cnt1+=1;
        }
        else if (s[i] ==='y') {
            cnt2++;
        }
        else if (s[i] ==='Y') {
            cnt2++;
        }
        else {
            continue;
        }
    }
    if (cnt1 === cnt2) {
        answer = true;
    }
    return answer;
}

function solution(s) {
  s = s.toUpperCase();
  var num = 0;
  for(var i = 0; i < s.length; i++){
    if(s[i] === 'P') num++;
    if(s[i] === 'Y') num--;
  }
  if (num === 0) {
    return true;
  }
  return false;
}
