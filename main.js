const emojiList = document.getElementById('emoji_list');
const counterList = document.getElementById('counter_list');
const emojis = ['😀', '😍', '😡', '😱', '😂'];
const counters = [0, 0, 0, 0, 0];

let emojiHTML = '';
let counterHTML = '';
for (let i = 0; i < emojis.length; i++) {
    emojiHTML += `<span class="emoji" data-index="${i}">${emojis[i]}</span>`;
    counterHTML += `<span class="counter">0</span>`;
}
emojiList.innerHTML = emojiHTML;
counterList.innerHTML = counterHTML;

emojiList.addEventListener('click', function(event) {
    const emojiElement = event.target.closest('.emoji');
    if (emojiElement) {
        const emojiIndex = emojiElement.dataset.index;
        counters[emojiIndex]++;
        counterList.children[emojiIndex].textContent = counters[emojiIndex];
    }
});