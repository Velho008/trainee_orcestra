const menuBtn = document.getElementById("lateral-btn");
const sideMenu = document.getElementById("side-menu");
const closeMenu = document.getElementById("close-menu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("open");
});

// Inicializa o EmailJS com sua Public Key
(function() {
  emailjs.init({
    publicKey: "X-eyYEsQQP346O9wO"
  });
})();

const form = document.getElementById("contato-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Mostra um aviso simples enquanto envia
  alert("Enviando sua mensagem...");

  const serviceID = "service_ppx8oih";
  const templateID = "template_0fsh6d9";

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert("Sua mensagem foi encaminhada com sucesso! 🎉");
      form.reset();
    }, (error) => {
      console.error("Erro:", error);
      alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
    });
});