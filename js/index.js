function search(e) {
  if (e.keyCode == 13) {
    var searchFor = document.getElementById("search-field").value;
    window.open("https://google.com/search?q=" + searchFor);
  }
}
