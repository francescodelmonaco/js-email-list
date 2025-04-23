const mailList = document.getElementById("mailList");
const btn = document.getElementById("btn");

function generator() {
    mailList.innerHTML = "";
    console.clear();

    for (let i = 0; i < 10; i++) {
        fetch("https://flynn.boolean.careers/exercises/api/random/mail", { method: "GET" })
            .then(response => response.json())

            .then(data => {
                console.log(data.response);
                mailList.innerHTML += `
                <li>
                    <div>
                        <span class="mail">${data.response}</span>

                        <button class="copy">
                            <i class="fa-regular fa-clipboard"></i>
                        </button>
                    </div>
                </li>
                `;

                const copyButtons = document.querySelectorAll(".copy");

                copyButtons.forEach(button => {
                    button.addEventListener("click", (event) => {
                        const email = event.target.closest("div").querySelector(".mail").textContent;
                        navigator.clipboard.writeText(email)
                            .then(() => {
                                // alert("Email copiata negli appunti!");
                            })
                            .catch(err => {
                                console.error("Errore durante la copia:", err);
                            });
                    });
                });
            })

            .catch(error => {
                console.error(error);
            });
    }
}

btn.addEventListener("click", () => {
    generator();
})