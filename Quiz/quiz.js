const data = [
    {
        id: 1,
        question: "Which of these fish is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "A flutter is a group of:",
        answers: [
            { answer: "bees", isCorrect: false },
            { answer: "penguins", isCorrect: false },
            { answer: "butterflies", isCorrect: true },
            { answer: "camels", isCorrect: false },
        ],
    },
    {
        id: 1,
        question: "A group of which animals is referred to as a wake?",
        answers: [
            { answer: "bats", isCorrect: false },
            { answer: "vultures", isCorrect: true },
            { answer: "ants", isCorrect: false },
        ],
    },
];

const gameScreen = document.querySelector('.game');
const resultScreen = document.querySelector('.result');
const question = document.querySelector('.question');
const answerContainer = document.querySelector('.answers');
const submit = document.querySelector('.submit');
const play = document.querySelector('.play');

let qIndex = 0;
let correctAnswer = 0;
let wrongAnswer = 0;
let total = 0;
let selectedAnswer;





const playAgain = () => {
    play.addEventListener('click', () => {
        qIndex = 0;
        correctAnswer = 0;
        wrongAnswer = 0;
        total = 0;
        resultScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        showQuestion(qIndex);
    })
}

const showResult = () => {
    resultScreen.style.display = 'block';
    gameScreen.style.display = 'none';

    resultScreen.querySelector('.correct').textContent = `Correct Answer : ${correctAnswer}`;
    resultScreen.querySelector('.wrong').textContent = `Wrong Answer : ${wrongAnswer}`;
    resultScreen.querySelector('.score').textContent = `Score : ${correctAnswer * 10}`;
}

const showQuestion = (qNumber) => {
    if (qIndex == data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answerContainer.innerHTML = data[qNumber].answers.map((item, index) =>
        `
                    <div class="answer">
                    <input type="radio" name="answer" id="${index}" value="${item.isCorrect}">
                    <label for="${index}">${item.answer}</label>
                </div>
    `
    ).join("");
    selectAnswer();
}

const selectAnswer = () => {
    answerContainer.querySelectorAll("input").forEach(el => {
        el.addEventListener('click', (e) => {
            selectedAnswer = e.target.value;
        })
    })
}

const submitAnswer = () => {
    submit.addEventListener('click', () => {
        if (selectedAnswer != null) {
            selectedAnswer === 'true' ? correctAnswer++ : wrongAnswer++
            qIndex++;
            showQuestion(qIndex);

        }
        else {
            alert("select an answer")
        }

    })
}



showQuestion(qIndex);
submitAnswer();
playAgain();