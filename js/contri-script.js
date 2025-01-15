// Sélection des éléments
const selectButtons = document.querySelectorAll('.select-button');
const payButton = document.getElementById('pay-now');
let selectedOption = null;

// Gestion de la sélection des offres
selectButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retirer la classe 'selected' de toutes les options
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        // Ajouter la classe 'selected' à l'option cliquée
        const option = button.parentElement;
        option.classList.add('selected');
        selectedOption = option.dataset.amount; // Stocker le montant sélectionné
    });
});

// Gestion du clic sur le bouton "Payer maintenant"
payButton.addEventListener('click', () => {
    if (selectedOption) {
        // Ouvrir le lien dans une nouvelle fenêtre ou un nouvel onglet
        window.open(
            "https://www.tiktok.com/@mawaa_77/video/7427974187433708833?is_from_webapp=1&sender_device=pc&web_id=7460199287369221654",
            "_blank" // Ouvre dans une nouvelle fenêtre/onglet
        );
    } else {
        alert("Veuillez sélectionner une offre avant de payer.");
    }
});