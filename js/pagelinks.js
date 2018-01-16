const appendPageLinks = (studentList) => {
    // determine how many pages for this student list    
    const pageAmount = Math.ceil(studentList.length / 10);
    const page = document.querySelector('.page');
    // create unordered list
    const ul = document.createElement('ul');
    // append unordered list to .page div
    page.appendChild(ul);
    // give unordered list the class "pagination"
    ul.className = 'pagination';
    // create a page link section
    // “for” every page
    for(let i = 0; i < pageAmount; i++) {
        // add a page link to the page link section
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute('href', '#')
        // add page number to link
        link.innerHTML = (i+1);
        // append link to list element
        li.appendChild(link);
        // append list element to unordered list
        ul.appendChild(li);
    }
    // select created links
    const buttons = document.querySelectorAll('.pagination li');
    // loop through all the link elements 
    buttons.forEach((link,index) => {
        // assign eventlisteners to each link
        link.addEventListener('click', () => {
            // call showpage function using i as page number
            showPage((index + 1),students);
            const active = document.querySelector('.pagination li a.active');
            if ( active ) {
                active.className = '';
            }
            // Updated to use className
            link.firstElementChild.className = 'active';
        });
    });
};