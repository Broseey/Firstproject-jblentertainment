// LIGHT AND DARKMODE TOGGLE DISPLAY
function togglee(){
	document.body.style.backgroundColor = 'rgb(35, 33, 33)'
	document.getElementById('lightmode').style.display ='block'
	document.getElementById('darkmode').style.display ='none'
	document.body.style.color ='white'
    document.body.style.transition='0.8s'
}
function detogglee(){
	document.body.style.backgroundColor = 'rgb(253, 253, 253)'
	document.getElementById('darkmode').style.display ='block'
	document.getElementById('lightmode').style.display ='none'
	document.body.style.color ='black'
}


// ARROW FUNCTION UNUSED- TO MOVE TO HEADER AND FOOTER,UP AND DOWN
function up(){
    document.getElementById('up').style.display ='none'
    document.getElementById('down').style.display ='block'
  }
  
function down(){
    document.getElementById('down').style.display ='none'
    document.getElementById('up').style.display ='block'
  }