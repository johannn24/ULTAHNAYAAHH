// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validasi username dan password
  if (username === "user" && password === "user") {
      Swal.fire({
          icon: "success",
          title: "Login berhasil!",
          text: "Selamat datang Nayaahh",
          showConfirmButton: false,
          timer: 1500,
      }).then(function () {
          window.location.href = "birthday.html"; // Arahkan ke halaman ulang tahun setelah login sukses
      });
  } else {
      Swal.fire({
          icon: "error",
          title: "Login gagal!",
          text: "Coba cek lagi username sama passwordnya ya:)",
          confirmButtonText: "Coba lagi",
          confirmButtonColor: "#ff7675",
      });
  }
}
