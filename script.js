     // Navbar Toggle
        const navbarToggle = document.getElementById('navbarToggle');
        const navbarMenu = document.getElementById('navbarMenu');

        navbarToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
            navbarToggle.classList.toggle('active');
            
            // Smooth scroll for navbar links
            document.querySelectorAll('.navbar-link').forEach(link => {
                link.addEventListener('click', () => {
                    navbarMenu.classList.remove('active');
                    navbarToggle.classList.remove('active');
                });
            });
        });

        // Smooth scrolling for navbar links
        document.querySelectorAll('.navbar-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector(link.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                navbarMenu.classList.remove('active');
            });
        });

        // Carousel functionality
        const track = document.getElementById('carouselInner');
        const slides = Array.from(track.children);
        let currentSlide = 0;

        function moveToSlide() {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            currentSlide = (currentSlide + 1) % slides.length;
        }

        setInterval(moveToSlide, 5000);

        // GSAP Animations
        gsap.from("#animatedTitle", {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power4.out"
        });

        gsap.from("#animatedSubtitle", {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power4.out",
            delay: 0.3
        });

       
        
