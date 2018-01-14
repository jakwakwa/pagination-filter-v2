
const students = document.getElementsByClassName('student-item');
const paginationEl = document.getElementsByClassName('pagination')[0];
// const button1 = document.getElementsByClassName('1');
// const button2 = document.getElementsByClassName('2');

// Show first 10 students
showPage(1,students);
appendPageLinks(students);

// button1[0].addEventListener("click", function() {
//     showPage(1,students);
//     console.log("button 2 clicked");
//   });
// button2[0].addEventListener("click", function() {
//     showPage(2,students);
//     console.log("button 2 clicked");
//   });