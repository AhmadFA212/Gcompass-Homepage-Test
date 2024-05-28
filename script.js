// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('k-bg-17-dec-2012-white-pc-icon-parent').addEventListener('click', () => {
        document.querySelector('.dropdown-content').classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!event.target.closest('k-bg-17-dec-2012-white-pc-icon-parent')) {
            let dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });
});
