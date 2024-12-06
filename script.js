document.getElementById("toggle-steps").addEventListener("click", function () {
    const stepsSection = document.querySelector(".steps");
    const button = document.getElementById("toggle-steps");

    if (stepsSection.style.display === "none") {
        stepsSection.style.display = "block";
        button.textContent = "Hide Steps";
    } else {
        stepsSection.style.display = "none";
        button.textContent = "Show Steps";
    }
});
