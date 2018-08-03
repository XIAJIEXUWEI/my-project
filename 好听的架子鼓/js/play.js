window.addEventListener('keydown',function(res){
	const audio = document.querySelector(`audio[data-key="${res.keyCode}"]`);
  	const key = document.querySelector(`.key[data-key="${res.keyCode}"]`);
  	const keys = document.querySelectorAll('.key');
  	
  	audio.currentTime=0;
  	audio.play();
  	
  	key.classList.add('playing');
  	
  	keys.forEach( key => {
  	  return key.addEventListener('transitionend', removeTransition);
  });
  function removeTransition(res) {
    if(res.propertyName !== 'transform') return false;

    this.classList.remove('playing');
  }
})