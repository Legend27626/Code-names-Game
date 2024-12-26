fetch('words.json')
    .then(response => response.json())
    .then(data => {
        const words = data.words;
        const board = document.getElementById('board');

        // اختيار 25 كلمة عشوائية
        const randomWords = words.sort(() => Math.random() - 0.5).slice(0, 25);

        // إنشاء اللوحة
        randomWords.forEach(word => {
            const card = document.createElement('div');
            card.className = 'card';
            card.textContent = word;
            board.appendChild(card);
        });
    });
