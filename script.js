const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");

const progress = (value) => {
    const percentage = (value / time) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.innerHTML = `${value}`;
};

let questions = [],
    time = 30,
    score = 0,
    currentQuestion,
    timer;


const startBtn = document.querySelector(".start"),
    numQuestions = document.querySelector('#num-questions'),
    category = document.querySelector('#category'),
    difficulty = document.querySelector('#difficulty'),
    timePerQuestion = document.querySelector('#time'),
    quiz = document.querySelector('.quiz'),
    startscreen = document.querySelector('.start-screen');

const startQuiz = () => {
    const num = numQuestions.value;
    cat = category.value;
    diff = difficulty.value;

    //api url
    const YOUR_API_KEY = 'spv63S1CBDVT5hrJwJOmMautYPGr18xPQZL6ITFV'; 
    const url = `https://quizapi.io/api/v1/questions?apiKey=${YOUR_API_KEY}&category=code&difficulty=${diff}&limit=${num}&tags=${cat}`;
    fetch(url)
    .then((res) => res.json())
    .then((results) => {
        questions = results;
        console.log(questions);
        startscreen.classList.add("hide");
        quiz.classList.remove("hide");
        currentQuestion = 1;
        showQuestion(questions[0]);


    });
};

startBtn.addEventListener('click', startQuiz);

const showQuestion = (question) => {
    const questionText = document.querySelector(".question"),
    answersWrapper = document.querySelector(".answer-wrapper"),
    questionNumber = document.querySelector(".number");
    questionText.innerHTML = question.question;

    
    const answers = [question.answers.answer_a, question.answers.answer_b, question.answers.answer_c, question.answers.answer_d];
    answersWrapper.innerHTML = "";
    
    
  


}