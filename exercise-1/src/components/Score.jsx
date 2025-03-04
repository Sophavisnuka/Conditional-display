
import Statistic from "./Statistic";
function Score ({courseName, courseResult}) {
    function getScore (score) {
        if (score < 50) {
            return 'warning';
        } else {
            return '';
        }
    }
    return (
        <div className="scores">
            <h1>{courseName}</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {courseResult.map((student, index) => (
                        <tr key={index}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td className={getScore(student.score)}>{student.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Statistic courseResult={courseResult} />
        </div>
    );
}

export default Score;