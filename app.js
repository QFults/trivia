let questions = [
  {
    "question": "What does a milliner make and sell?",
    "correct_answer": "Hats",
    "answers": [
      "Shoes",
      "Belts",
      "Hats",
      "Shirts"
    ]
  },
  {
    "question": "Rolex is a company that specializes in what type of product?",
    "correct_answer": "Watches",
    "answers": [
      "Cars",
      "Watches",
      "Computers",
      "Sports equipment"
    ]
  },
  {
    "question": "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
    "correct_answer": "Spruce Goose",
    "answers": [
      "Noah&#039;s Ark",
      "Fat Man",
      "Trojan Horse",
      "Spruce Goose"
    ]
  },
  {
    "question": "What is the romanized Arabic word for 'moon'",
    "correct_answer": "Qamar",
    "answers": [
      "Qamar",
      "Najma",
      "Kawkab",
      "Shams"
    ]
  },
  {
    "question": "Which restaurant's mascot is a clown?",
    "correct_answer": "McDonald's",
    "answers": [
      "Whataburger",
      "Burger King",
      "McDonald's",
      "Sonic"
    ]
  },
  {
    "question": "What is the Portuguese word for 'Brazil'",
    "correct_answer": "Brasil",
    "answers": [
      "Brazil",
      "Brasilia",
      "Brasil",
      "Bras&iacute;l"
    ]
  },
  {
    "question": "According to the 2014-2015 Australian Bureau of Statistics, what percentage of Australians were born overseas?",
    "correct_answer": "28%",
    "answers": [
      "28%",
      "13%",
      "20%",
      "7%"
    ]
  },
  {
    "question": "According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
    "correct_answer": "Plum",
    "answers": [
      "Apple",
      "Peach",
      "Pear",
      "Plum",
    ]
  },
  {
    "question": "Francis Bacon died from a fatal case of pneumonia while he was attempting to preserve meat by stuffing a chicken with snow.",
    "correct_answer": "True",
    "answers": [
      "True",
      "False"
    ]
  },
  {
    "question": "How many notes are there on a standard grand piano?",
    "correct_answer": "88",
    "answers": [
      "98",
      "108",
      "78",
      "88"
    ]
  }
]

let currentIndex = 0

const newQuestion = () => {

  document.getElementById('question').textContent = questions[currentIndex].question

  let answers = questions[currentIndex].answers

  document.getElementById('answers').innerHTML = ''

  for (let i = 0; i < answers.length; i++) {
    let answerElem = document.createElement('button')
    answerElem.className = 'answer btn btn-secondary btn-lg'
    answerElem.dataset.answer = answers[i]
    answerElem.textContent = answers[i]

    document.getElementById('answers').append(answerElem)
  }
}

document.getElementById('startTrivia').addEventListener('click', () => {
  newQuestion()
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('answer')) {
    console.log(event.target.dataset.answer)
    if (event.target.dataset.answer === questions[currentIndex].correct_answer) {
      console.log('Correct!')
    } else {
      console.log('Incorrect!')
    }

  }
})
