
const songList = [
    {
        title: "Acoustic Breeze",
        file: "acousti.mp3",
        cover: "1.jpeg"
    },
    {
        title: "A New Beginning",
        file: "anewbegin.mp3",
        cover: "2.jpeg"
    },
    {
        title: "Creative Minds",
        file: "creativemind.mp3",
        cover: "3.jpeg"
    },
];

const songs = document.getElementById("songs"),
      audio = document.getElementById("audio"),
      titulo = document.getElementById("title"),
      cover = document.getElementById("cover");

let actualSong = null; //evita que la cancion se repita cuando le da click
/* console.log(songs, audio, cover); */

//cargamos canciones
const loadSongs = () =>{
    
    songList.forEach((song, index)=>{
    /* console.log(song); */
        const li = document.createElement("li"),
              link = document.createElement("a");

        link.addEventListener("click", ()=>loadSong(index));
        link.href = "#";
        link.textContent = song.title;
        li.appendChild(link);
        songs.appendChild(li);
    });
};
//desplegamos una cancion
const loadSong = (songIndex) => {
    if (actualSong !== songIndex) {
        actualSong = songIndex;
        audio.src = "assets/music/" + songList[songIndex].file;
        cargarTitulo(songIndex);
        cargarCover(songIndex);
        audio.play();
    }
};

const cargarTitulo = (songIndex) => {
    titulo.textContent = songList[songIndex].title;
};

const cargarCover = (songIndex) => {
    cover.src = "assets/imgs/" + songList[songIndex].cover; 
}

loadSongs();






