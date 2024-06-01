document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('Flash');
    const container = document.querySelector('.MainHeader');
    const flashTemplate = document.createElement('div');
    flashTemplate.classList.add('flash');

    myButton.addEventListener('click', createFlash);

    function createFlash() {
        appendAndRemoveFlash();
        setTimeout(appendAndRemoveFlash, 200);
        setTimeout(appendAndRemoveFlash, 1200);
    //     setTimeout(appendAndRemoveFlash, 2200);
    }

    function appendAndRemoveFlash() {
        const flash = flashTemplate.cloneNode(true);
        container.appendChild(flash);
        setTimeout(function() {
            container.removeChild(flash);
        }, 500);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const titles = [
        "Lifelong Learner: Student",
        "Security Specialist: Hacker",
        "Digital Defender: Cyber",
        "Customer Experience Champion: Customer Team Member (CTM)",
        "Military service: Veteran"
    ];

    const typedText = document.querySelector('.typed-text');

    function typeTitles(index) {
        if (index < titles.length) {
            const listItem = document.createElement('li');
            listItem.textContent = titles[index];
            typedText.appendChild(listItem);
            setTimeout(function() {
                typeTitles(index + 1);
            }, 400);
        }
    }

    typeTitles(0);
});




