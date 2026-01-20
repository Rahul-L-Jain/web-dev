document.addEventListener("DOMContentLoaded", () => {
    const tb= document.getElementById("themeToggle");
    const body = document.body;

    tb.addEventListener("click", () => {
        if (body.classList.contains("light")) {
            body.classList.remove("light");
            body.classList.add("dark");
            tb.textContent = "☀️ Light Mode";
        } else {
            body.classList.remove("dark");
            body.classList.add("light");
            tb.textContent = "🌙 Dark Mode";
        }
    });
});
