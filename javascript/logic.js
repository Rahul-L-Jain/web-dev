document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("themeToggle");
    const body = document.body;

    if (!toggleBtn) return; // safety check

    toggleBtn.addEventListener("click", () => {
        const isDark = body.classList.toggle("dark");

        body.classList.toggle("light", !isDark);

        toggleBtn.textContent = isDark ? " Light Mode" : "Dark Mode";
    });
});

