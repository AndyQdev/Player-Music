
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

const songs = document.getElementById("songs")
console.log(songs);

const loadSong = () =>{
    
    songList.forEach(song=>{
    /* console.log(song); */
        const li = document.createElement("li"),
              link = document.createElement("a");

        link.textContent = song.title;
        li.appendChild(link);
        songs.appendChild(li);
    });
};

loadSong();






