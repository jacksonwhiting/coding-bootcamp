// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function (score, totalScore) {
    if (typeof score === "number" && typeof totalScore === "number") {
        const percent = (score / totalScore) * 100
        let letterGrade = ''

        if (percent >= 90) {
            letterGrade = 'A'
        } else if (percent >= 80) {
            letterGrade = 'B'
        } else if (percent >= 70) {
            letterGrade = 'C'
        } else if (percent >= 60) {
            letterGrade = 'D'
        } else {
            letterGrade = 'F'
        }

        return `You got a ${letterGrade} (${percent}%)!`
    } else {
        throw Error("Need to input a number for score and totalScore")
    }
}

try {
    console.log(gradeCalc(20, "test"));
} catch (e) {
    console.log(e.message);
}