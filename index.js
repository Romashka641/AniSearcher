const mess = document.getElementById("message");
const name = document.getElementById("Name");
const genreList = document.getElementById("Genre");

function searchAnime() {
  if (name.value != "" || genreList.value != "selectGenre") {
    let anime = name.value;
    let genre = getSelected(genreList);
    
    name.value = "";
    genreList.innerText = null;
    
    mess.innerText = "Подождите, результаты загрузаются";
    if (name.classList.contains("hide")) {
      animeGo.src = "https://animego.org/anime/filter/genres-is/apply";
    } else if (genreList.classList.contains("Genre") != true) {
    setTimeout(win, 3000, anime);
    }
  }
}


function win(anime) {
  window.open("https:/animego.org/search/all?q=" + anime, "_self");
}

function getSelected(list) {
  const options = list.options;
  const selectedOptions = Array.from(options).filter(option => option.selected);
  const selectedValues = selectedOptions.map(option => option.value);
  return selectedValues
}


function switched(switcher) {
  if (switcher.value != "Искать по фильтрам") {
    switcher.value = "Искать по фильтрам";
    name.classList.remove("hide");
    document.getElementById("nameLabel").classList.remove("hide");
    document.getElementById("genreLabel").classList.remove("Genre");
    genreList.classList.remove("Genre");
  } else if (switcher.value != "Искать по имени") {
    switcher.value = "Искать по имени";
    name.classList.add("hide");
    document.getElementById("nameLabel").classList.add("hide");
    document.getElementById("genreLabel").classList.add("Genre");
    genreList.classList.add("Genre");
  }
}

