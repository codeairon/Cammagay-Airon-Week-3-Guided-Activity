const questions = [ 
    { 
        question: "What is the capital of France?", 
        options: ["London", "Paris", "Berlin", "Madrid"], 
        correctAnswer: "Paris" 
    }, 
    { 
        question: "Which planet is known as the Red Planet?", 
        options: ["Earth", "Venus", "Mars", "Saturn"], 
        correctAnswer: "Mars" 
    }, 
]; 

let currentQuestion = 0; 
let userScore = 0; 

function displayQuestion() { 
    const quizContainer = document.getElementById('quizContainer'); 
    const currentQues = questions[currentQuestion]; 

    // Create a new div element to hold the question and options 
    const questionDiv = document.createElement('div'); 

    // Add the question text to the div 
    const questionParagraph = document.createElement('p'); 
    questionParagraph.textContent = currentQues.question; 
    questionDiv.appendChild(questionParagraph); 

    // Create a form element to hold the options as radio buttons 
    const optionsForm = document.createElement('form'); 

    // Add the options as radio buttons to the form 
    for (let i = 0; i < currentQues.options.length; i++) { 
        const option = currentQues.options[i]; 
        const optionInput = document.createElement('input'); 
        optionInput.type = 'radio'; 
        optionInput.name = 'answer'; 
        optionInput.value = option; 
        optionInput.id = 'option' + i; 
         
        const optionLabel = document.createElement('label'); 
        optionLabel.textContent = option; 
        optionLabel.setAttribute('for', 'option' + i); 
         
        optionsForm.appendChild(optionInput); 
        optionsForm.appendChild(optionLabel); 
    } 

    // Add the form to the div 
    questionDiv.appendChild(optionsForm); 

    // Replace the content of the quizContainer with the questionDiv 
    quizContainer.innerHTML = ''; 
    quizContainer.appendChild(questionDiv); 
} 

function checkAnswer() { 
    const selectedOption = document.querySelector('input[name="answer"]:checked'); 
    if (!selectedOption) { 
        return; // If no option selected, do nothing 
    }
    const answer = selectedOption.value; 
    const currentQues = questions[currentQuestion]; 
    if (answer === currentQues.correctAnswer) { 
        userScore++; 
    } 

    currentQuestion++; 
    if (currentQuestion < questions.length) { 
        displayQuestion(); 
    } else { 
        showScore(); 
    } 
} 

function showScore() { 
    const quizContainer = document.getElementById('quizContainer'); 
    quizContainer.innerHTML = ` 
        <h2>Quiz Completed!</h2> 
        <p>Your score: ${userScore} out of ${questions.length}</p> 
    `; 
} 

document.addEventListener('DOMContentLoaded', function() { 
    displayQuestion(); 

    const submitBtn = document.getElementById('submitBtn'); 
    submitBtn.addEventListener('click', function() { 
        checkAnswer(); 
    }); 
}); 