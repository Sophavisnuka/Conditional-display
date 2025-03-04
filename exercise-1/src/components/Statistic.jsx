function statistic ({courseResult}) {
    function getAvg (courseResult) {
        let totalScore = 0;
        for (let i = 0; i <courseResult.length; i++) {
            totalScore += courseResult[i].score;
        }
        
        return (totalScore / courseResult.length).toFixed(2);
    }
    function getMin(courseResult) {
        return Math.min(...courseResult.map(student => student.score));
    }
    
    function getMax(courseResult) {
        return Math.max(...courseResult.map(student => student.score));
    }
    return (
        <div className="statistic">
            <div className="avg">
                <label>Avg</label>
                <p>{getAvg(courseResult)}</p>
            </div>
            <div className="min">
                <label>Min</label>
                <p>{getMin(courseResult)}</p>
            </div>
            <div className="max">
                <label>Max</label>
                <p>{getMax(courseResult)}</p>
            </div>
        </div>
    )
}
export default statistic;