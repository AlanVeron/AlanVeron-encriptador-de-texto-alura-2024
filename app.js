
const caja2textosInstrucciones= document.getElementById('div_texto_caja2');
const botonCopiar = document.getElementById('btn_copiar_id')

let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

const caja1 = document.getElementById('recibe_texto_texto');
const caja2= document.getElementById('texto_encrip_desencrip');
const SPECIAL_CHARACTERS = /[!@#$%^&*(),.?":{}|<>[\]\\\/'`~\-+=_;]/g;

function validarTexto(caja1) {
    if (SPECIAL_CHARACTERS.test(caja1)) {
        alert('No se aceptan caracteres especiales.');
    return false;
    } else {
    return true;
    }
}


function encriptar(textoEncriptado){
    if(!validarTexto(textoEncriptado)){
        return null;
    }    
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado=textoEncriptado.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado= textoEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return textoEncriptado
}

function btnEncriptar(){
    caja2.style.backgroundImage="none";
    caja2textosInstrucciones.style.display='none';
    botonCopiar.style.display='block';
    texto_encrip_desencrip.style.display='block';

    const mensajeYaEncriptado=encriptar(caja1.value)
    caja2.value=mensajeYaEncriptado
    caja1.value="";
}   
function btnCopiar(){
    navigator.clipboard.writeText(caja2.value);
} 
function desencriptar(textoDesencriptado){
    if(!validarTexto(textoDesencriptado)){
        return null;
    }
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesencriptado=textoDesencriptado.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
        if(textoDesencriptado.includes(matrizCodigo[i][0])){
            textoDesencriptado= textoDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return textoDesencriptado
}
function btnDesencriptar(){
    caja2.style.backgroundImage="none";
    caja2textosInstrucciones.style.display='none';
    botonCopiar.style.display='block';

    const mensajeYaEncriptado=desencriptar(caja1.value)
    caja2.value=mensajeYaEncriptado
    caja1.value="";
}   
