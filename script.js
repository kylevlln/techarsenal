/* ==========================================================================
   WORKSPACE // JAVASCRIPT
   ========================================================================== */

// --- 1. BOOT SEQUENCE ---
function initBootSequence() {
    const bootScreen = document.getElementById('elegant-boot');
    const bgMusic = document.getElementById('bg-music');
    const glitchWrapper = document.querySelector('.glitch-wrapper');
    const clickToStart = document.querySelector('.click-to-start');
    const bootGif = document.querySelector('.boot-gif');
    const scrollIndicator = document.getElementById('scroll-indicator');

    let hasInitialized = false;

    bootScreen.addEventListener('click', () => {
        if (hasInitialized) return;
        hasInitialized = true;

        // Hide click text immediately
        if (clickToStart) clickToStart.style.opacity = '0';

        // Play music at soft 5% volume
        if (bgMusic) {
            bgMusic.volume = 0.05;
            bgMusic.play().catch(e => console.log("Audio play failed:", e));
        }

        // 1. Reveal HONORABLE as soon as music starts
        if (glitchWrapper) {
            glitchWrapper.style.transition = 'transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease';
            glitchWrapper.style.transform = 'scale(1)';
            glitchWrapper.style.opacity = '1';
        }

        // Wait 2.5 seconds to let the music intro and "HONORABLE" play
        setTimeout(() => {
            // 2. CRAZY OUTRO SEQUENCE
            if (glitchWrapper) {
                glitchWrapper.style.transition = 'transform 0.8s cubic-bezier(0.86, 0, 0.07, 1), opacity 0.6s ease';
                glitchWrapper.style.transform = 'scale(4)';
                glitchWrapper.style.opacity = '0';
            }

            if (bootGif) {
                bootGif.style.animation = 'none';
                bootGif.style.transition = 'all 1.2s cubic-bezier(0.86, 0, 0.07, 1)';
                bootGif.style.transform = 'scale(4)';
                bootGif.style.filter = 'saturate(4) contrast(3) blur(20px)';
                bootGif.style.opacity = '0';
            }

            // 3. Fade out boot screen and load site
            setTimeout(() => {
                bootScreen.style.opacity = '0';

                setTimeout(() => {
                    bootScreen.remove();
                    const heroSection = document.getElementById('hero');
                    if (heroSection) heroSection.classList.add('is-visible');

                    // Show scroll indicator, then auto-hide when user scrolls past hero
                    if (scrollIndicator) {
                        scrollIndicator.style.opacity = '0';
                        scrollIndicator.style.transition = 'opacity 1s ease 0.5s';
                        void scrollIndicator.offsetWidth;
                        scrollIndicator.style.opacity = '1';

                        // Hide indicator once user scrolls past hero section
                        const heroSection = document.getElementById('hero');
                        const onScroll = () => {
                            if (!heroSection) return;
                            const heroBottom = heroSection.getBoundingClientRect().bottom;
                            if (heroBottom < window.innerHeight * 0.4) {
                                scrollIndicator.style.transition = 'opacity 0.4s ease';
                                scrollIndicator.style.opacity = '0';
                                window.removeEventListener('scroll', onScroll);
                            }
                        };
                        window.addEventListener('scroll', onScroll, { passive: true });
                    }

                    initScrollAnimations();
                    initMusicLoopPopup();
                }, 1000);
            }, 800);

        }, 2500);
    });
}

// --- 2. MUSIC LOOP — HONORABLE POPUP ---
function initMusicLoopPopup() {
    const bgMusic = document.getElementById('bg-music');
    if (!bgMusic) return;

    // Manually handle looping so we can intercept the restart
    bgMusic.addEventListener('ended', () => {
        showHonorablePopup();

        // Restart music after a short flash (1s into popup)
        setTimeout(() => {
            bgMusic.currentTime = 0;
            bgMusic.volume = 0.05;
            bgMusic.play().catch(e => console.log("Loop play failed:", e));
        }, 1000);
    });
}

function showHonorablePopup() {
    // Create an overlay that flashes the HONORABLE text
    const overlay = document.createElement('div');
    overlay.id = 'honorable-popup';
    overlay.innerHTML = `<h2 class="boot-text" data-text="HONORABLE">HONORABLE</h2>`;
    overlay.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.92);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        opacity: 0;
        transition: opacity 0.5s ease;
        pointer-events: none;
    `;
    document.body.appendChild(overlay);

    // Fade in
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            overlay.style.opacity = '1';
        });
    });

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 600);
    }, 3000);
}

// --- 3. SMOOTH SCROLL ---
function initSmoothScroll() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                e.preventDefault();
                window.scrollTo({
                    top: targetEl.getBoundingClientRect().top + window.pageYOffset - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// --- 4. SCROLL ANIMATIONS ---
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-section').forEach(s => observer.observe(s));
}

// --- 5. MUTE EASTER EGG ---
function initMuteEasterEgg() {
    const muteBtn = document.getElementById('mute-btn');
    const bgMusic = document.getElementById('bg-music');
    const hoverText = document.getElementById('brand-hover-text');
    if (!muteBtn || !bgMusic || !hoverText) return;

    muteBtn.addEventListener('click', () => {
        bgMusic.muted = !bgMusic.muted;

        if (bgMusic.muted) {
            hoverText.textContent = 'Unmute ▶';
            muteBtn.classList.add('is-muted');
        } else {
            hoverText.textContent = 'Mute Music';
            muteBtn.classList.remove('is-muted');
        }
    });
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initBootSequence();
    initMuteEasterEgg();
});