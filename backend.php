<?php
header("Content-Type: application/json");
$host = "localhost";
$user = "root"; // Zmień jeśli używasz innego użytkownika
$pass = ""; // Jeśli masz hasło do MySQL, wpisz je tutaj
$dbname = "songs_db";

// Połączenie z bazą danych
$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
    die(json_encode(["error" => "Błąd połączenia z bazą danych: " . $conn->connect_error]));
}

// Obsługa różnych akcji
if (isset($_GET['action'])) {
    switch ($_GET['action']) {
        case "getAllSongs":
            getAllSongs($conn);
            break;
        case "check":
            checkAnswer($conn);
            break;
        default:
            echo json_encode(["error" => "Nieznana akcja"]);
    }
} else {
    echo json_encode(["error" => "Brak parametru 'action'"]);
}

// Pobieranie wszystkich piosenek w losowej kolejności
function getAllSongs($conn) {
    $result = $conn->query("SELECT id, title, artist, url, youtube_url FROM songs ORDER BY RAND()");
    if ($result->num_rows > 0) {
        $songs = [];
        while ($row = $result->fetch_assoc()) {
            $songs[] = $row;
        }
        echo json_encode($songs);
    } else {
        echo json_encode([]);
    }
}

// Sprawdzanie poprawności odpowiedzi
function checkAnswer($conn) {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!isset($data['id'], $data['title'], $data['artist'])) {
        echo json_encode(["error" => "Brak wymaganych danych"]);
        return;
    }

    $id = intval($data['id']);
    $title = strtolower(trim($data['title']));
    $artist = strtolower(trim($data['artist']));

    $stmt = $conn->prepare("SELECT title, artist FROM songs WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_assoc();
    
    if ($result) {
        $correctTitle = strtolower(trim($result['title']));
        $correctArtist = strtolower(trim($result['artist']));
        $correct = ($correctTitle === $title) && ($correctArtist === $artist);
        
        echo json_encode(["correct" => $correct]);
    } else {
        echo json_encode(["error" => "Nie znaleziono piosenki"]);
    }
}
?>