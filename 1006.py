def solution(s):
    answer = ''
    answer2 = s.split(" ")
    for i in range(len(answer2)):
        for j in range(len(answer2[i])):
            if(j%2==0):
                answer += answer2[i][j].upper()
            else:
                answer += answer2[i][j].lower()
        answer += ' '
    return answer[:-1]



//
def solution(s):
    answer = ''
    cnt = 0
    for i in range(len(s)):
        if(s[i]==' '):
            cnt=0
            answer += " "
        else:
            if(cnt%2==0):
                answer += s[i].upper()
            else:
                answer += s[i].lower()
            cnt=cnt+1
    return answer
