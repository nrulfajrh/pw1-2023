// buat fungsi
// ambil nilai username
// ambil nilai password
// kita cek apakah username dan password benar dengan yang kita tentukan nilainya
// jika benar berikan alert berhasi login dan arahkan ke file index
// jika password dan username kosong
// maka berikan alert password dan username kosong
// jika password dan username salah
// tampilkan username dan password salah
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "Nurul" && password == "Nurul123") {
        alert('You have successfully logged in');
        window.location="success.html"
        return false;
    }
    else if (username == "" || password=="") {
    alert("username/password cannot be blank")
    return false;
    }
    else{
        alert("username/password you entered is incorrect")
    }
}