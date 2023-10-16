document.addEventListener('turbo:load', function () {
    const openSecondModalButton = document.getElementById('open_second_modal');
    const secondModal = document.getElementById('confirmationSecondModal');

    if (!openSecondModalButton) return null;
    openSecondModalButton.addEventListener('click', function (e) {
        e.preventDefault();
        secondModal.style.display = 'block';
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            secondModal.style.display = 'none';
        }
    });
});