document.addEventListener('turbo:load', function() {
    const fairShareButton = document.getElementById('fair_share');
    const totalInput = document.getElementById('total');
    const perPersonInput = document.getElementById('per_person');
    const fractionInput = document.getElementById('fraction_input');
    const memberMoney = document.querySelectorAll('.member-money');

    fairShareButton.addEventListener('click', function() {
        const totalValue = Number(totalInput.value);

        // Ajaxリクエストでメンバーの数を取得
        fetch('/members/count.json')
            .then(response => response.json())
            .then(data => {
                const memberCount = data.member_count;

                if (!isNaN(totalValue) && !isNaN(memberCount)) {
                    const fairShare = totalValue / memberCount;
                    const fairShareFraction = (fairShare - parseInt(fairShare)) * memberCount;
                    perPersonInput.value = parseInt(fairShare);
                    fractionInput.value = parseInt(fairShareFraction);
                    console.log(fractionInput);

                    memberMoney.forEach(function(memberMoney) {
                        memberMoney.textContent = '¥ ' + parseInt(fairShare);
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});