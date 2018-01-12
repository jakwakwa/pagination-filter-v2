const appendPageLinks = (studentList) => {
    // determine how many pages for this student list    
    const pageAmount = Math.ceil(studentList.length / 10);
    
    // create a page link section
    // “for” every page
    for(let i = 0; i < pageAmount; i++) {
        // add a page link to the page link section
        let li = document.createElement('li');
        let link = document.createElement('a');
        // add page number to link
        link.innerHTML = (i + 1);
        // append link to list element
        li.appendChild(link);
        // append list element to unordered list
        paginationEl.appendChild(li);  
    }
    // define what happens when you click a link
        // Use the showPage function to display the page for the link clicked
        // mark that link as “active”
}

