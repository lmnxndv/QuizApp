import React, { useContext, useEffect, useState } from "react";
import { Questions } from "../helpers/Questions";
import { QuizContext } from "../helpers/QuizContext";
import "../App.css";
import { Button } from "antd";

const Quiz = () => {
  const { setScore, setGameState } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState(Questions);

  const nextQue = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQue = () => {
    setGameState("endScreen");
  };

  const back = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const setAnswer = (variant) => {
    const data = questions.map((quest, index) => {
      if (index === currentQuestion) {
        const isCorrect = quest.correctOption === variant;
        return {
          ...quest,
          variants: quest.variants.map((elem) => {
            if (variant === elem.variant)
              return {
                ...elem,
                isSelected: true,
              };
            return {
              ...elem,
              isSelected: false,
            };
          }),
          isCorrect,
        };
      }
      return quest;
    });
    setQuestions(data);
  };

  useEffect(() => {
    const numbOfCorrect = questions.reduce((acc, question) => {
      if (question.isCorrect) return acc + 1;
      return acc;
    }, 0);
    setScore(numbOfCorrect);
  }, [questions]);

  return (
    <div className="quiz">
      <h3>
        {currentQuestion + 1}/{questions.length}.
        {questions[currentQuestion].question}
      </h3>
      <div className="options">
        {questions[currentQuestion].variants.map((answer) => (
          <Button
            type="text"
            block
            onClick={() => {
              setAnswer(answer.variant);
            }}
            className={answer.isSelected ? "selected-button" : ""}
            autoFocus
          >
            {answer.value}
          </Button>
        ))}
      </div>
      <div className="back-next-buttons">
        {currentQuestion >= 1 ? <Button onClick={back}>Back</Button> : null}
        {currentQuestion === questions.length - 1 ? (
          <Button type="primary" onClick={finishQue}>
            Finish Que
          </Button>
        ) : (
          <Button type="primary" onClick={nextQue}>
            Next Question
          </Button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
