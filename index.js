const bttStyle = document.getElementById("btt-styles");
const styleList = document.getElementById("style-list");
const title = document.getElementById("title");
const painel = document.getElementById("painel");
const principal = document.getElementById("principal");
const navPainel = document.getElementById("nav-painel");
var informations = [];
var musicValue = "";

bttStyle.addEventListener("click", () => {
    bttStyle.classList.toggle("on")
    styleList.classList.toggle("active")
    title.classList.toggle("active")
    painel.classList.toggle("active")
    principal.classList.toggle("active")
    console.log("teste");
})

const orcmentBtt = document.getElementById("orcment-btt")
const orquestBtt = document.getElementById("orquest-btt")
const painel01 = document.createElement("div")
const painelBackground = document.createElement("img");
painelBackground.setAttribute("src", "./medias/background_music.png")
painelBackground.setAttribute("id", "painelBackground")
painel01.setAttribute("id", "painel-01")
const contentPainel01 = document.getElementById("content-painel01")
const contentPainel02 = document.getElementById("content-painel02")
const contentPainel03 = document.getElementById("content-painel03")
const contentPainel04 = document.getElementById("content-painel04")
const contentPainel05 = document.getElementById("content-painel05")
const finalContent = document.getElementById("content-final")

orcmentBtt.addEventListener("click", () => {
    painel.classList.add("remove")
    principal.classList.add("redimensionate")
    orcmentBtt.style.display = "none";
    orquestBtt.style.display = "none";
    setTimeout(() => {
        painel.style.display = "none";
        navPainel.style.display = "flex";
        principal.appendChild(painel01);
        principal.appendChild(painelBackground);
        contentPainel01.style.display = "flex";
    }, 1000);
})

const btnNext = document.getElementById("btn-next")
const inputName = document.getElementById("input-name");
//botão 01...................................................
btnNext.addEventListener("click", () => {
    let optionsAll = document.getElementById("optionsAll")

    if (inputName.value == "") {
        inputName.style.border = "3px solid red"
        return
    }
    if (optionsAll.value == "estilo") {
        optionsAll.style.border = "3px solid red"
        return
    }
    contentPainel01.style.display = "none"
    contentPainel02.style.display = "flex"

    informations.push(inputName.value)
    informations.push(optionsAll.value)

    console.log(informations);
})
//botão 02...................................................

const btnNext2 = document.getElementById("btn-next2")

btnNext2.addEventListener("click", () => {
    let inputMusicTime = document.getElementById("input-music-time");
    let musicName = document.getElementById("music-name");
    let authMusic = document.querySelector("#auth-music:checked");
    let inputAboutMusic = document.getElementById("input-about-music");

    if (!inputMusicTime.value) {
        inputMusicTime.style.border = "3px solid red"
        return
    }

    if (!musicName.value) {
        musicName.style.border = "3px solid red"
        return
    }

    if (!authMusic) {
        console.log("você precisa selecionar uma opção")
        document.getElementById("content-music-auth").style.color = "red";
        return
    }

    if (!inputAboutMusic.value) {
        inputAboutMusic.style.border = "3px solid red"
        return
    }

    informations.push(inputMusicTime.value)
    informations.push(musicName.value)
    informations.push(authMusic.value)
    informations.push(inputAboutMusic.value)

    musicValue = 50 * inputMusicTime.value;

    console.log(informations)

    contentPainel02.style.display = "none"
    contentPainel03.style.display = "flex"
})

//botão 03..............................................................

const btnNext3 = document.getElementById("btn-next3")

btnNext3.addEventListener("click", () => {
    let backvocal = document.querySelector("#backvocal:checked");
    let vocalArrangement = document.querySelector("#vocal-arrangement:checked")

    if (!backvocal) {
        document.getElementById("content-backvocal").style.color = "red"
        return
    }

    if (!vocalArrangement) {
        document.getElementById("content-vocal-arrangement").style.color = "red"
        return
    }

    informations.push(backvocal.value)
    informations.push(vocalArrangement.value)

    console.log(informations);

    contentPainel03.style.display = "none"
    contentPainel04.style.display = "flex"
})

//botão 04..............................................................

const btnNext4 = document.getElementById("btn-next4")

btnNext4.addEventListener("click", () => {
    let aboutInstrumental = document.querySelector("#about-instrumental:checked");

    if (!aboutInstrumental) {
        document.getElementById("content-about-instrumental").style.color = "red";
        return
    }

    informations.push(aboutInstrumental.value)
    console.log(informations);

    contentPainel04.style.display = "none"
    contentPainel05.style.display = "flex"
})

//botão 05..............................................................

const btnTenho = document.getElementById("btn-tenho")
const btnNoTenho = document.getElementById("btn-no-tenho")



const clientName = document.getElementById("clientName");
const musicTitle = document.getElementById("musicTitle");
const musicStyle = document.getElementById("musicStyle");
const musicDuration = document.getElementById("musicDuration");
const musicAuth = document.getElementById("musicAuth");
const describeUser = document.getElementById("describeUser");
const vocalArrangement = document.getElementById("vocalArrangement");
const instrumental = document.getElementById("instrumental");
const orquestra = document.getElementById("orquestra");
const finalValue = document.getElementById("finalValue");


function printFinalInfor() {
    console.log(informations)
    clientName.value = `Orçamento para ${informations[0]}`
    musicStyle.value = `(${informations[1]})`
    musicDuration.value = `duração média de ${informations[2]} minutos`
    musicTitle.value = informations[3]
    describeUser.value = informations[5]

    if (informations[4] == "Sim") {
        musicAuth.value = "A música é autoral"
        musicAuth.style.color = "#03fc17"
    } else {
        musicAuth.value = "A música não é autoral"
        musicAuth.style.color = "#fca103"
    }

    let backvocal01 = document.getElementById("backvocal-field");

    switch (informations[6]) {
        case "sim-Backvocal":
            console.log("desejo back-vocal");
            backvocal01.value = "Desejo backvocal na música"
            backvocal01.style.color = "#03fc17"
            musicValue += 150;
            break;
        case "noBackvocal":
            console.log("não desejo back-vocal");
            backvocal01.value = "Não desejo backvocal na música"
            backvocal01.style.color = "rgba(176, 176, 176,.5)"
            break;
    }

    switch (informations[7]) {
        case "sim-vocal-arrangement":
            vocalArrangement.value = "Preciso de arranjo vocal"
            musicValue += 250;
            break;
        case "nao-preciso vocal-arrangement":
            vocalArrangement.value = "Não preciso de arranjo vocal"
            vocalArrangement.style.color = "rgba(176, 176, 176,.5)"
            break;
        default:
            vocalArrangement.value = "Já possuo um arranjo vocal"
            vocalArrangement.style.color = "rgba(176, 176, 176,.5)"
            break;
    }

    switch (informations[8]) {
        case "voz-violao":
            instrumental.value = "instrumental Voz e Violão"
            musicValue += 120;
            break;
        case "voz-piano":
            instrumental.value = "instrumental Voz e Piano"
            musicValue += 160;
            break;
        case "banda-basica":
            instrumental.value = "instrumental Banda Básica"
            musicValue += 250;
            break;
        case "produ-completa":
            instrumental.value = "Produção volumosa completa"
            musicValue += 350;
            break;
        case "instrumental-desne":
            instrumental.value = "não é necessário instrumental"
            instrumental.style.color = "rgba(176, 176, 176,.5)"
            break;
    }

    switch (informations[9]) {
        case "tenho":
            orquestra.value = "Arranjo de orquestra necessário!"
            musicValue += 450;
            break;
        case "no-tenho":
            orquestra.value = "Não será necessário um arranjo de orquestra."
            orquestra.style.color = "rgba(176, 176, 176,.5)"
            break;
    }

    finalContent.style.display = "flex"
    finalValue.value = `Valor final: R$ ${musicValue}`;
}


btnTenho.addEventListener("click", () => {
    informations.push("tenho")
    contentPainel05.style.display = "none"
    navPainel.style.display = "none"
    painel01.style.display = "none"
    painelBackground.style.display = "none"
    principal.classList.add("changeBg");
    printFinalInfor();
})

btnNoTenho.addEventListener("click", () => {
    informations.push("no-tenho")
    contentPainel05.style.display = "none"
    navPainel.style.display = "none"
    painel01.style.display = "none"
    painelBackground.style.display = "none"
    principal.classList.add("changeBg");
    printFinalInfor();
})



//Responsividade ao tocar no input..................

inputName.addEventListener("focus", () => {
    painel01.classList.add("active")
    contentPainel01.classList.add("active")
    inputName.classList.add("active")
})

inputName.addEventListener("focusout", () => {
    painel01.classList.remove("active")
    contentPainel01.classList.remove("active")
    inputName.classList.remove("active")
})


//enviar email



// const buttonSubmit = document.getElementById("btn-solicitar-orcament-final");

// buttonSubmit.addEventListener("click",()=>{

// })

//cancelar ação de orçamento------------------------------------------------------

let btnCancel = document.getElementById("btn-cancel");



btnCancel.addEventListener("click", () => {
    finalContent.style.display = "none"
    orcmentBtt.style.display = "block";
    orquestBtt.style.display = "block";
    navPainel.style.display = "none";
    painel.style.display = "flex";
    painel01.style.display = "none";
    principal.classList.remove("redimensionate")
    painel.classList.remove("remove")
})