document.addEventListener('turbo:load', function() {
    const clearButton = document.getElementById('clear');
    const totalInput = document.getElementById('total');
    const perPersonInput = document.getElementById('per_person');
    const fractionInput = document.getElementById('fraction_input');
    const memberMoney = document.querySelectorAll('.member-money');

    clearButton.addEventListener('click', function () {
        totalInput.value = "";
        fractionInput.value = "";
        perPersonInput.value = "";
        memberMoney.forEach(function(memberMoney) {
            memberMoney.textContent = '¥ ';
        });
    });
});