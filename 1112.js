function solution(N, stages) {
    let arr = [];
    let totalNum = stages.length;
    for (let i=1; i<=n; i++){
        let stageNum = stages.filter(ele=> ele==i).length
        let failRatio = 0;
        if (stageNum===0){
            failRatio = 0;
        }else{
            failRatio = (stageNum)/totalNum;
        }
        totalNum -= stageNum;
        arr.push({idx:i,ratio:failRatio});
    }
