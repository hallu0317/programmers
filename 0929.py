import math
def solution(n):
    root = math.sqrt(n)
    if(n%root==0):
        return (root+1)*(root+1)
    else:
        return -1
