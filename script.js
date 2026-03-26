const facts = [
            "Japan has more than 1,600 convenience stores that never close!",
            "The Japanese language has three different writing systems: Hiragana, Katakana, and Kanji.",
            "Japan consumes more fish per capita than any other nation.",
            "The average Japanese person lives for more than 3 years after retirement.",
            "Japan has invented the world's fastest train - the Shinkansen (bullet train).",
            "Hot springs (onsen) are believed to have healing properties in Japanese culture.",
            "Japan has more than 100,000 restaurants, more than any other country.",
            "Japanese people remove their shoes when entering homes and certain buildings.",
            "The concept of 'Wabi-sabi' celebrates the beauty of imperfection and transience.",
            "Japan produces over 90% of the world's wasabi!",
            "There are over 100,000 Shinto shrines and 75,000 Buddhist temples in Japan.",
            "Nintendo, PlayStation, and many tech innovations originated in Japan.",
            "The Japanese calendar has 23 distinct seasons instead of just 4!",
            "Sumo wrestling has been practiced for over 1,500 years."
        ];

        function showRandomFact() {
            const randomIndex = Math.floor(Math.random() * facts.length);
            const fact = facts[randomIndex];
            document.getElementById('factText').textContent = fact;
            document.getElementById('factModal').style.display = 'block';
        }

        // Close modal when X is clicked
        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('factModal').style.display = 'none';
        });

        // Close modal when clicking outside of it
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('factModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Add stagger animation to cards on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.card, .cultural-item, .fact-box').forEach(el => {
            observer.observe(el);
        });

        // Add parallax effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            header.style.backgroundPosition = `0 ${window.pageYOffset * 0.5}px`;
        });

        // Update active nav link on scroll
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - sectionHeight / 3) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });

        // Handle gallery item clicks to update map
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const embedUrl = this.getAttribute('data-embed');
                const mapIframe = document.querySelector('#map iframe');
                if (mapIframe && embedUrl) {
                    mapIframe.src = embedUrl;
                    // Scroll to map section
                    document.querySelector('#map').scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

