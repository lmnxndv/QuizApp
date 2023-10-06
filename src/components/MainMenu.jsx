import React, { useContext } from "react";
import { QuizContext } from "../helpers/QuizContext";
import { Button } from "antd";

const MainMenu = () => {
  const { setGameState } = useContext(QuizContext);
  return (
    <div className="menu">
      <img
        src="https://i.pinimg.com/736x/68/8b/d2/688bd2e2fba6756a496640c10465a28e.jpg"
        alt="harryPoster"
      />
      <Button type="primary" onClick={() => setGameState("quiz")}>
        Start Quiz
      </Button>
    </div>
  );
};

export default MainMenu;
