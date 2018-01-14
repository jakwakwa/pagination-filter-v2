// When the page loads, your program should hide all but the first 10 students in the list.
const showPage = (pageNumber,studentList) => {
    // first hide all students on the page
    for(let i = 0; i < studentList.length; i++) {
        studentList[i].style.display = 'none';
    }
    // Then loop through all students in our student list argument

        // ***************** weet nog nie hoe om hierdie dynamic te maak nie.
    if(pageNumber === 1) {
        for(let i = 0; i < studentList.length; i++) {
            if(i < 10) { // 10 is the amount of students to display
                studentList[i].style.display = 'block'; 
            }
        }
    }
    if(pageNumber === 2) {
        for(let i = 0; i < studentList.length; i++) {
            if(i > 9 && i < 20) {
                studentList[i].style.display = 'block'; 
            }
        }
    }
    if(pageNumber === 3) {
        for(let i = 0; i < studentList.length; i++) {
            if(i >= 20 && i <= 30) {
                studentList[i].style.display = 'block'; 
            }
        }
    }
    if(pageNumber === 4) {
        for(let i = 0; i < studentList.length; i++) {
            if(i >= 30 && i <= 40) {
                studentList[i].style.display = 'block'; 
            }
        }
    }
    if(pageNumber === 5) {
        for(let i = 0; i < studentList.length; i++) {
            if(i >= 40 && i <= 50) {
                studentList[i].style.display = 'block'; 
            }
        }
    }
    if(pageNumber === 6) {
        for(let i = 0; i < studentList.length; i++) {
            if(i >= 50 && i <= 60) {
                studentList[i].style.display = 'block'; 
            }
        }
    }
    if(pageNumber === 7) {
        for(let i = 0; i < studentList.length; i++) {
            if(i >= 60 && i <= 70) {
                studentList[i].style.display = 'block'; 
            }
        }
    }
 };