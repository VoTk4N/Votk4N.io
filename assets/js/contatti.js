function getSelectedRadioValue() {
    const selectedRadio = document.querySelector('input[name="tipo"]:checked');
    return selectedRadio ? selectedRadio.value : '';
}

function sendMail() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let messaggio = document.getElementById("messaggio").value;
    let tipo = getSelectedRadioValue();

    // Controlla se tutti i campi sono compilati
    if (nome === "" || email === "" || messaggio === "" || tipo === "") {
        alert("Per favore, compila tutti i campi.");
        return;
    }

    let params = {
        nome: nome,
        email: email,
        messaggio: messaggio,
        tipo: tipo
    };

    const serviceID = "service_2rhhsbm";
    const templateID = "template_1muq4jq";

    emailjs.send(serviceID, templateID, params)
    .then((res) => {
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("messaggio").value = "";
        console.log(res);
        alert("Il tuo messaggio è stato inviato con successo");
    })
    .catch((err) => console.log(err));
}