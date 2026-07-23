// ===================================
// Nittany Forestry Website Scripts
// ===================================


// Fade-in animation when sections appear

const sections = document.querySelectorAll(
    ".section, .quote, .card, .timeline div"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: .15
    }
);



sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
