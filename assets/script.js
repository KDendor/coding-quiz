let Questions = [
     q: "What is a data structure?",
     a: { text: "An array", isCorrect: false},
    { text: "A storage format that defines the way that data is stored, organized, and manipulated", isCorrect: true },
    { text: "The way programs are structured", isCorrect: false},
    { text: "Memory storage", isCorrect: false}
]

{
    q: "What is an Array?",
    a: [{ text: "A collection of items stored in memory locations", isCorrect: true},
    { text: "A string", isCorrect: false},
    { text: "A collection of boolean values", isCorrect: false},
    { text: "Data", isCorrect: false}
]

}
    q: "What is a Queue?",
    a: [{ text: "A Queue refers to a line of strings", isCorrect: false},
    { text: "A Queue is a line", isCorrect: false},
    { text: "A Queue refers to a linear data structure that performs opertaions in FIFO order", isCorrect: true},
    { text: "A Queue is a stick", isCorrect: false}
]

let currQuestion = 0
let score = 0

function loadQues () {
    const question = document.getElementById("question")
    const opt = document.getElementbyID("option")

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""

    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv =document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues ();

function loadScore () {
    const totalScore = document.getElementById("score")
    totalScore.textContent = 'You scored ${score} out of ${Questions.length}'
}

function nextQuestion () {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues ();
    } else {
        document.getElementbyId("option").remove ()
        document.getElementbyId("question").remove ()
        document.getElementbyID("button").remove ()
        loadScore ();
    }
}

function checkAns () {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]'))

    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion ();
    } else {
        nextQuestion ();
    }
}