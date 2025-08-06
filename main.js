document.addEventListener('DOMContentLoaded', function() {
    
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
    }
    
    
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
    
    
    const typedText = document.getElementById('typed-text');
    const textArray = ["Web Developer", "Frontend Developer", "Soon AI Engineer"];
    let textArrayIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = textArray[textArrayIndex];
        
        if (isDeleting) {
            typedText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
            typingSpeed = 500; 
        }
        
        setTimeout(type, typingSpeed);
    }
    
    
    setTimeout(type, 1000);
    
  
    const viewProjectsBtn = document.getElementById('view-projects');
    const projectsSection = document.getElementById('projects');
    
    viewProjectsBtn.addEventListener('click', () => {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });
    
 
    const scrollTopBtn = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
   
    const logoutBtn = document.getElementById('logout-btn');
    
    logoutBtn.addEventListener('click', () => {
      
        alert('Logout functionality would be implemented here');
       
    });
    

    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-bar');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navBar.classList.toggle('active');
    });
    
    
    const navLinks = document.querySelectorAll('.nav-bar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navBar.classList.remove('active');
            }
        });
    });
    
   
    function applyThemeToAllPages() {
        const theme = body.getAttribute('data-theme') || 'light';
        const links = document.querySelectorAll('a[href^="http"]:not([href*="localhost"])');
        
        links.forEach(link => {
            const url = new URL(link.href);
            if (url.hostname === window.location.hostname) {
                url.searchParams.set('theme', theme);
                link.href = url.toString();
            }
        });
    }
    
    
    applyThemeToAllPages();
});
r
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
           
            console.log('Form submitted:', { name, email, message });
            
           
            alert('Thank you for your message! I will get back to you soon.');
            
           
            this.reset();
        });