function calculateGrade(mark) {
    //if conditionals...
    if (mark > 79 && mark <= 100) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else if (mark >= 0 && mark < 40) {
        return 'E';
    }else {
        return 'not existent'
    }

}
 // applicable example
    mark = 20;
    console.log(`The student's grade is:`, calculateGrade(mark));