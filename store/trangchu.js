document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('content-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.reset();
    });
});