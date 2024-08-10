const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = container.querySelector("#qr-form input");
const qrCodeImg = container.querySelector("#qr-code img");

function generateQrCode() {
  const inputValue = qrCodeInput.value;
  if (!inputValue) return;

  qrCodeBtn.innerText = "Gerando código...";
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
  
  qrCodeImg.onload = () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código criado!";
  };
}

qrCodeBtn.addEventListener("click", generateQrCode);
qrCodeInput.addEventListener("keydown", (e) => e.code === "Enter" && generateQrCode());

qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});
