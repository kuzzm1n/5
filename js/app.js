$(document).ready(function() {
    const trapNumbers = [1, 3, 5, 7];
    const starsCount = {
        1: 10,
        3: 5,
        5: 4,
        7: 3
    };
    let currentTrapIndex = 1;

    function updateTrapCount() {
        $('#trap-count').text(trapNumbers[currentTrapIndex]);
    }

    $('#decrease').click(function() {
        if (currentTrapIndex > 0) {
            currentTrapIndex--;
            updateTrapCount();
        }
    });

    $('#increase').click(function() {
        if (currentTrapIndex < trapNumbers.length - 1) {
            currentTrapIndex++;
            updateTrapCount();
        }
    });

    $('#get-signal').click(function() {
        var selectedNumber = trapNumbers[currentTrapIndex];
        generateStars(selectedNumber);
    });

    function generateStars(number) {
        const squares = $('.square');
        const starSound = document.getElementById('star-sound');

        squares.removeClass('star fade-in').css('opacity', 1);

        const starCount = starsCount[number] || 0;
        const starPositions = [];

        while (starPositions.length < starCount) {
            const randomPosition = Math.floor(Math.random() * squares.length);
            if (!starPositions.includes(randomPosition)) {
                starPositions.push(randomPosition);
            }
        }

        starPositions.forEach(function(pos, index) {
            setTimeout(function() {
                const square = squares.eq(pos);
                square.addClass('fade-out');
                starSound.currentTime = 0;
                starSound.play();

                setTimeout(function() {
                    square.removeClass('fade-out').addClass('star').addClass('fade-in');
                }, 500);
            }, index * 1000);
        });
    }
});
