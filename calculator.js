// JavaScript Document

//Change Display
function d(val) {
	document.getElementById("d").value = val;
	}
	
	//Type numvers and operators
	function v(val) {
		document.getElementbyId("d").value += val;
	}
	 
	 //Evaluate the equation
	 function e() {
		 try {
			 d(eval(document.getElementbyId("d").value));
			 }
			 catch(err) {
				 d("Error");
		 }