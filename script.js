let songCounter = 0;
let correctAnswers = 0;
let availableSongs = [
    { id: 1, title: "HUMBLE.", artist: "Kendrick Lamar", url: "songs/HUMBLE..mp3", youtube_url: "https://www.youtube.com/watch?v=ov4WobPqoSA" },
    { id: 2, title: "tv off", artist: "Kendrick Lamar", url: "songs/Kendrick Lamar - tv off (Official Audio).mp3", youtube_url: "https://www.youtube.com/watch?v=U8F5G5wR1mk" },
    { id: 3, title: "Not Like Us", artist: "Kendrick Lamar", url: "songs/Not Like Us.mp3", youtube_url: "https://www.youtube.com/watch?v=T6eK-2OQtew" },
    { id: 4, title: "squabble up", artist: "Kendrick Lamar", url: "songs/squabble up.mp3", youtube_url: "https://www.youtube.com/watch?v=7QyDL3zQ-2I" },
    { id: 5, title: "Swimming Pools (Drank)", artist: "Kendrick Lamar", url: "songs/Swimming Pools (Drank) (Extended Version).mp3", youtube_url: "https://www.youtube.com/watch?v=UEJTaReI1ls" },
	{ id: 6, title: "SEE YOU AGAIN featuring Kali Uchis", artist: "Tyler, The Creator", url: "songs/SEE YOU AGAIN featuring Kali Uchis.mp3", youtube_url: "https://www.youtube.com/watch?v=TGgcC5xg9YI" },
	{ id: 7, title: "EARFQUAKE", artist: "Tyler, The Creator", url: "songs/Tyler, The Creator - Earfquake.mp3", youtube_url: "https://www.youtube.com/watch?v=HmAsUQEFYGI" },
    { id: 8, title: "Sky", artist: "Playboi Carti", url: "songs/Playboi Carti - Sky [Official Video].mp3", youtube_url: "https://www.youtube.com/watch?v=KnumAWWWgUE" },
    { id: 9, title: "2024", artist: "Playboi Carti", url: "songs/＂2024＂ prod. ojivolta, earlonthebeat, and Kanye West.mp3", youtube_url: "https://www.youtube.com/watch?v=YG3EhWlBaoI" },
    { id: 10, title: "Magnolia", artist: "Playboi Carti", url: "songs/Playboi Carti - Magnolia (Audio).mp3", youtube_url: "https://www.youtube.com/watch?v=RLYksQvr5zY" },
    { id: 11, title: "EVILJ0RDAN", artist: "Playboi Carti", url: "Playboi Carti - EVILJ0RDAN  (official music video).mp3", youtube_url: "https://www.youtube.com/watch?v=LWEpqhgUEpg" },
    { id: 12, title: "Timeless", artist: "Playboi Carti", url: "songs/The Weeknd, Playboi Carti - Timeless.mp3", youtube_url: "https://www.youtube.com/watch?v=5EpyN_6dqyk" },
    { id: 13, title: "Flashing Lights", artist: "Kanye West", url: "songs/Flashing Lights.mp3", youtube_url: "https://www.youtube.com/watch?v=ZAz3rnLGthg" },
    { id: 14, title: "Stronger", artist: "Kanye West", url: "songs/Kanye West - Stronger.mp3", youtube_url: "https://www.youtube.com/watch?v=PsO6ZnUZI0g" },
    { id: 15, title: "I Wonder", artist: "Kanye West", url: "songs/I Wonder.mp3", youtube_url: "https://www.youtube.com/watch?v=MxEjnYdfLXU" },
    { id: 16, title: "Can't Tell Me Nothing", artist: "Kanye West", url: "songs/Kanye West - Can't Tell Me Nothing.mp3", youtube_url: "https://www.youtube.com/watch?v=E58qLXBfLrs" },
    { id: 17, title: "Runaway", artist: "Kanye West", url: "songs/Runaway.mp3", youtube_url: "https://www.youtube.com/watch?v=EMnQwBTJnMM" },
    { id: 18, title: "Bound 2", artist: "Kanye West", url: "songs/Kanye West - Bound 2.mp3", youtube_url: "https://www.youtube.com/watch?v=BBAtAM7vtgc" },
    { id: 19, title: "After Party", artist: "Don Toliver", url: "songs/Don Toliver - After Party [Official Music Video].mp3", youtube_url: "https://www.youtube.com/watch?v=4IahvCIqeOc" },
    { id: 20, title: "NEW DROP", artist: "Don Toliver", url: "songs/Don Toliver - NEW DROP [Official Audio].mp3", youtube_url: "https://www.youtube.com/watch?v=Q3IdDymP11E" },
    { id: 21, title: "No Pole", artist: "Don Toliver", url: "songs/Don Toliver - No Pole [Official Visualizer].mp3", youtube_url: "https://www.youtube.com/watch?v=fCeiUX59_FM" },
    { id: 22, title: "TORE UP", artist: "Don Toliver", url: "songs/Don Toliver - TORE UP [Official Audio].mp3", youtube_url: "https://www.youtube.com/watch?v=jQGqtCalg9Y" },
    { id: 23, title: "No Idea", artist: "Don Toliver", url: "songs/Don Toliver - No Idea [Official Music Video].mp3", youtube_url: "https://www.youtube.com/watch?v=_r-nPqWGG6c" },
    { id: 24, title: "FE!N", artist: "Travis Scott", url: "songs/Travis Scott - FE!N (Lyrics).mp3", youtube_url: "https://www.youtube.com/watch?v=3OUdeW4HmgE" },
    { id: 25, title: "goosebumps", artist: "Travis Scott", url: "songs/Travis Scott - goosebumps (Lyrics) ft. Kendrick Lamar.mp3", youtube_url: "https://www.youtube.com/watch?v=_9XaXHD3680" },
    { id: 26, title: "Type Shit", artist: "Future, Metro Boomin, Travis Scott, Playboi Carti", url: "songs/Future, Metro Boomin, Travis Scott, Playboi Carti - Type Shit (Official Video).mp3", youtube_url: "https://www.youtube.com/watch?v=I0fgkcTbBoI" },
    { id: 27, title: "MY EYES", artist: "Travis Scott", url: "songs/Travis Scott - MY EYES (Official Audio).mp3", youtube_url: "https://www.youtube.com/watch?v=pildU9lK6vM" },
    { id: 28, title: "delusional", artist: "Ken Carson", url: "songs/Ken Carson - delusional (Official Music Video).mp3", youtube_url: "https://www.youtube.com/watch?v=gpbQ4A4tQuU" },
    { id: 29, title: "ss", artist: "Ken Carson", url: "songs/Ken Carson - ss (Official Audio).mp3", youtube_url: "https://www.youtube.com/watch?v=TMzs6GvsZXU" },
    { id: 30, title: "Fighting My Demons", artist: "Ken Carson", url: "songs/Ken Carson - Fighting My Demons (Official Music Video).mp3", youtube_url: "https://www.youtube.com/watch?v=YKkMR2l05Rs" },
    { id: 31, title: "Deli", artist: "Ice Spice", url: "songs/Ice Spice - Deli.mp3", youtube_url: "https://www.youtube.com/watch?v=UqmUxkRPBS0" },
    { id: 32, title: "in ha mood", artist: "Ice Spice", url: "songs/Ice Spice - in ha mood (Official Video).mp3", youtube_url: "https://www.youtube.com/watch?v=RIJbCb1KrOk" },
    { id: 33, title: "I Like It", artist: "Cardi B", url: "songs/Cardi B, Bad Bunny & J Balvin - I Like It [Official Music Video].mp3", youtube_url: "https://www.youtube.com/watch?v=xTlNMmZKwpA" },
    { id: 34, title: "Bodak Yellow", artist: "Cardi B", url: "songs/Cardi B - Bodak Yellow [OFFICIAL MUSIC VIDEO].mp3", youtube_url: "https://www.youtube.com/watch?v=PEGccV-NOm8" },
    { id: 35, title: "20 Min", artist: "Lil Uzi Vert", url: "songs/Lil Uzi Vert - 20 Min.mp3", youtube_url: "https://www.youtube.com/watch?v=bnFa4Mq5PAM" },
    { id: 36, title: "Just Wanna Rock", artist: "Lil Uzi Vert", url: "songs/Lil Uzi Vert - Just Wanna Rock (Lyrics).mp3", youtube_url: "https://www.youtube.com/watch?v=OMpbrmjW_Rg" },
    { id: 37, title: "WAP", artist: "Cardi B", url: "songs/Cardi B - WAP feat. Megan Thee Stallion [Official Audio].mp3", youtube_url: "https://www.youtube.com/watch?v=Wc5IbN4xw70" },
    { id: 38, title: "wokeuplikethis", artist: "Playboi Carti", url: "songs/Playboi Carti - wokeuplikethis＊ ft. Lil Uzi Vert (Official Video).mp3", youtube_url: "https://www.youtube.com/watch?v=REmZhFKmOmo" },
    { id: 39, title: "redrum", artist: "21 Savage", url: "songs/21 Savage - redrum (Official Music Video).mp3", youtube_url: "https://www.youtube.com/watch?v=U4mADkt6o-M" },
    { id: 40, title: "Mask Off", artist: "Future", url: "songs/Future - Mask Off (Official Music Video).mp3", youtube_url: "https://www.youtube.com/watch?v=xvZqHgFz51I" },
    { id: 41, title: "a lot", artist: "21 Savage", url: "songs/21 Savage - a lot (Official Video) ft. J. Cole.mp3", youtube_url: "https://www.youtube.com/watch?v=DmWWqogr_r8" },
    { id: 42, title: "Low Life", artist: "Future", url: "songs/Future - Low Life (Official Music Video) ft. The Weeknd.mp3", youtube_url: "https://www.youtube.com/watch?v=K_9tX4eHztY" },
    { id: 43, title: "Gangsta's Paradise", artist: "Coolio", url: "songs/Gangsta's Paradise.mp3", youtube_url: "https://www.youtube.com/watch?v=Tw0_qHNRAEA" },
    { id: 44, title: "In Da Club", artist: "50 Cent", url: "songs/In Da Club.mp3", youtube_url: "https://www.youtube.com/watch?v=DtrIWQ8J9jw" },
    { id: 45, title: "Crank That", artist: "Soulja Boy Tell'em", url: "songs/Soulja Boy Tell'em - Crank That (Soulja Boy) (Official Music Video).mp3", youtube_url: "https://www.youtube.com/watch?v=8UFIYGkROII" },
    { id: 46, title: "Stan", artist: "Eminem", url: "songs/Stan.mp3", youtube_url: "https://www.youtube.com/watch?v=7u1Jj6aRIec" },
    { id: 47, title: "Rain Over Me", artist: "Pitbull", url: "songs/Pitbull - Rain Over Me (Audio) ft. Marc Anthony.mp3", youtube_url: "https://www.youtube.com/watch?v=OSqW-ZKF_8g" },
    { id: 48, title: "The Box", artist: "Roddy Ricch", url: "songs/Roddy Ricch - The Box [Official Audio].mp3", youtube_url: "https://www.youtube.com/watch?v=uLHqpjW3aDs" },
    { id: 49, title: "For The Night", artist: "Pop Smoke", url: "songs/Pop Smoke - For The Night (Lyrics) ｜ Said I know how to shoot, and I know how to fight [TikTok].mp3", youtube_url: "https://www.youtube.com/watch?v=-ZGZ6TWySsg" },
    { id: 50, title: "Paint The Town Red", artist: "Doja Cat", url: "songs/Doja Cat - Paint The Town Red (Lyrics).mp3", youtube_url: "https://www.youtube.com/watch?v=EiAMmYbr3vA" }

];

function startQuiz() {
    document.getElementById("start-quiz").classList.add("hidden");
    document.getElementById("song-count").classList.remove("hidden");
    document.getElementById("audio-controls").classList.remove("hidden");
    document.getElementById("title").classList.remove("hidden");
    document.getElementById("artist").classList.remove("hidden");
    document.getElementById("check-answer").classList.remove("hidden");
    populateSuggestions();
    availableSongs = shuffleArray(availableSongs);
    loadNewSong();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function populateSuggestions() {
    const titleList = document.getElementById("title-list");
    const artistList = document.getElementById("artist-list");
    titleList.innerHTML = "";
    artistList.innerHTML = "";
    availableSongs.forEach(song => {
        let titleOption = document.createElement("option");
        titleOption.value = song.title;
        titleList.appendChild(titleOption);

        let artistOption = document.createElement("option");
        artistOption.value = song.artist;
        artistList.appendChild(artistOption);
    });
}

function nextSong() {
    document.getElementById("message").textContent = "";
    document.getElementById("youtube-button").classList.add("hidden");
    document.getElementById("next-song").classList.add("hidden");
    document.getElementById("audio-controls").classList.remove("hidden");
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    loadNewSong();
}

function loadNewSong() {
    if (availableSongs.length === 0) {
        endQuiz();
        return;
    }
    songCounter++;
    document.getElementById("song-count").textContent = `Piosenka: ${songCounter}`;
    
    let song = availableSongs.pop();
    window.currentTitle = song.title;
    window.currentArtist = song.artist;
    window.youtubeUrl = song.youtube_url;
    
    const audioSource = document.getElementById("audioSource");
    const audioPlayer = document.getElementById("audioPlayer");
    if (audioSource && audioPlayer) {
        audioSource.src = song.url;
        audioPlayer.load();
    }
}

function playSnippet(seconds) {
    const audio = document.getElementById("audioPlayer");
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        setTimeout(() => audio.pause(), seconds * 1000);
    }
}

function checkAnswer() {
    const audio = document.getElementById("audioPlayer");
    if (audio) {
        audio.pause();
    }
    
    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const correct = window.currentTitle.toLowerCase() === title.toLowerCase() && window.currentArtist.toLowerCase() === artist.toLowerCase();
    if (correct) correctAnswers++;
    
    document.getElementById("message").textContent = correct ? "Poprawnie!" : `Niepoprawna odpowiedź. Prawidłowa: ${window.currentTitle} - ${window.currentArtist}`;
    document.getElementById("youtube-button").classList.remove("hidden");
    document.getElementById("next-song").classList.remove("hidden");
    document.getElementById("audio-controls").classList.add("hidden");
}

function openYouTube() {
    window.open(window.youtubeUrl, '_blank');
}

function endQuiz() {
    document.getElementById("summary").textContent = `Koniec quizu! Poprawne odpowiedzi: ${correctAnswers} / ${songCounter}`;
    document.getElementById("summary").classList.remove("hidden");
}