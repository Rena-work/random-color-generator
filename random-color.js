function GenerateNewColor() {
    const randomHexColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    let newColor = randomHexColor()

    document.documentElement.style.setProperty("--random-color", newColor);

    document.getElementById("text-content").textContent = newColor;

    console.log(newColor);
};