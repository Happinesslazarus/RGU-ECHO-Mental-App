// Form submission handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const button = form.querySelector('.login-button');
    const rightPanel = form.closest('.right-panel');
    
    // Add loading state
    rightPanel.classList.add('loading');
    button.textContent = '';
    
    // Simulate login process
    setTimeout(() => {
        rightPanel.classList.remove('loading');
        button.textContent = 'Sign In';
        
        // Show success message (in real app, redirect to dashboard)
        alert('Login successful! Redirecting to dashboard...');
    }, 2000);
});

// Password toggle functionality
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.password-toggle');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = 'Show';
    }
}

// Social login handlers
function socialLogin(provider) {
    alert(`Redirecting to ${provider} login...`);
}

// Input focus animations
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});

// Parallax effect for floating shapes
document.addEventListener('mousemove', function(e) {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 50;
        const y = (mouseY - 0.5) * speed * 50;
        
        shape.style.transform = `translate(${x}px, ${y}px)`;
    });
});