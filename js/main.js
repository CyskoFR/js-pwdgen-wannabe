function promptMe() {
    const nome = prompt ("Qual é il tuo nome?")
    const cognome = prompt ("Qual é il tuo cognome?")
    const pref_color = prompt ("Qual é il tuo colore preferito?")
    alert ("Nuova password creata!")
    document.getElementById("password_box").innerHTML = nome + cognome + pref_color + "21";
}



