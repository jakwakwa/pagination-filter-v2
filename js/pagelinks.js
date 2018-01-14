const appendPageLinks = (studentList) => {
    // determine how many pages for this student list    
    const pageAmount = Math.ceil(studentList.length / 10);
    const page = document.querySelector('.page');
    let ul = document.createElement('ul');
    page.appendChild(ul);
    ul.className = 'pagination';
    // create a page link section
    // “for” every page
    for(let i = 0; i < pageAmount; i++) {
        // add a page link to the page link section
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('href', '#')
        // add page number to link
        link.innerHTML = (i + 1);
        // append link to list element
        li.appendChild(link);
        // append list element to unordered list
        ul.appendChild(li);
    }
    const buttons = document.querySelectorAll('.pagination li');
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            showPage((i + 1),students);  

            const active = document.querySelector('.pagination li a.active');
            if ( active ) {
                active.className = '';
            }
            // Updated to use className
            buttons[i].firstElementChild.className = 'active';
        });
    }
}