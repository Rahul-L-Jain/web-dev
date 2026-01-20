document.addEventListener("DOMContentLoaded", () => {

    /* Theme toggle (safe) */
    const toggleBtn = document.getElementById("themeToggle");
    const body = document.body;

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            body.classList.toggle("dark");
            body.classList.toggle("light");

            toggleBtn.textContent = body.classList.contains("dark")
                ? "☀️ Light Mode"
                : "🌙 Dark Mode";
        });
    }

    /* Flip card logic */
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });

});
