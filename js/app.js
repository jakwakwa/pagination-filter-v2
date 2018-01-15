const students = document.getElementsByClassName('student-item');
const paginationEl = document.getElementsByClassName('pagination')[0];

showPage(1,students);
appendPageLinks(students);