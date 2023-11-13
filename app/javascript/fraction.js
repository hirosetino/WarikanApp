document.addEventListener('turbo:load', function() {
    const memberButtons = document.querySelectorAll('.select-member');
    let count = 0;

    memberButtons.forEach(button => {
        button.addEventListener('click', function() {
            const memberName = button.textContent;
            const memberFraction = document.querySelector(`[data-name="${memberName}"]`);
            const fractionInput = document.getElementById('fraction_input');
            const newFractionValue = Number(fractionInput.value);

            if (0 < fractionInput.value && count < 1) {
                memberFraction.value = Number(memberFraction.value) + newFractionValue;
                count = 1;
            }

            const clearButton = document.getElementById('clear');
            let clicked;
            clearButton.addEventListener('click', function() {
                if(clicked != true) {
                    memberFraction.value = Number(memberFraction.value) - newFractionValue;
                    count = 0;
                    clicked = true;
                }
            });
        });
    });
});