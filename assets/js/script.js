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
      alert("Erro ao compartilhar: " + error.message);
    }
  } else {
    alert("O compartilhamento não é suportado neste navegador.");
  }
});