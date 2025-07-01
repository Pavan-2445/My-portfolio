document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });

  // Particles.js configuration
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#00FFF7"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#00FFF7",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  // Typing effect for hero text
  const heroTitle = document.querySelector('.typing-text');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
  }

  // Animate stats counting
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    
    let current = 0;
    const counter = setInterval(() => {
      current += step;
      if (current >= target) {
        clearInterval(counter);
        stat.textContent = target;
      } else {
        stat.textContent = Math.floor(current);
      }
    }, 16);
  });

  // Back to top button
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  });

  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Initialize EmailJS
  (function() {
    emailjs.init('VjpnVTANz_58M_Q6Q'); // Replace with your actual User ID
  })();

  // EmailJS form submission handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      
      // Show loading state
      submitButton.innerHTML = 'Sending <i class="fas fa-spinner fa-spin"></i>';
      submitButton.disabled = true;
      
      // Send email using EmailJS
      emailjs.sendForm('service_5vrj629', 'template_3xnb77q', this)
        .then(() => {
          submitButton.innerHTML = 'Sent! <i class="fas fa-check"></i>';
          this.reset();
          
          // Show success message
          const successMsg = document.createElement('div');
          successMsg.className = 'form-success';
          successMsg.textContent = 'Message sent successfully!';
          this.appendChild(successMsg);
          
          setTimeout(() => successMsg.remove(), 5000);
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          submitButton.innerHTML = 'Error <i class="fas fa-exclamation-circle"></i>';
          
          // Show error message
          const errorMsg = document.createElement('div');
          errorMsg.className = 'form-error';
          errorMsg.textContent = 'Failed to send. Please try again or email me directly.';
          this.appendChild(errorMsg);
          
          setTimeout(() => errorMsg.remove(), 5000);
        })
        .finally(() => {
          setTimeout(() => {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
          }, 3000);
        });
        emailjs.send('service_k5x9mjl', 'template_3xnb77q', {
        name: "Test Name",
        email: "test@example.com",
        message: "This is a test message"
        })
        .then(console.log)
        .catch(console.error);
    });
  }

  // Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(10, 10, 15, 0.95)';
      navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
      navbar.style.background = 'rgba(10, 10, 15, 0.8)';
      navbar.style.boxShadow = 'none';
    }
  });
});

// Add this to your existing AOS initialization
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  // Add this new setting:
  offset: 120 // Triggers animations a bit earlier
});

// Add particle animation for education section
function createEducationParticles() {
  const orb = document.querySelector('.knowledge-orb');
  if (!orb) return;
  
  for (let i = 0; i < 5; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = `${Math.random() * 6 + 4}px`;
    particle.style.height = particle.style.width;
    particle.style.top = `${Math.random() * 80 + 10}%`;
    particle.style.left = `${Math.random() * 80 + 10}%`;
    particle.style.animationDelay = `${Math.random() * 3}s`;
    particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
    orb.querySelector('.particles').appendChild(particle);
  }
}

// Call this function after DOM loads
document.addEventListener('DOMContentLoaded', function() {
  createEducationParticles();
});

document.addEventListener('DOMContentLoaded', function() {
  // Experience Section Animation
  const experienceCards = document.querySelectorAll('.experience-card');
  
  // Animate experience cards on scroll
  const experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  experienceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    experienceObserver.observe(card);
  });

  // Achievement Badge Animation
  const achievementBadge = document.querySelector('.achievement-badge');
  if (achievementBadge) {
    achievementBadge.style.transform = 'scale(0)';
    achievementBadge.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    
    const achievementObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          achievementBadge.style.transform = 'scale(1) rotate(360deg)';
          
          // Pulsing animation
          setInterval(() => {
            achievementBadge.style.boxShadow = '0 0 0 0 rgba(245, 127, 23, 0.7)';
            setTimeout(() => {
              achievementBadge.style.boxShadow = '0 0 0 10px rgba(245, 127, 23, 0)';
            }, 500);
          }, 2000);
        }
      });
    }, { threshold: 0.5 });
    
    achievementObserver.observe(achievementBadge);
  }

  // Tech Stack Hover Effects
  const techStackItems = document.querySelectorAll('.tech-stack span');
  techStackItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });

  // Experience Card Click Effect
  experienceCards.forEach(card => {
    card.addEventListener('click', function() {
      this.style.transform = 'translateY(-5px) scale(1.02)';
      setTimeout(() => {
        this.style.transform = 'translateY(-5px)';
      }, 200);
    });
  });
});

document.querySelector('.profile-image-container').addEventListener('mouseenter', function() {
  this.querySelector('.profile-glow').style.animation = 'pulse-glow 1s infinite alternate';
});

document.querySelector('.profile-image-container').addEventListener('mouseleave', function() {
  this.querySelector('.profile-glow').style.animation = 'pulse-glow 3s infinite alternate';
});