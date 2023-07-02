// Data Of Quiz:

let quizData = [
  {
    question: "HTML stands for ?",
    a: "HyperText Markup Language",
    b: "HyperText Mockup Language",
    c: "HyperText Markup Line",
    d: "HigherText Markup Language",
    ans: "ans1",
  },

  {
    question: "CSS stands for ?",
    a: "Coding StyleSheet",
    b: "Both a & b",
    c: "Cascading StyleSheet",
    d: "None of above",
    ans: "ans3",
  },

  {
    question: "Which HTML attribute is used to define inline styles ?",
    a: "id",
    b: "class",
    c: "style ",
    d: "None of above",
    ans: "ans3",
  },

  {
    question: "Which CSS property controls the text size ?",
    a: "font-style",
    b: "text-size",
    c: "text-style",
    d: "font-size ",
    ans: "ans4",
  },
  {
    question: "How do you group selectors ?",
    a: "Separate each selector with a plus sign",
    b: "Separate each selector with a space",
    c: "Separate each selector with a  semicolon",
    d: "Separate each selector with a comma ",
    ans: "ans4",
  },
  {
    question: "What is the default value of the position property ?",
    a: "fixed",
    b: "static",
    c: "relative",
    d: "absolute",
    ans: "ans2",
  },
  {
    question: "Which property is used to change the font of an element ?",
    a: "font-family ",
    b: "font-style",
    c: "font-weight",
    d: "None of above",
    ans: "ans1",
  },
  {
    question: "Inside which HTML element do we put the JavaScript ?",
  a: "<script>",
  b: "<scripting>",
  c: "<js>",
  d: "<javascript>",
  ans: "ans1",
  },
  {
    question: "How do you declare a JavaScript variable ?",
  a: "v carName;",
  b: "variable carName;",
  c: "var carName;",
  d: "None of above",
  ans: "ans3",
},
{
  question: "Which operator is used to assign a value to a variable ?",
a: "x",
b: "*",
c: "=",
d: "+",
ans: "ans3",
}

]

// Initializing the variables:
const quiz = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let score = 0;
let QuizIndex = 0;

const loadQuiz = () => {

  let questionList = quizData[QuizIndex]
  question.innerText = questionList.question
  a_text.innerText = questionList.a
  b_text.innerText = questionList.b
  c_text.innerText = questionList.c
  d_text.innerText = questionList.d
}

loadQuiz();

const checkAnswers = () => {
  let answer;
  answers.forEach((currentAns) => {
    if (currentAns.checked) {
      answer = currentAns.id;
    }
  })
  return answer
};

const deselection = () => {
  answers.forEach((currentAns) => {
    currentAns.checked = false;
  })
}

submitBtn.addEventListener('click', () => {
  const checkingAnswers = checkAnswers()
  if (checkingAnswers === quizData[QuizIndex].ans) {
    score +=1
  }
  QuizIndex++
  deselection()

  if (QuizIndex < quizData.length) {
    loadQuiz()
  }
  else {
    question.innerHTML = `Your score is  ${score} / ${quizData.length}`;
    document.querySelector('ul').style.display = 'none';
    submitBtn.innerHTML = 'Play Again'
    submitBtn.addEventListener('click', ()=>{
      location.reload()
    })
  }
})
