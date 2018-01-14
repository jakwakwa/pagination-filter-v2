// When the page loads, your program should hide all but the first 10 students in the list.
const showPage = (pageNumber,studentList) => {
    // first hide all students on the page
    for(let i = 0; i < studentList.length; i++) {
        studentList[i].style.display = 'none';
    }
    // Then loop through all students in our student list argument
    if(pageNumber === 1) {
        for(let i = 0; i < studentList.length; i++) {
            if(i < 10) { // 10 is the amount of students to display
                studentList[i].style.display = 'block'; 
            }
        }
    } else if (pageNumber > 1) {
        for(let i = 0; i < studentList.length; i++) {
            if( i > (((pageNumber * 10) - 11)) && i < ((pageNumber * 10)) ) {
                studentList[i].style.display = 'block'; 
            }
        }
    }
};