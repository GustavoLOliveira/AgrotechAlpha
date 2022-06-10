
function validar3(){
	var msgE = 'Favor preeencher o campo';

	if(document.getElementById('nome').value == '' ){
		mostrarMensagemErro(msgE, 'nome');
		return;

	}

	if(document.getElementById('email').value == ''){
		mostrarMensagemErro(msgE, 'email');
		return;
	}

	if(document.getElementById('cpf').value == ''){
		mostrarMensagemErro(msgE, 'cpf');
		return;
	}

	if(document.getElementById('telefone').value == ''){
		mostrarMensagemErro(msgE, 'telefone');
		return;
	}

  if(document.getElementById('cidade').value == ''){
		mostrarMensagemErro(msgE, 'cidade');
		return;
	}
  if(document.getElementById('estado').value == ''){
		mostrarMensagemErro(msgE, 'estado');
		return;
	}
  if(document.getElementById('assunto').value == ''){
		mostrarMensagemErro(msgE, 'assunto');
		return;
	}
  if(document.getElementById('mensagem').value == ''){
		mostrarMensagemErro(msgE, 'mensagem');
		return;
	}

	alert("Obrigado por nos encaminhar uma mensagem, responderemos em breve.")
	document.form.submit();

}


function mostrarMensagemErro(msgE, nomeCampo){
	document.getElementById(nomeCampo).focus();
	var campoMSG = document.getElementById('mensagemErro');
	campoMSG.style.display ="block";
	campoMSG.innerHTML = msgE + ' ' + nomeCampo + '!';
	campoMSG.style.background='red';
	campoMSG.style.color='#ffffff';
}