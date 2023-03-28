
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

const play = document.getElementById("play"),
      prev = document.getElementById("prev"),
      next = document.getElementById("next");

const progress = document.getElementById("progress"),
      progressContainer = document.getElementById("progress-container");   

let actualSong = null; //evita que la cancion se repita cuando le da click

//cargamos canciones
const loadSongs = () =>{
    
    songList.forEach((song, index)=>{
    
        const li = document.createElement("li"),
              link = document.createElement("a");

        link.addEventListener("click", ()=>{
            classActive(index);
            loadSong(index)
        });
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
        playSong();
        classActive(songIndex);
    }
};

const cargarTitulo = (songIndex) => titulo.textContent = songList[songIndex].title;
const cargarCover = (songIndex)  => cover.src = "assets/imgs/" + songList[songIndex].cover; 

const classActive = (active) => {
    const links = document.querySelectorAll("a");
    links.forEach((link, index) =>( index === active ) ? link.className = "active": link.className = "");
};

const playSong = () => {
    audio.play();
    updateControls();
};

const pauseSong = () => {
    audio.pause();
    updateControls();
};

const updateControls = () => {
    if (audio.paused){
        play.classList.add("fa-play");
        play.classList.remove("fa-pause");
    } else {
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
    }
};

play.addEventListener ("click", () => (audio.paused) ? playSong(): pauseSong());

const nextSong = () => (actualSong < songList.length -1) ? loadSong(actualSong + 1): loadSong(0);

const prevSong = () => (actualSong > 0) ? loadSong(actualSong - 1): loadSong(songList.length -1);

const updateProgress = (duration, currentTime) => progress.style.width = ((currentTime / duration)*100) + "%";  //pasamos la duracion de la cancion, y el tiempo real que se va reproduciendo

const SetProgress = (event) => {
    const TotalWidth = progressContainer.offsetWidth; //total de px de la barra de progress
    const progressWidth = event.offsetX; //en que px dio click
    audio.currentTime = ( progressWidth / TotalWidth ) * audio.duration;   
};


next.addEventListener("click", () => nextSong());
prev.addEventListener("click", () => prevSong());
audio.addEventListener("timeupdate", () => updateProgress(audio.duration, audio.currentTime));
progressContainer.addEventListener("click",(event) => SetProgress (event));
audio.addEventListener("ended", () => nextSong());

loadSongs();







