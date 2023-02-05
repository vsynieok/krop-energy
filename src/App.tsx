import { useEffect, useState } from "react";
import "./App.css";
import { getTodayFormatted } from "./logic/currentDate";
import { fromInterval } from "./logic/randomizer";
import { timeTable } from "./logic/timeTable";

function App() {
  const [energyLimits, setEnergyLimits] = useState<[string, number][]>();

  useEffect(() => {
    setEnergyLimits(
      timeTable.map((v) => [v, fromInterval(15000, 19500) / 100])
    );
  }, []);

  return (
    <div className="app">
      <div className="app-header">
        Ліміти для ПрАТ Кіровоградобленерго,
        <br />
        доведені НЕК Укренерго на {getTodayFormatted()}
        <br />
        (МВт)
      </div>
      <table className="app-table">
        {energyLimits?.map((v) => {
          return (
            <tr>
              <td>{v[0]}</td>
              <td>{v[1]}</td>
            </tr>
          );
        })}
        <tr>
          <td>Ця доба в 2022 р.</td>
          <td>{fromInterval(28000, 35000) / 100}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
