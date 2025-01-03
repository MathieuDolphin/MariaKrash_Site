document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const content = tab.nextElementSibling;
        const isOpen = content.style.display === 'block';
        document.querySelectorAll('.tab-content').forEach(tc => tc.style.display = 'none');
        content.style.display = isOpen ? 'none' : 'block';
    });
});
