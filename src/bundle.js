const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navLinks = document.getElementsByClassName('navbar-links')[0]
        const barOne = document.getElementsByClassName('bar one')[0]
        const barTwo = document.getElementsByClassName('bar two')[0]
        const barThree = document.getElementsByClassName('bar three')[0]
        
        toggleButton.addEventListener('click',() =>{
            navLinks.classList.toggle('active')
            barOne.classList.toggle('active')
            barTwo.classList.toggle('active')
            barThree.classList.toggle('active')
        });


        document.addEventListener("DOMContentLoaded", function () {
            const slides = document.querySelectorAll(".testimonial-slide");
            let currentSlide = 0;
        
            function showSlide(slideIndex) {
                slides.forEach((slide, index) => {
                    if (index === slideIndex) {
                        slide.style.display = "block";
                    } else {
                        slide.style.display = "none";
                    }
                });
            }
        
            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }
        
            // Auto-play the slider
            setInterval(nextSlide, 5000); // Change slide every 5 seconds
        
            // Initial display
            showSlide(currentSlide);
        });