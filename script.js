const quizData = [
    {
      question: "1. Which of the following is not a primitive data type in Java?",
      options: [
        "Boolean",
        "Character",
        "String",
        "Byte"
      ],
      answer: 3
    }, 
    
    {
        question: "2. What is the default value of an instance variable in Java?",
        options: [
            "null",
            "0",
            "false",
            "undefined"
        ],
        answer: 1
      },
      {
        question:"3. Which of the following is not a Java keyword?",
        options: [
            "new",
            "public",
            "volatile",
            "virtual"            
        ],
        answer: 4
      },
      {
        question: "4. Which of the following is a valid Java identifier?",
        options: [
            "123abc",
            "_abc123",
            "abc-123",
            "123-abc"
        ],
        answer: 2
      },
      {
        question: "5. Which of the following is a subclass of the Exception class?",
        options: [
            "RuntimeException",
            "Error",
            "Throwable",
            "IllegalArgumentException"
        ],
        answer: 1
      },
      {
        question: "6.What is the result of the following expression?\n\n```javascript\n5 + '5' - 2\n```",
        options: [
           "7",
           "3",
           "10",
           "NaN"
        ],
        answer: 2
      },
      {
        question: "7.Which method is used to add elements at the end of an array in JavaScript?",
        options: [
           "push()",
           "pop()",
           "shift()",
           "unshift()"
        ],
        answer: 1
    },
      {
        question: "8.What does CSS stand for?",
        options: [
           "Computer Style Sheets",
           "Cascading Style Sheets",
           "Colorful Style Sheets",
           "Creative Style Sheets"
        ],
        answer: 2
      },
      {
        question: "9.Which symbol is used for single-line comments in JavaScript?",
        options: [
           "//",
           "/*",
           "<!--",
           "%%"
        ],
        answer: 1
      },
      {
        question: "10.Which of the following is the correct syntax for declaring an array of integers in Java?",
        options: [
            "int[] myArray = {1, 2, 3, 4, 5};",
            "int myArray[] = {1, 2, 3, 4, 5};",
            "int[] myArray = new int[5];",
            "int myArray[5] = {1, 2, 3, 4, 5};"
      ],
        answer: 1
      }
  ];
  
  
  
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const congratulationsPopup = document.getElementById("congratulations-popup");
  const scoreElement = document.getElementById("score");
  const totalElement = document.getElementById("total");
  const contactButton = document.getElementById("contact-button");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  loadQuestion();
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    optionsElement.innerHTML = "";
    for (let i = 0; i < currentQuestion.options.length; i++) {
      const optionButton = document.createElement("button");
      optionButton.innerText = currentQuestion.options[i];
      optionButton.classList.add("option");
      optionButton.addEventListener("click", checkAnswer);
      optionsElement.appendChild(optionButton);
    }
  }
  
  function checkAnswer(e) {
    const selectedOption = e.target;
    const currentQuestion = quizData[currentQuestionIndex];
  
    const selectedAnswer = Array.from(optionsElement.children).indexOf(selectedOption) + 1;
  
    if (selectedAnswer === currentQuestion.answer) {
      selectedOption.classList.add("correct");
      score++;
    } else {
      selectedOption.classList.add("wrong");
    }
  
    disableOptions();
  
    if (currentQuestionIndex === quizData.length - 1) {
      submitButton.innerText = "Finish";
    }
  
    currentQuestionIndex++;
    submitButton.disabled = false;
    submitButton.addEventListener("click", nextQuestion);
  }
  
  function disableOptions() {
    const optionButtons = Array.from(optionsElement.children);
    optionButtons.forEach((button) => {
      button.disabled = true;
      if (!button.classList.contains("correct")) {
        button.classList.add("disabled");
      }
    });
  }
  
  function nextQuestion() {
    submitButton.removeEventListener("click", nextQuestion);
  
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
      submitButton.disabled = true;
      removeOptionClasses();
    } else {
      showCongratulationsPopup();
    }
  }
  
  function removeOptionClasses() {
    const optionButtons = Array.from(optionsElement.children);
    optionButtons.forEach((button) => {
      button.classList.remove("correct", "wrong", "disabled");
    });
  }
  
  function showCongratulationsPopup() {
    questionContainer.style.display = "none";
    congratulationsPopup.style.display = "flex";
    scoreElement.textContent = score;
    totalElement.textContent = quizData.length;
  }
  
  contactButton.addEventListener("click", function () {
    window.location.href = "https://www.linkedin.com/in/-aro-barath-chandru--12725622a/?originalSubdomain=in";
    console.log("Contact button clicked!");
  });
  