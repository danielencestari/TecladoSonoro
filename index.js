// como conseguir o data-key de cada tecla:
window.addEventListener('keydown', function(e){
  console.log(e)
  // quando inspeciona e vê o que foi mostrado, a cada tecla tem um data key
  // esse data key que será usado

})

function removeTransition(e) { 
  // função pra remover o tempo de espera de um efeito sonoro pra outro.
  // será executada de fato na linha 161
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return; 
  // caso não tenha audio atribuido para a key, no caso deve ter pra todas as letras. 

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
// pega tudo q tem o . key, passa pela HOF for Each pra poder remover a transicao chamando a funcao da linha 142
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
// qdo tem o keydown de uma tecla com o datakey determinado acima, vai tocar o som atribuido.
