document.addEventListener('turbo:load', function() {
    const memberButtons = document.querySelectorAll('.select-member');

    memberButtons.forEach(button => {
        button.addEventListener('click', function() {
            const memberName = button.textContent; // データ属性からメンバーの名前を取得
            const memberFraction = document.querySelector(`[data-name="${memberName}"]`);
            console.log(memberFraction.textContent);

            if (memberFraction) {
                const fractionInput = document.getElementById('fraction');
                console.log(memberName); // メンバー名の表示
                console.log(memberFraction.value); // フラクション情報のテキストを表示
                const newFractionValue = Number(fractionInput.value);
                memberFraction.value = Number(memberFraction.value) + newFractionValue;
            } else {
                console.log('要素が見つかりませんでした');
            }
        });
    });
});