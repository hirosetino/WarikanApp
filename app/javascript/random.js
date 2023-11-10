document.addEventListener('turbo:load', function() {
    const randomButton = document.getElementById('random');
    const randomDisplay = document.getElementById('random-display');

    // Random ボタンのクリックイベントハンドラを追加
    randomButton.addEventListener('click', function() {
        // メンバーボタンを取得
        const memberButtons = document.querySelectorAll('.select-member');
        
        // ランダムにメンバーを選択
        const randomIndex = Math.floor(Math.random() * memberButtons.length);
        const randomMember = memberButtons[randomIndex].getAttribute('data-member-name');
        
        // 結果を表示
        randomDisplay.textContent = randomMember;
    });
});