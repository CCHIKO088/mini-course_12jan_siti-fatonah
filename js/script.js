// Point 4: Welcome Message
function welcome() {
    let name = prompt("Masukkan nama kamu:", "Harfi");
    if (name) {
        document.getElementById("user-name").innerText = name;
    }
}
window.onload = welcome;

// Point 5: Form Submit & Validation
document.getElementById('message-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('input-nama').value;
    const tgl = document.getElementById('input-tgl').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById('input-pesan').value;

    document.getElementById('current-time').innerText = "Current time : " + new Date();
    document.getElementById('res-nama').innerText = nama;
    document.getElementById('res-tgl').innerText = tgl;
    document.getElementById('res-gender').innerText = gender;
    document.getElementById('res-pesan').innerText = pesan;
});