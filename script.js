// script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('input-form');
    const displayArea = document.getElementById('display-area');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const userInput = document.getElementById('user-input').value;
        const paragraph = document.createElement('p');
        paragraph.textContent = userInput;
        displayArea.appendChild(paragraph);
        form.reset();
    });
});
