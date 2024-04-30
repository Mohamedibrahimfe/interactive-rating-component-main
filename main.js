const spans = document.querySelectorAll('span');

function select() {
    spans.forEach(span => {
        span.addEventListener('click', function() {
            spans.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}

select(); // Call select function to add click event listeners to spans

const boxContents = document.querySelector('.box');

function update() {
    let selectedSpan = document.querySelector('.selected');

    if (selectedSpan) {
        // Get the index of the selected span
        let selectedIndex = Array.from(spans).indexOf(selectedSpan) + 1;
        boxContents.innerHTML = `<img class="thank" src="illustration-thank-you.svg"><img> <h5>You Selected ${selectedIndex} out of ${spans.length} </h5><h1 style="margin:0;">Thanks You!</h1><p>We appreciate you taking the time to give a rating. if you ever need more support, dont hesitate to get in touch`;
    } else {
        alert("Please select a span before submitting.");
    }
}

const button = document.querySelector('#submit');

button.addEventListener('click', update);
