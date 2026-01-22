document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("themeToggle");
    const body = document.body;

    if (!toggleBtn) return; // safety check

    toggleBtn.addEventListener("click", () => {
        const isLight = body.classList.toggle("dark");

        body.classList.toggle("light", !isLight);

        toggleBtn.textContent = isLight ? "Light Mode" : "Dark Mode";
    });
});

