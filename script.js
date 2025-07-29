document.addEventListener("DOMContentLoaded",()=>{
    const thali = document.getElementById("thali");
    const dishname = document.getElementById("dishName");
    const timelineItems = document.querySelectorAll('.timeline-item');

    const dishes =[
        "Khichdi – A wholesome mix of lentils and rice.",
    "Idli & Sambar – Steamed comfort with a spicy twist.",
    "Masala Dosa – Crispy outside, flavorful inside.",
    "Chole Bhature – North Indian richness at its best.",
    "Dhokla – Soft, spongy, and tangy delight.",
    "Puran Poli – Sweet lentil stuffed Maharashtrian treat.",
    "Bisi Bele Bath – Karnataka’s spicy rice special.",
    "Baati Chokha – The heart of Bihar and UP cuisine."
    ];

    thali.addEventListener("click",()=>{
        thali.classList.remove("rotate");
        void thali.offsetWidth;
        thali.classList.add("rotate");
        setTimeout(()=>{
            const randomIndex = Math.floor(Math.random() * dishes.length);
      const randomDish = dishes[randomIndex];
      dishName.textContent = ` Surprise Dish: ${randomDish}`;
    }, 1000);
        });

       


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
     
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2 
});


timelineItems.forEach(item => {
  observer.observe(item);
});

    });


