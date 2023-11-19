let button = document.querySelector("button");
button.addEventListener("click", Switch);

function Switch() {
    let styleElement = document.createElement('style');
    styleElement.innerHTML = `
        html::before {
            background: url(https://sex.nyan.xyz/api/v2/img) !important;
            background-size: cover;
            background-position: center;
        }
    `;
    document.head.appendChild(styleElement);
}