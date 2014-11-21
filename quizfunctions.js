var correct = false;
var questions = [];
var answers = [];
var qn = 0;
var nc = 0;
questions[0] = new Question("What is the length of a Chameleon's tongue?");
questions[1] = new Question("What is not a reason for Chameleons to change color?");
questions[2] = new Question("Where would a Chameleon most likely be found?");
questions[3] = new Question("How Many Toes does a Chameleon have?");
answers[0] = '#q1';
answers[1] = '#q2';
answers[2] = '#q3';
answers[3] = '#q4';

$(document).ready(function(){
	// Hide all other elements at the beginning
	// $('.results').hide();
	$('.replay').hide();
	$('.answer').find('li').hide();
	$(answers[0]).find('li').show();
	$('li').click(function(){
		checking($(this));
	});
	$('#question').text(questions[0].aaaa);
	$('.next').click(function(){	
		if(correct){
			nc++;
			$('.results').text('Current Score: '+ nc +'/4');
		}
		if(qn === 3){
			console.log(nc);
			$(answers[qn]).find('li').hide(400);
			$('#question').text('');
			$('.next').hide(400);
			$('.replay').show(500);
		}else{
			$(answers[qn]).find('li').hide(400);
			qn++;
			$('#question').text(questions[qn].aaaa);
			$(answers[qn]).find('li').show(500);
			$('div').removeClass('checked');
			correct = false;
			console.log(nc);
		}
	})
	$('.replay').click(function(){
	 	qn = 0;
		$('#question').text(questions[qn].aaaa);
	 	$(answers[qn]).find('li').show(500);
		$('.next').show(500);
		nc = 0;
	 	correct = false;
	 	$(this).hide(400);
	 	$('.results').text('Current Score: '+ nc +'/4');
	});
	// = new Question('asdsdas');
	// console.log(question1.item);
});

function checking(element){
	var x = element.find('div');
	if(x.hasClass('checked')){
		$('div').removeClass('checked');
	}else{
		$('div').removeClass('checked');
		x.toggleClass('checked');
	}
	if(x.hasClass('correct') && x.hasClass('checked')){
		correct = true;
	}else{
		correct = false;
	}
}

function Question(q){
	this.aaaa = q;
}