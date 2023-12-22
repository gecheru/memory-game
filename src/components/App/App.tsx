import React, { FC, useState } from "react";
import './App.css';
import { Statistic } from "../Statistic/Statistic";
import { GameField } from "../GameField/GameField";

export const App: FC = () => {
  const [attempts, setAttempts] = useState(0);

  return (
    <div className="app">
        <div className="container">
          <h1 className="head title">Memory</h1>
          <Statistic 
            title="Attempts Done"
            count={attempts}
          />
          <GameField />
          <Statistic 
            title="Attempts Left"
            count={attempts}
          />
        </div>
    </div>
  )
}