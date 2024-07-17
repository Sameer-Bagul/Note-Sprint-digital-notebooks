// script.js
document.addEventListener('DOMContentLoaded', function() {
    const bookList = document.getElementById('book-list');
    const editor = document.querySelector('.editor');
    const newNotebookBtn = document.getElementById('new-notebook-btn');

    newNotebookBtn.addEventListener('click', function() {
        const notebookName = prompt('Enter a name for your new notebook:');
        if (notebookName) {
            const notebookItem = document.createElement('li');
            notebookItem.textContent = notebookName;
            bookList.appendChild(notebookItem);

            // Clear editor content when creating a new notebook
            editor.textContent = '';
        }
    });

    // Sample: Load existing notebooks from local storage or database
    // Uncomment and adapt as needed
    // const savedNotebooks = JSON.parse(localStorage.getItem('notebooks')) || [];
    // savedNotebooks.forEach(function(notebookName) {
    //     const notebookItem = document.createElement('li');
    //     notebookItem.textContent = notebookName;
    //     bookList.appendChild(notebookItem);
    // });

    // Save notebook list to local storage
    // Uncomment to save each time a new notebook is added
    // localStorage.setItem('notebooks', JSON.stringify(Array.from(bookList.children).map(li => li.textContent)));
});
