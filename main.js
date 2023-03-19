
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
      cover = document.getElementById("cover");  

//cargamos canciones
const loadSongs = () =>{
    
    songList.forEach((song, index)=>{
    /* console.log(song); */
        const li = document.createElement("li"),
              link = document.createElement("a");

        link.addEventListener("Click", ()=>loadSong(index));
        link.href = "#";
        link.textContent = song.title;
        li.appendChild(link);
        songs.appendChild(li);
    });
};
//desplegamos una cancion
const loadSong = (songIndex) => {

    audio.src = "./music/" + songList[songIndex].file;
    audio.play();
};

loadSong();






