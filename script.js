document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 120
  });

  // Particles.js configuration
  
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 850
        }
      },
      "color": {
        "value": "#000000"
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

  
  // Stats are now static text, no animation needed

  
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
  emailjs.init('VjpnVTANz_58M_Q6Q'); // Replace with your actual User ID

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
          
          setTimeout(() => {
            successMsg.remove();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
          }, 3000);
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          submitButton.innerHTML = 'Error <i class="fas fa-exclamation-circle"></i>';
          
          // Show error message
          const errorMsg = document.createElement('div');
          errorMsg.className = 'form-error';
          errorMsg.textContent = 'Failed to send. Please try again or email me directly.';
          this.appendChild(errorMsg);
          
          setTimeout(() => {
            errorMsg.remove();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
          }, 3000);
        });
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

  
  
  
  // Intersection Observer for section animations
  const sections = document.querySelectorAll('.section');
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

 
 
 
  // Create education particles
  function createEducationParticles() {
    const orb = document.querySelector('.knowledge-orb');
    if (!orb) return;
    
    const particlesContainer = orb.querySelector('.particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.width = `${Math.random() * 6 + 4}px`;
      particle.style.height = particle.style.width;
      particle.style.top = `${Math.random() * 80 + 10}%`;
      particle.style.left = `${Math.random() * 80 + 10}%`;
      particle.style.animationDelay = `${Math.random() * 3}s`;
      particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
      particlesContainer.appendChild(particle);
    }
  }

  createEducationParticles();




  // Experience Section Animation
  const experienceCards = document.querySelectorAll('.experience-card');
  
  experienceCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
  });

  const experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  experienceCards.forEach(card => {
    experienceObserver.observe(card);
  });




  // Achievement Badge Animation
  const achievementBadges = document.querySelectorAll('.achievement-badge');
  
  achievementBadges.forEach(badge => {
    badge.style.transform = 'scale(0)';
    badge.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    
    const badgeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'scale(1) rotate(360deg)';
        }
      });
    }, { threshold: 0.5 });
    
    badgeObserver.observe(badge);
  });




  // Profile image hover effect
  const profileContainer = document.querySelector('.profile-image-container');
  if (profileContainer) {
    profileContainer.addEventListener('mouseenter', function() {
      this.querySelector('.profile-glow').style.animation = 'pulse-glow 1s infinite alternate';
    });

    profileContainer.addEventListener('mouseleave', function() {
      this.querySelector('.profile-glow').style.animation = 'pulse-glow 3s infinite alternate';
    });
  }



  // Project card hover effects
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.project-icon');
      if (icon) {
        icon.style.transform = 'rotate(15deg) scale(1.1)';
      }
    });

    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.project-icon');
      if (icon) {
        icon.style.transform = 'rotate(0) scale(1)';
      }
    });
  });



  // Achievement card hover effects
  const achievementCards = document.querySelectorAll('.achievement-card');
  achievementCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.achievement-icon');
      if (icon) {
        icon.style.animation = 'bounce 0.5s ease';
      }
    });
  });

  // Tooltip initialization
  const tooltipElements = document.querySelectorAll('[data-tooltip]');
  tooltipElements.forEach(el => {
    el.addEventListener('mouseenter', function() {
      const tooltip = document.createElement('span');
      tooltip.className = 'custom-tooltip';
      tooltip.textContent = this.getAttribute('data-tooltip');
      this.appendChild(tooltip);
      
      setTimeout(() => {
        tooltip.classList.add('show');
      }, 10);
    });

    el.addEventListener('mouseleave', function() {
      const tooltip = this.querySelector('.custom-tooltip');
      if (tooltip) {
        tooltip.remove();
      }
    });
  });
});

// Chatbot functionality
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotMessages = document.getElementById('chatbotMessages');

// Enhanced chatbot knowledge base with detailed responses
const chatbotResponses = {
  // Projects with detailed information and links
  'project': {
    response: `📊 My 3 Main Projects:

🎯 Smart Krishi Assistant
• Crop recommendation system using machine learning
• Deep learning model to predict crop disease using images
• Provides recommendations for the best crop to grow based on the soil type, weather conditions, and other factors
• Live Demo: https://smart-krishi-assistant.onrender.com/
• GitHub: https://github.com/Pavan-2445/Smart-Krishi-Assistant

📈 COVID-19 Predictive Analysis
• Interactive dashboard using Streamlit and Plotly
• COVID-19 data visualization and risk prediction
• Analyzes state-wise trends and provides dynamic risk classification
• Live Demo: https://predictive-analysis-of-covid-19-india.streamlit.app/
• GitHub: https://github.com/Pavan-2445/Predictive-analysis-of-Covid-19-India

👥 Heart Failure Risk Prediction
• Predictive model to predict the risk of heart failure based on the given features using machine learning algorithms
• Live Demo: https://heart-failure-risk-detection.onrender.com/
• GitHub: https://github.com/Pavan-2445/Heart-Failure-Risk-Detection`,
    keywords: ['project', 'projects', 'work', 'portfolio', 'showcase']
  },
  
  'smart krishi assistant': {
    response: `🤖 Smart Krishi Assistant

• Crop recommendation system using machine learning
• Deep learning model to predict crop disease using images
• Provides recommendations for the best crop to grow based on the soil type, weather conditions, and other factors
• Live Demo: https://smart-krishi-assistant.onrender.com/
• GitHub: https://github.com/Pavan-2445/Smart-Krishi-Assistant`,
    keywords: ['smart', 'krishi', 'assistant', 'crop', 'recommendation', 'machine', 'learning', 'deep', 'learning', 'ai', 'crop', 'disease', 'prediction', 'soil', 'weather', 'conditions', 'factors']
  },
  
  'covid': {
    response: `🦠 COVID-19 Predictive Analysis

• Interactive dashboard for COVID-19 data visualization
• Built with Streamlit and Plotly
• Provides risk prediction and state-wise trend analysis
• Dynamic risk classification system
• Tech Stack: Python, Pandas, Scikit-learn, Streamlit, Plotly
• Live Demo: https://predictive-analysis-of-covid-19-india.streamlit.app/
• GitHub: https://github.com/Pavan-2445/Predictive-analysis-of-Covid-19-India`,
    keywords: ['covid', 'covid-19', 'predictive', 'analysis', 'dashboard', 'streamlit']
  },
  
  'customer': {
    response: `👥 Heart Failure Risk Prediction

• Predictive model to predict the risk of heart failure based on the given features using machine learning algorithms
• Tech Stack: Python, Scikit-learn, Flask, HTML, CSS, JavaScript
• Live Demo: https://heart-failure-risk-detection.onrender.com/
• GitHub: https://github.com/Pavan-2445/Heart-Failure-Risk-Detection`,
    keywords: ['heart', 'failure', 'risk', 'prediction', 'machine', 'learning', 'algorithms']
  },
  
  // Skills
  'skill': {
    response: `💻 My Technical Skills

• Programming Languages: Python, Java, JavaScript, SQL, R
• Web Technologies: HTML5, CSS3, JavaScript, Flask
• Data Science: Pandas, NumPy, Scikit-learn, TensorFlow, PowerBI
• Machine Learning: Supervised/Unsupervised Learning, Neural Networks, NLP
• Tools & Platforms: Git, AWS, Streamlit, Jupyter Notebooks, PyTorch, Torchvision, Pillow, Hugging Face`,
    keywords: ['skill', 'skills', 'technical', 'programming', 'technology', 'tools']
  },
  
  'python': {
    response: `🐍 Python Expertise

• Data Science & Analysis
• Machine Learning & AI
• Web Development
• Automation & Scripting
• Competitive Programming
• Used extensively in all projects`,
    keywords: ['python', 'programming', 'language']
  },
  
  'data': {
    response: `📊 Data Science Specialization

• Data Analysis & Visualization
• Statistical Modeling
• Predictive Analytics
• Machine Learning Implementation
• Big Data Processing
• Business Intelligence`,
    keywords: ['data', 'data science', 'analysis', 'analytics']
  },
  
  // Education
  'education': {
    response: `🎓 Educational Background

Bachelor of Technology (2022 - 2026)
• Field: Artificial Intelligence & Data Science
• Institution: Vasireddy Venkatadri Institute of Technology, Nambur
• Current Year: Final Year
• CGPA: 8.63/10

Intermediate (2020 - 2022)
• Field: MPC (Maths, Physics, Chemistry)
• Institution: Vignana Bharathi Junior College, Chirala
• Percentage: 96.5%

Secondary School (2019 - 2020)
• Institution: Vijaya Lakshmi High School, Chirala
• Percentage: 100%`,
    keywords: ['education', 'degree', 'university', 'college', 'school', 'academic', 'study']
  },
  
  // Experience
  'experience': {
    response: `💼 Professional Experience

AI & ML Virtual Intern - Amazon AWS (Jan 2025 - Mar 2025)
• Processed 500 million+ rows of data using AWS Glue and Python
• Improved query performance by 40% with Redshift optimization
• Reduced manual intervention by 80 hours/month

Data Science Virtual Intern - Altair (Oct 2024 - Dec 2024)
• Developed predictive models with 88% accuracy
• Created interactive dashboards for data insights
• Implemented time-series forecasting solutions

Data Engineering Virtual Intern - AWS (Jan 2024 - Mar 2024)
• Built scalable data pipelines processing 1TB+ daily datasets
• Optimized Athena queries reducing costs by 35%
• Automated data quality checks reducing error rates by 60%`,
    keywords: ['experience', 'internship', 'job', 'career', 'professional', 'employment']
  },
  
  // Achievements
  'achievement': {
    response: `🏆 Achievements & Certifications

HackerRank Python Problem Solving - 4★ Rating
• Ranked among top Python programmers
• Efficient algorithm solutions and clean code practices
• Strong problem-solving skills

Academic Excellence
• 100% in Secondary School
• 96.5% in Intermediate
• 8.63 CGPA in B.Tech (Current)`,
    keywords: ['achievement', 'achievements', 'certification', 'award', 'recognition', 'hackerrank', 'rating']
  },
  
  // Contact
  'contact': {
    response: `📞 Contact Information

• Email: ksvnspavankumar.24@gmail.com
• LinkedIn: https://linkedin.com/in/pavankumarkaravadi24
• GitHub: https://github.com/Pavan-2445
• Location: Chirala, Andhra Pradesh, India

Feel free to reach out for collaborations, opportunities, or just to connect!`,
    keywords: ['contact', 'email', 'linkedin', 'github', 'reach', 'connect', 'get in touch']
  },
  
  // Resume
  'resume': {
    response: `📄 Resume Download

You can download my resume from:
• Google Drive: https://drive.google.com/file/d/1_U8nlP1FZ2UfAXKYWc67u3KHYamzaF9K/view?usp=drivesdk

The resume includes my complete educational background, work experience, projects, skills, and achievements.`,
    keywords: ['resume', 'cv', 'download', 'file', 'document']
  },
  
  // General
  'hello': {
    response: `👋 Hello! I'm your portfolio assistant.

I can help you learn about:
• 📊 My projects and their live demos
• 💻 Technical skills and expertise
• 🎓 Education and academic background
• 💼 Work experience and internships
• 🏆 Achievements and certifications
• 📞 Contact information and resume

Just ask me anything!`,
    keywords: ['hello', 'hi', 'hey', 'greeting']
  },
  
  'help': {
    response: `❓ How can I help you?

I can provide detailed information about:
• Projects: With live demo links and GitHub repositories
• Skills: Technical expertise and tools
• Education: Academic background and achievements
• Experience: Internships and work history
• Contact: Email, LinkedIn, and other details
• Resume: Download link for my CV

Try asking: "Tell me about your projects" or "What's your experience?"`,
    keywords: ['help', 'assist', 'support', 'guide']
  },
  
  'about': {
    response: `👨‍💻 About Me

I'm Karavadi Pavan Kumar, a passionate AI & Data Science student currently in my final year of B.Tech at Vasireddy Venkatadri Institute of Technology.

What I do:
• Turn real-world problems into smart solutions
• Build predictive models and AI systems
• Create user-friendly interfaces and dashboards
• Analyze data to extract meaningful insights
• I enjoy optimizing my work through prompt engineering and AI tools, allowing me to deliver smarter and faster solutions with ease.

My passion: Data science, machine learning, and creating impactful technology solutions that make a difference.`,
    keywords: ['about', 'who', 'what', 'background', 'introduction', 'introduce', 'yourself']
  }
};

// Toggle chatbot
chatbotToggle.addEventListener('click', () => {
  chatbotWindow.classList.add('active');
  chatbotToggle.querySelector('.notification-dot').style.display = 'none';
});

chatbotClose.addEventListener('click', () => {
  chatbotWindow.classList.remove('active');
});

// Send message function
function sendMessage() {
  const message = chatbotInput.value.trim();
  if (message === '') return;
  
  // Add user message
  addMessage(message, 'user');
  chatbotInput.value = '';
  
  // Get bot response
  setTimeout(() => {
    const response = getBotResponse(message);
    addMessage(response, 'bot');
  }, 500);
}

// Add message to chat
function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  
  // Convert URLs to clickable links
  const linkifiedText = text.replace(
    /(https?:\/\/[^\s]+)/g, 
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  
  // Convert email addresses to mailto links
  const emailLinkedText = linkifiedText.replace(
    /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
    '<a href="mailto:$1">$1</a>'
  );
  
  contentDiv.innerHTML = emailLinkedText;
  
  messageDiv.appendChild(contentDiv);
  chatbotMessages.appendChild(messageDiv);
  
  // Scroll to bottom
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Get bot response with semantic similarity and combined queries
function getBotResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  // Check for combined queries (education AND experience, etc.)
  const combinedQueries = {
    'education and experience': ['education', 'experience'],
    'education experience': ['education', 'experience'],
    'projects and skills': ['project', 'skill'],
    'projects skills': ['project', 'skill'],
    'skills and projects': ['skill', 'project'],
    'experience and projects': ['experience', 'project'],
    'education and projects': ['education', 'project'],
    'about and contact': ['about', 'contact'],
    'background and experience': ['about', 'experience'],
    'resume and contact': ['resume', 'contact']
  };
  
  // Check for combined queries first
  for (const [query, topics] of Object.entries(combinedQueries)) {
    if (lowerMessage.includes(query)) {
      let combinedResponse = `📋 **Combined Information**\n\n`;
      topics.forEach(topic => {
        if (chatbotResponses[topic]) {
          combinedResponse += `${chatbotResponses[topic].response}\n\n---\n\n`;
        }
      });
      return combinedResponse;
    }
  }
  
  // Check for individual topics with semantic similarity
  const matchedTopics = [];
  const similarityScores = {};
  
  for (const [key, data] of Object.entries(chatbotResponses)) {
    let score = 0;
    
    // Check keyword matches
    data.keywords.forEach(keyword => {
      if (lowerMessage.includes(keyword)) {
        score += 2; // Higher weight for keyword matches
      }
    });
    
    // Check for partial word matches
    data.keywords.forEach(keyword => {
      const words = keyword.split(' ');
      words.forEach(word => {
        if (lowerMessage.includes(word) && word.length > 2) {
          score += 1;
        }
      });
    });
    
    // Check for exact key matches
    if (lowerMessage.includes(key)) {
      score += 3; // Highest weight for exact key matches
    }
    
    if (score > 0) {
      similarityScores[key] = score;
      matchedTopics.push(key);
    }
  }
  
  // If multiple topics matched, provide combined response
  if (matchedTopics.length > 1) {
    let combinedResponse = `📋 **Here's what I found for you:**\n\n`;
    matchedTopics.forEach(topic => {
      combinedResponse += `${chatbotResponses[topic].response}\n\n---\n\n`;
    });
    return combinedResponse;
  }
  
  // If single topic matched, return its response
  if (matchedTopics.length === 1) {
    return chatbotResponses[matchedTopics[0]].response;
  }
  
  // Default response with suggestions
  return `🤔 I'm not sure about that specific question. 

Here are some things you can ask me about:
• 📊 Projects: "Tell me about your projects" or "Show me your work"
• 💻 Skills: "What are your technical skills?" or "Tell me about Python"
• 🎓 Education: "What's your educational background?"
• 💼 Experience: "Tell me about your work experience"
• 🏆 Achievements: "What are your achievements?"
• 📞 Contact: "How can I contact you?" or "What's your email?"
• 📄 Resume: "Can I see your resume?"

Try asking in a different way!`;
}

// Event listeners
chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Utility function for detecting mobile devices
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
