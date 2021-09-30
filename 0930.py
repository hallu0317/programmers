def solution(n):
    answer = ""
    num = sorted(str(n), reverse=True)
    for i in num:
        answer += i

    return int(answer)
