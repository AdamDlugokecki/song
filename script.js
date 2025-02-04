let songCounter = 0;
let correctAnswers = 0;
let availableSongs = [];

function startQuiz() {
    document.getElementById("start-quiz").classList.add("hidden");
    document.getElementById("song-count").classList.remove("hidden");
    document.getElementById("audio-controls").classList.remove("hidden");
    document.getElementById("title").classList.remove("hidden");
    document.getElementById("artist").classList.remove("hidden");
    document.getElementById("check-answer").classList.remove("hidden");
    fetch("backend.php?action=getAllSongs")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (!Array.isArray(data) || data.length === 0) {
                throw new Error("Brak piosenek w bazie danych");
            }
            availableSongs = shuffleArray(data);
            loadNewSong();
        })
        .catch(error => {
            console.error("Błąd ładowania listy piosenek:", error);
            alert("Nie można załadować listy piosenek. Sprawdź połączenie z serwerem.");
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
    window.currentSongId = song.id;
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

function playAudio() {
    document.getElementById("audioPlayer").play();
}

function stopAudio() {
    document.getElementById("audioPlayer").pause();
}

function restartAudio() {
    document.getElementById("audioPlayer").currentTime = 0;
}

function checkAnswer() {
    const audio = document.getElementById("audioPlayer");
    if (audio) {
        audio.pause(); // Zatrzymanie odtwarzania po sprawdzeniu
    }
    
    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    fetch("backend.php?action=check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, artist, id: window.currentSongId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.correct) correctAnswers++;
        document.getElementById("message").textContent = data.correct ? "Poprawnie!" : `Niepoprawna odpowiedź. Prawidłowa: ${window.currentTitle} - ${window.currentArtist}`;
        document.getElementById("youtube-button").classList.remove("hidden");
        document.getElementById("next-song").classList.remove("hidden");
        document.getElementById("audio-controls").classList.add("hidden");
    });
}

function openYouTube() {
    window.open(window.youtubeUrl, '_blank');
}

function endQuiz() {
    document.getElementById("audio-controls").classList.add("hidden");
    document.getElementById("title").classList.add("hidden");
    document.getElementById("artist").classList.add("hidden");
    document.getElementById("check-answer").classList.add("hidden");
    document.getElementById("youtube-button").classList.add("hidden");
    document.getElementById("next-song").classList.add("hidden");
    document.getElementById("song-count").classList.add("hidden");
    document.getElementById("summary").textContent = `Koniec quizu! Poprawne odpowiedzi: ${correctAnswers} / ${songCounter}`;
    document.getElementById("summary").classList.remove("hidden");
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}