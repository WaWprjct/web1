const menu_list = document.querySelector(".nav-menu");

document.querySelector("#menu").onclick = () => {
  menu_list.classList.toggle("active");
};

document.addEventListener("click", function (pop) {
  if (!menu.contains(pop.target) && !menu_list.contains(pop.target)) {
    menu_list.classList.remove("active");
  }
});

//searching

// Ambil elemen input dan tombol pencarian
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Fungsi untuk melakukan pencarian
function performSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  // Lakukan pencarian sesuai dengan logika Anda di sini
  // Misalnya, Anda dapat mencocokkan kata kunci pencarian dengan konten yang ada di halaman dan menampilkan hasilnya.

  // Contoh sederhana: Redirect ke halaman pencarian Google
  if (searchTerm !== "") {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      searchTerm
    )}`;
    window.location.href = googleSearchUrl;
  }
}

// Tambahkan event listener untuk tombol pencarian
searchButton.addEventListener("click", performSearch);

// Juga, Anda bisa menambahkan event listener untuk mencari dengan menekan tombol "Enter" di keyboard
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    performSearch();
  }
});
