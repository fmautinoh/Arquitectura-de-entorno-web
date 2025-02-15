document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
});

document.getElementById('readMoreBtn').addEventListener('click', function () {
    document.getElementById('modal').classList.remove('hidden');
});