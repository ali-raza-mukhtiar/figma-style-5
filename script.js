document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');

        // Close all items
        document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));

        // Toggle the clicked item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});
