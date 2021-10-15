def solution(seoul):
    answer = ''
    for i in range(len(seoul)):
        if seoul[i] == "Kim":
           answer = '김서방은 %d에 있다'%i
    return answer
  
  
  
  def solution(seoul):
    return ('김서방은 %d에 있다'%seoul.index('Kim'))
    
  
