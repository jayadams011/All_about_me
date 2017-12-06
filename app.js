' use strict';
var interviewersName = prompt ('Hi, What is your name?');
      console.log('The interviewers name is', interviewersName);

var inAnswer = prompt(interviewersName +' '+'Do you like to cook: yes or no?');
  if (inAnswer){
      inAnswer = inAnswer.toLowerCase();
  }
  if (inAnswer === 'yes'){
      alert('Awesome! I bet you are a foodie!');
      console.log(inAnswer,interviewersName,'likes to cook');
  }
  if (inAnswer === 'no'){
      alert('Well, I bet you still enjoy eating out with friends!');
      console.log(inAnswer, interviewersName,'doesn\'t like to cook');
  }

var inAnswertwo = prompt(interviewersName+ ' ' +'Do you like to Travel: yes or no?');
    if (inAnswertwo){
        inAnswertwo = inAnswertwo.toLowerCase();
    }

    if (inAnswertwo === 'yes'){
        alert('Thats fun.  I wonder if we have seen the same things!');
        console.log(inAnswertwo,interviewersName,'likes to travel');
    }
    if (inAnswertwo === 'no'){
        alert('You must do local vacations then.');
        console.log(inAnswertwo, interviewersName,'doesn\'t like to travel');
    }
