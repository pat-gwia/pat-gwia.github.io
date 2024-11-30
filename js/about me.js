const columns = document.querySelectorAll('.column');

columns.forEach(column => {
    column.addEventListener('mouseenter', () => {
        column.style.backgroundColor = '#f0f0f0';
    });

    column.addEventListener('mouseleave', () => {
        column.style.backgroundColor = '';
    });
});