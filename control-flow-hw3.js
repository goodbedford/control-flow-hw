var securityQuestions = [
    {question: "What is your first pet's name?",
     expectedAnswer: "morgan"
    },
    {question:"What is your car color?",
     expectedAnswer: "red"
    },
        {question:"City of your favorite vacation?",
     expectedAnswer: "africa"
    }
]

function getSecurityAnswer(questions){
var tempAnswer = "";
    for(var questionsAsked = 0; questionsAsked < 2; questionsAsked++){ 
        
        tempAnswer = prompt(questions[questionsAsked].question);
        if ( tempAnswer != questions[questionsAsked].expectedAnswer){
            console.log("Error, wrong answer.");
            break;
        }
        console.log(tempAnswer + " matches " + questions[questionsAsked].expectedAnswer);
    }

}

getSecurityAnswer(securityQuestions);