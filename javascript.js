function HitungDiskon() {
  const harga = document.getElementById("harga").value;
  const diskon = document.getElementById("diskon").value;

  if (isNaN(harga) || isNaN(diskon)) {
    document.getElementById("hasil").innerText =
      "masukan harga diskon yang valid";
    return;
  }
  const potongan = (diskon / 100) * harga;
  const total = harga - potongan;

  document.getElementById(
    "hasil"
  ).innerText = `harga setelah diskon: Rp. ${total.toLocaleString()}`;
}
function ResetInput() {
  document.getElementById("harga").value = "";
  document.getElementById("diskon").value = "";
  document.getElementById("hasil").innerText = "";
}
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-GB"); //format 24 jam
  document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000);
updateClock(); //panggil permtana kali
