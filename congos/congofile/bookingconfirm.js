// Add a simple animation to the confetti image
document.addEventListener("DOMContentLoaded", function() {
    const confettiImg = document.querySelector("img");
    confettiImg.style.animation = "confetti 3s ease-in-out infinite";
  });
  
  // Add animation styles
  document.styleSheets[0].insertRule(`
    @keyframes confetti {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `);