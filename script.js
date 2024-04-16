document.addEventListener('DOMContentLoaded', function() {
    const sky = document.body;
  
    function createStars() {
      // Clear existing stars before adding new ones
      const numberOfStars = 200; // Number of stars
  
      for (let i = 0; i < numberOfStars; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * window.innerHeight * .75}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.animationDuration = `${(Math.random() * 20 + 1)}s`; // Randomize animation speed for more natural effect
        let size = Math.random() * 3 + 2; // Bigger stars
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
  
        sky.appendChild(star);
      }
    }
  
    // Create stars initially
    createStars();
  
    // Re-create stars on window resize
    window.onresize = createStars;
  });
  

document.addEventListener('keydown', function() {
    if (event.key === "h") {
        const container = document.getElementById('heartsContainer');
        container.innerHTML = ''; // Clear previous hearts
    
        for (let i = 0; i < 30; i++) { // Create 30 hearts
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${Math.random() * 100}%`; // Random horizontal start
            heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Randomize fall duration
            heart.style.animationDelay = `${Math.random() * 0.5}s`; // Stagger the start times slightly
            container.appendChild(heart);
        }
    }

    if (event.key === "r") {
        const planet = document.querySelector('.planet');
        planet.classList.toggle('planet-red-overlay');
    }

    // Toggle Northern Lights and moon visibility
    const northernLights = document.querySelector('.northern-lights');
    if (event.key === "s") {
        console.log(northernLights.style.opacity);
        if (northernLights.style.opacity === "" || northernLights.style.opacity === "0") {
            northernLights.style.opacity = "1";
        
        } else {
            northernLights.style.opacity = "0";
            
        }
    }

});
