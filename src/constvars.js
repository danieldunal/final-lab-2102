export const theQuiz = {
  questions: [
    {
      question:
        "Which of the following is the best snack?",
      choices: [
        "Pretzels",
        "Chips",
        "Fruit Bars",
        "Cheetos",
      ],
      type: "MCQs",
      correctAnswer: "Pretzels",
    },
    {
      question: "What color is the sky",
      choices: [
        "Blue",
        "Green",
        "The number 7",
        "Air doesnt have a color",
      ],
      type: "MCQs",
      correctAnswer: "Blue",
    },
    {
      question:
        "Identify who didn't clean up thier room yesterday",
      choices: ["Max", "David", "Josh", "Rina"],
      type: "MCQs",
      correctAnswer: "David",
    },
    {
      question: "What is the capital of Zimbabwe?",
      choices: ["Zambia", "Harare", "Africa", "Budapest"],
      type: "MCQs",
      correctAnswer: "Harare",
    },
    {
      question: "What is this?",
      choices: [
        "Huh?",
        "What?",
        "A question",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "A question",
    },
    {
      question: "How old am I?",
      choices: [
        "2 years",
        "How am I supposed to know?",
        "Pretty old",
        "13.8 billion years",
      ],
      type: "MCQs",
      correctAnswer: "2 years",
    },
    {
      question: "Do you like coffee?",
      choices: [
        "Yes?",
        "Not really",
        "NO.",
        "Ew, gross",
      ],
      type: "MCQs",
      correctAnswer: "Yes?",
    },
    {
      question: "How many holes in a Polo?",
      choices: [
        "One",
        "Two",
        "Three",
        "Four",
      ],
      type: "MCQs",
      correctAnswer: "Four",
    },
    {
      question: "What is minimum wage here?",
      choices: [
        "15/hr",
        "18/hr",
        "7.50/hr",
        "12/hr",
      ],
      type: "MCQs",
      correctAnswer: "15/hr",
    },
    {
      question: "Was this Quiz good?",
      choices: [
        "Not really",
        "YES, I LOVED IT! (the correct answer)",
        "This quiz sucks",
        "whuh?",
      ],
      type: "MCQs",
      correctAnswer: "YES, I LOVED IT! (the correct answer)",
    },
    
  ],
};

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0
}