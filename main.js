const mailList = document.getElementById("mailList");
const btn = document.getElementById("btn");
const copyBtn = document.querySelectorAll(".copy");

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
            })

            .catch(error => {
                console.error(error);
            });
    }
}

btn.addEventListener("click", () => {
    generator();
})