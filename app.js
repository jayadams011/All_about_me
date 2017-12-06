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

    var inAnswerthree = prompt(interviewersName+ ' ' +'have you ever been tackeled by a great dane: yes or no?');
        if (inAnswerthree){
            inAnswerthree = inAnswerthree.toLowerCase();
        }

        if (inAnswerthree === 'yes'){
            alert('Then you must be very lucky!');
            console.log(inAnswerthree,interviewersName,'has been loved by a dane');
        }
        if (inAnswerthree === 'no'){
            alert('Oh, too bad. Nothing better then a Dane Hug');
            console.log(inAnswerthree, interviewersName,'hasn\'t been loved by a dane');
        }

      var inAnswerfour = prompt(interviewersName+ ' ' +'Do you ride a bike?');
            if (inAnswerfour){
                inAnswerfour = inAnswerfour.toLowerCase();
            }

            if (inAnswerfour === 'yes'){
                alert('Cool. I ride road.');
                console.log(inAnswerfour,interviewersName,'Does ride a bike.');
            }
            if (inAnswerfour === 'no'){
                alert('So, I guess you have never experinced going downhill at 60 mph with a road contact of about two quarters.');
                console.log(inAnswerfour, interviewersName,'does\'t ride a bike');
            }
        var inAnswerfive = prompt(interviewersName+ ' ' +'Are you getting tired of my questions?');
            if (inAnswerfive){
                inAnswerfive = inAnswerfive.toLowerCase();
            }

            if (inAnswerfive === 'yes'){
                alert('it\'s ok. We are almost done.');
                console.log(inAnswerfive,interviewersName,'is tired of these questions');
            }
            if (inAnswerfive === 'no'){
                alert('Well, that\'s all I have for now.');
                console.log(inAnswerfive, interviewersName,'isn\'t ready to quit');
            }
