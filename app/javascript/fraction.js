document.addEventListener('turbo:load', function() {
    const memberButtons = document.querySelectorAll('.select-member');
    let count = 0;

    memberButtons.forEach(button => {
        button.addEventListener('click', function() {
            const memberName = button.textContent;
            const memberFraction = document.querySelector(`[data-name="${memberName}"]`);
            const fractionInput = document.getElementById('fraction_input');
            const newFractionValue = Number(fractionInput.value);

            if (count < 1) {
                memberFraction.value = Number(memberFraction.value) + newFractionValue;
            } else {
                console.log('要素が見つかりませんでした');
            }
            count ++;
        });
    });
});