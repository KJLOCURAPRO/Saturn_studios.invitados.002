const invitacion = {
    si: document.getElementById('si'),
    no: document.getElementById('no')
}

const html = {
    inicio: document.getElementById('start'),
    ad: document.getElementById('ad'),
    invi: document.getElementById('aceptada')
}

let test = {
    acept: null,
    deny: null
}

invitacion.si.addEventListener('click',() => {
    html.inicio.style.display = 'none'
    html.ad.classList.remove('ocult')
    if(test.deny == null){
    html.invi.textContent= 'La invitación fue aceptada'
    test.acept = true
    }else{
        html.invi.textContent= 'La invitación fue rechazada'
   html.invi.style.color='red'
    }
})


invitacion.no.addEventListener('click',() => {
    html.inicio.style.display = 'none'
    html.ad.classList.remove('ocult')
    if(test.acept == null){
    html.invi.textContent= 'La invitación fue rechazada'
   html.invi.style.color='red'
   test.deny = true
    }else{
        html.invi.textContent= 'La invitación fue aceptada' 
    }
})