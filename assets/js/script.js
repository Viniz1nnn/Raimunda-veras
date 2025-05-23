//compartilhar página

const shareButton = document.getElementById("shareBtn");

shareButton.addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: document.title,
        text: "Minha página de contatos!",
        url: window.location.href,
      });
    } catch (error) {
      alert(
        `Desculpe, não foi possível compartilhar: ${error.message}. Tente novamente!`
      );
    }
  } else {
    alert("O compartilhamento não é suportado neste navegador.");
    window.open(
      `https://api.whatsapp.com/send?text=Confira%20minha%20página! ${window.location.href}`,
      "_blank"
    );
  }
});
