document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        accordion.addEventListener("click", function () {
            // Toggle the active class for the clicked accordion button
            this.classList.toggle("active");

            // Get the corresponding course content
            const content = this.nextElementSibling;

            // Toggle the display of the course content
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

