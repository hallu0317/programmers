def solution(x):
    x= str(x)
    y=0
    for i in range(len(x)):
        y += int(x[i])
    x = int(x)
    if(x%y==0):
        return True
    else:
        return False
