document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedisce il ricaricamento della pagina

    const accessCode = document.getElementById("accessCode").value;
    const correctCode = "akitopino"; // Sostituisci con il codice corretto

    if (accessCode === correctCode) {
        // Se il codice è corretto, reindirizza alla pagina protetta
        window.location.href = "protected.html";
    } else {
        // Mostra un messaggio di errore
        document.getElementById("errorMessage").textContent = "Codice di accesso non corretto.";
    }
});
