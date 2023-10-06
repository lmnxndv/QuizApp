import React, { useContext } from "react";
import { QuizContext } from "../helpers/QuizContext";
import { Questions } from "../helpers/Questions";
import { Button } from "antd";

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const restart = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="endScreen">
      <h2>Your Score</h2>
      <p>
        {score} / {Questions.length}
      </p>
      <Button type="primary" onClick={restart}>Restart</Button>
    </div>
  );
};

export default EndScreen;
