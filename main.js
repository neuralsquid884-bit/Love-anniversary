        // ================= ENTER SITE FUNCTION (CLICK SPLASH TO START) =================
        let musicStarted = false;
        
        function enterSite() {
          if (musicStarted) return;
          musicStarted = true;
          
          // Start music
          const music = document.getElementById('bgMusic');
          music.volume = 0.6;
          music.play().catch(error => {
            console.log('Music autoplay prevented');
          });
          
          // Hide splash screen
          const splash = document.getElementById('splash');
          splash.classList.add('hidden');
          
          // Show navigation after splash fades
          setTimeout(() => {
            document.getElementById('navbar').classList.add('visible');
          }, 500);
        }
        
        // ================= FLOATING ANIMATIONS =================
        (function() {
          var container = document.getElementById('floatingContainer');
          var items = ['', '💕', '💗', '💖', '💓', '', '✨', '💫', '', '', '🌙', '', '', '🌸', '', '', '💎', '', ''];
          var colors = ['#f0c040', '#f8a4b8', '#4a7db7', '#fce4ec', '#ffe680'];
          
          for (var i = 0; i < 60; i++) {
            var item = document.createElement('div');
            item.className = 'float-item';
            var content = items[Math.floor(Math.random() * items.length)];
            
            if (content === 'shape') {
              var shapeType = Math.floor(Math.random() * 3);
              if (shapeType === 0) {
                item.innerHTML = '';
                item.style.width = '10px';
                item.style.height = '10px';
                item.style.background = colors[Math.floor(Math.random() * colors.length)];
                item.style.transform = 'rotate(45deg)';
                item.style.borderRadius = '2px 2px 0 0';
              } else if (shapeType === 1) {
                item.textContent = '';
              } else {
                item.innerHTML = '';
                item.style.width = '8px';
                item.style.height = '8px';
                item.style.background = colors[Math.floor(Math.random() * colors.length)];
                item.style.transform = 'rotate(45deg)';
              }
            } else {
              item.textContent = content;
              item.style.fontSize = (Math.random() * 18 + 10) + 'px';
            }
            
            item.style.left = Math.random() * 100 + '%';
            var duration = Math.random() * 12 + 8;
            var delay = Math.random() * 15;
            item.style.animationDuration = duration + 's';
            item.style.animationDelay = delay + 's';
            item.style.opacity = Math.random() * 0.5 + 0.5;
            container.appendChild(item);
          }
          
          for (var j = 0; j < 40; j++) {
            var star = document.createElement('div');
            star.className = 'twinkle-star';
            star.textContent = '✦';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.fontSize = (Math.random() * 12 + 6) + 'px';
            star.style.color = colors[Math.floor(Math.random() * colors.length)];
            star.style.animationDuration = (Math.random() * 3 + 2) + 's';
            star.style.animationDelay = (Math.random() * 3) + 's';
            container.appendChild(star);
          }
        })();
        
        // ================= SCROLL ANIMATIONS =================
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, {
          threshold: 0.12,
          rootMargin: '0px 0px -30px 0px'
        });
        
        document.querySelectorAll('.section-title, .section-subtitle, .divider-line, .letter-container, .reason-card, .timeline-item, .gallery-item, .wish-card').forEach(function(el) {
          observer.observe(el);
        });
        
        document.querySelectorAll('.reason-card').forEach(function(card, i) {
          card.style.transitionDelay = (i * 0.12) + 's';
        });
        
        document.querySelectorAll('.gallery-item').forEach(function(item, i) {
          item.style.transitionDelay = (i * 0.1) + 's';
        });
        
        document.querySelectorAll('.wish-card').forEach(function(card, i) {
          card.style.transitionDelay = (i * 0.15) + 's';
        });
        
        document.querySelectorAll('.timeline-item').forEach(function(item, i) {
          item.style.transitionDelay = (i * 0.2) + 's';
        });
        
        // ================= ACTIVE NAV LINK =================
        var sections = document.querySelectorAll('section');
        var navLinks = document.querySelectorAll('.nav-links a');
        
        window.addEventListener('scroll', function() {
          var current = '';
          sections.forEach(function(section) {
            var top = section.offsetTop - 150;
            if (window.pageYOffset >= top) {
              current = section.getAttribute('id');
            }
          });
          
          navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
              link.classList.add('active');
            }
          });
        });
        
        // ================= VOW CELEBRATION =================
        let celebrationTriggered = false;
        
        function triggerVowCelebration() {
          if (celebrationTriggered) return;
          celebrationTriggered = true;
          
          // Show the message below the button
          document.getElementById('vowMessage').classList.add('visible');
          
          const overlay = document.getElementById('celebrationOverlay');
          overlay.classList.add('active');
          
          const items = ['💕', '', '🌹', '✨', '', '', '💍', '💖', '🌟', ''];
          
          // Create 50 celebration items bursting from center
          for (let i = 0; i < 50; i++) {
            const item = document.createElement('div');
            item.className = 'celebration-item';
            item.textContent = items[Math.floor(Math.random() * items.length)];
            
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 450 + 80;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            const rot = Math.random() * 360;
            
            item.style.left = '50%';
            item.style.top = '50%';
            item.style.setProperty('--tx', `${tx}px`);
            item.style.setProperty('--ty', `${ty}px`);
            item.style.setProperty('--rot', `${rot}deg`);
            item.style.animationDelay = `${Math.random() * 0.4}s`;
            item.style.fontSize = `${Math.random() * 35 + 25}px`;
            
            overlay.appendChild(item);
          }
          
          // Clean up overlay after animation completes
          setTimeout(() => {
            overlay.classList.remove('active');
            overlay.innerHTML = '';
          }, 4000);
        }
        
        // ================= LIGHTBOX =================
        function openLightbox(element) {
          var img = element.querySelector('img');
          if (img && img.src) {
            document.getElementById('lightboxImg').src = img.src;
            document.getElementById('lightbox').classList.add('active');
          }
        }
        
        function closeLightbox() {
          document.getElementById('lightbox').classList.remove('active');
        }
        
        // ================= SMOOTH SCROLL =================
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
          anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        });