document.addEventListener('turbo:load', function () {
    const openModalButton = document.getElementById('open_modal');
    const modal = document.getElementById('confirmationModal');

    if (!openModalButton) return null;
    openModalButton.addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});