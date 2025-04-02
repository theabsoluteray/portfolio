document.addEventListener("DOMContentLoaded", function () {
    setupMenuToggle();
    setupScrollButtons();
    setupFadeInEffect();
    setupAudioPlayer();
    setupScrollhome();
    setupScrollcontact();
    setupContactForm();
    document.getElementById("year").textContent = new Date().getFullYear();
});
function setupMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        menuToggle.classList.add('hidden');
    });

    menuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('hidden');
    });
}

function setupScrollButtons() {
    document.querySelectorAll(".scrollButton").forEach(button => {
        button.addEventListener("click", function () {
            const targetElement = document.querySelector(".target-section");
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}
function setupScrollhome() {
    document.querySelectorAll(".scrollhome").forEach(button => {
        button.addEventListener("click", function () {
            console.log("Scroll home button clicked");
            const targetElement = document.querySelector(".target-home");
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            } else {
                console.log("Target home section not found!");
            }
        });
    });
}
function setupScrollcontact() {
    document.querySelectorAll(".scrollcontact").forEach(button => {
        button.addEventListener("click", function () {
            console.log("Scroll contact button clicked");
            const targetElement = document.querySelector(".target-contact");
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            } else {
                console.log("Target contact section not found!");
            }
        });
    });
}
function setupFadeInEffect() {
    const elements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
}
function setupAudioPlayer() {
        const playButton = document.getElementById(".play-audio");
        const audio = document.getElementById(".audio-source");
        if (playButton && audio) { 
            playButton.addEventListener("click", function () {
                audio.play(); 
            });
        }
    }
function setupContactForm() {
        const form = document.getElementById("contact-form");
        const status = document.getElementById("status");
    
        if (!form) return;
    
        form.addEventListener("submit", async function (event) {
            event.preventDefault();
    
            const formData = new FormData(form);
    
            try {
                const response = await fetch("https://formspree.io/f/mjkyepgz", { 
                    method: "POST",
                    body: formData,
                    headers: { "Accept": "application/json" }
                });
    
                if (response.ok) {
                    status.classList.remove("hidden");
                    status.classList.add("text-green-500");
                    status.innerText = "Message Sent Successfully!";
                    form.reset(); 
                } else {
                    showError("Error Sending Message. Try Again.");
                }
            } catch (error) {
                console.error("Error:", error);
                showError("Network Error. Try Again.");
            }
        });
    
        function showError(message) {
            status.classList.remove("hidden");
            status.classList.remove("text-green-500");
            status.classList.add("text-red-500");
            status.innerText = message;
        }
    }
    