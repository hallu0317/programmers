import math
def solution(n):
    root = math.sqrt(n)
    if(n%root==0):
        return (root+1)**2
    else:
        return -1
