const mailList = document.getElementById("mailList");

for (let i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail", { method: "GET" })
        .then(response => response.json())
        
        .then(data => {
            console.log(data.response);
            mailList.innerHTML += `<li>${data.response}</li>`;
        })
        
        .catch(error => {
            console.error(error);
        });
}