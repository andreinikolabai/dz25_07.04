const emojiList = document.getElementById('emoji_list');
const counterList = document.getElementById('counter_list');
const emoji = ['😀', '😍', '😡', '😱', '😂'];
const counter = [0, 0, 0, 0, 0];

let emojiHTML = '';
let counterHTML = '';
for (let i = 0; i < emoji.length; i++) {
    emojiHTML += `<span class="emoji" data-index="${i}">${emoji[i]}</span>`;
    counterHTML += `<span class="counter">0</span>`;
}
emojiList.innerHTML = emojiHTML;
counterList.innerHTML = counterHTML;

emojiList.addEventListener('click', function(event) {
    const emojiElement = event.target.closest('.emoji');
    if (emojiElement) {
        const emojiIndex = emojiElement.dataset.index;
        counter[emojiIndex]++;
        counterList.children[emojiIndex].textContent = counter[emojiIndex];
    }
});