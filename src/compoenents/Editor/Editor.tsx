import * as React from "react";
import "./styles/main.scss";
import "bulma/css/bulma.min.css";

export default function Editor() {
  return (
    <>
      <header>
        <div className="tabs is-small tabs">
          <ul>
            <li>
              <a>Datei</a>
            </li>
            <li className="is-active">
              <a>Home</a>
            </li>
            <li>
              <a>Layout</a>
            </li>
            <li>
              <a>Designideen</a>
            </li>
          </ul>
        </div>
        <div className="verticalLine-right">
          <div className="fonts">
            <div className="control">
              <div className="select">
                <select>
                  <option className="Arial">Arial</option>
                  <option className="Calibri">Calibri</option>
                </select>
              </div>
            </div>
            <button className="button fontchange">A↓</button>
            <button className="button fontchange ">A↑</button>
          </div>
        </div>
      </header>
      <div className="main-div">
        <p>123</p>
      </div>
    </>
  );
}
