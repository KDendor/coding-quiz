// at the Top of our JAVASCRIPT we GRAB reference to elements on the DOM/HTML
let startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startGame);

let submitButton = document.getElementById("submit-button");
submitButton.addEventListener('click', selectAnswer);

let currQuestion = 0
let score = 0

// function startGame () {


let questions = [
    {
        q: "What is a data structure?",
        a: [
            { text: "An array", isCorrect: false },
            { text: "A storage format that defines the way that data is stored, organized, and manipulated", isCorrect: true },
            { text: "The way programs are structured", isCorrect: false },
            { text: "Memory storage", isCorrect: false }
        ]
    },
    {
        q: "What is an Array?",
        a: [
            { text: "A collection of items stored in memory locations", isCorrect: true },
            { text: "A string", isCorrect: false },
            { text: "A collection of boolean values", isCorrect: false },
            { text: "Data", isCorrect: false }
        ]
    },
    {
        q: "What is a Queue?",
        a: [
            { text: "A Queue refers to a line of strings", isCorrect: false },
            { text: "A Queue is a line", isCorrect: false },
            { text: "A Queue refers to a linear data structure that performs opertaions in FIFO order", isCorrect: true },
            { text: "A Queue is a stick", isCorrect: false }
        ]
    }
]

function startGame() {
    console.log("Starting Quiz...");
    startButton.setAttribute('class', 'hide');

    let questionEl = document.getElementById("questions")
    let opt = document.getElementById("options")
    startButton.setAttribute('class', 'hide');
    console.log(questions)
    questionEl.textContent = questions[currQuestion].q;
    opt.innerHTML = ""

    for (let i = 0; i < questions[currQuestion].a.length; i++) {
        let choicesdiv = document.createElement("div");
        let choice = document.createElement("input");
        let choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = questions[currQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

// function selectAnswer() 

function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${questions.length}`
}

function checkAns() {
    let selectedAns = document.getElementById('input[choice="answer"]')
    console.log("User Answer: ", selectedAns);


    if (questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    }
}

function nextQuestion() {
    if (currQuestion < questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementbyId("options").remove()
        document.getElementbyId("questions").remove()
        document.getElementbyID("submit-button").remove()
        loadScore();
    }
}

