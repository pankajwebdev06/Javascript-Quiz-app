const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c':'Javascript',
        'd':'PHP',
        'correct':'a',

    },
    {
        'que': 'What years was Javascript launched?',
        'a': '1994',
        'b': '1995',
        'c':'1996',
        'd':'none of the above',
        'correct':'b',

    },
    {
        'que': 'What does CSS stands for?',
        'a': 'HyperText Markup language',
        'b': 'Cascading style sheet',
        'c':'Json object Notetion',
        'd':'none of the above',
        'correct':'b',

    },
    {
        'que': 'Which of the following is the scripting language?',
        'a': 'HTML',
        'b': 'CSS',
        'c':'Javascript',
        'd':'PHP',
        'correct':'c',

    },
]

let index = 0;
let total = questions.length;
let right = 0;
    wrong = 0;
const queBox = document.getElementById('queBox');
const optionInputs = document.querySelectorAll('.option');
const loadQuestion = () => {
    if(index == total){
       return endQuiz()
    }
    reset();
    const data = questions[index]
    queBox.innerText = `${index+1}). ${data.que} `;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if( ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )    
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3>Thank you for Playing the Quiz</h3>
    <h2>${right} / out of ${total} are correct.</h2>
    </div>
    `
}

//initial call
loadQuestion();