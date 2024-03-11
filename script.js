document.addEventListener('DOMContentLoaded', () => {
    const inputArea = document.getElementById('input-area');
    const displayCharacter = document.getElementById('display-character');
    const hiraganaCharacters = [
        'あ', 'い', 'う', 'え', 'お',
        'か', 'き', 'く', 'け', 'こ',
        'さ', 'し', 'す', 'せ', 'そ',
        'た', 'ち', 'つ', 'て', 'と',
        'な', 'に', 'ぬ', 'ね', 'の',
        'は', 'ひ', 'ふ', 'へ', 'ほ',
        'ま', 'み', 'む', 'め', 'も',
        'や',       'ゆ',       'よ',
        'ら', 'り', 'る', 'れ', 'ろ',
        'わ', 'を',
        'ん'
    ];

    function setRandomCharacter() {
        const randomIndex = Math.floor(Math.random() * hiraganaCharacters.length);
        displayCharacter.textContent = hiraganaCharacters[randomIndex];
    }

    setRandomCharacter(); // Set an initial random character

    inputArea.addEventListener('input', () => {
        if (inputArea.value === displayCharacter.textContent) {
            setRandomCharacter(); // Display a new character upon correct input
            inputArea.value = ''; // Clear input field after correct entry
        } else if (inputArea.value.length >= 2) {
            inputArea.value = ''; // Clear input if incorrect (ensures single character input)
        }
    });
});
