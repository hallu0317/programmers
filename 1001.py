def solution(n):
    s = str(n)
    answer = []
    
    for i in range(len(s)):
        answer.append(int(s[i]))
    return answer[::-1]


## list,map함수 사용
def solution(n):
    answer = list(map(int,str(n)))
    answer.reverse()
    return answer
