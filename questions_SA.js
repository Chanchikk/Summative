function showdiv () {
				if(document.getElementById('invisible').style.display == "flex"){
					document.getElementById('invisible').style.display="none";
				}else{
					document.getElementById('invisible').style.display="flex";
				}
			}
			function hidediv () {
				
				document.getElementById('invisible').style.display="none";
			}
			
		 var num_of_question = 1;
		var amount_of_question = 20;
function check(){

	correct_answer = 2;
			
			score = 0;
	
		
	for(var n_of_q = 1; n_of_q <= amount_of_question; n_of_q+=1){
				answer = document.querySelector('input[name=' +"t_" + n_of_q + ']:checked')?.value;
	
	if(answer == correct_answer){
					score +=1;
				}
				
	percent = score/amount_of_question * 100;
			
	document.getElementById('result').innerHTML = "Tasks completed correctly "+percent+"%.";

	}
	}