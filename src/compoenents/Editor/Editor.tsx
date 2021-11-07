import * as React from "react";
import "./styles/main.scss";
import "bulma/css/bulma.min.css";
import Draggable from "react-draggable";
import { ChangeEventHandler } from "react";
import * as Console from "console";
import { stringify } from "uuid";
export default function Editor() {
  const layoutdrag = (e: React.DragEvent<HTMLElement>) => {
    e.dataTransfer.setData("text", e.currentTarget.id);
  };
  const layoutallowDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.className = "drag-border-plane";

    e.preventDefault();

    e.stopPropagation();
  };

  const handleinput = () => {
    console.log("test");
  };

  const reloadplane = (e: React.InputHTMLAttributes<HTMLElement>) => {
    console.log("fired");
  };
  const layoutdrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.currentTarget);
    e.currentTarget.className = "";
    e.preventDefault();

    var data = e.dataTransfer.getData("text");
    // @ts-ignore
    if (document.getElementById(data).id === "Title_left__Text_left__No_pic") {
      e.currentTarget.innerHTML =
        '    <h1 contenteditable="true"id="h1_' +
        e.currentTarget.id +
        '_Title_left__Text_left__No_pic" OnInput={reloadplane(e)} style="\n' +
        "    font-size: 200%;\n" +
        "    padding: 2%;\n" +
        '">Titel</h1>\n' +
        '<h3 contenteditable="true" id="h3_' +
        e.currentTarget.id +
        '_Title_left__Text_left__No_pic" oninput="handleinput()" style="\n' +
        "    margin-left: 2%;\n" +
        "    white-space: initial;\n" +
        "    word-wrap: break-word;\n" +
        '" spellcheck="false" data-gramm="false"><div >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida dolor mauris, at aliquet metus accumsan sed</div><div>&nbsp;Aenean non sem rhoncus, feugiat libero id, pharetra sem. Praesent et odio mattis lacus sollicitudin varius ut non nunc<span style="font-weight: 400; white-space: initial;">.</span></div><div><span style="font-weight: 400; white-space: initial;">&nbsp;Nulla auctor nunc non eros tempor condimentum. Etiam porttitor enim sed neque ullamcorper, eget ullamcorper nisi pellentesque.</span></div><div><span style="font-weight: 400; white-space: initial;">&nbsp;Mauris blandit, sem ut convallis scelerisque, elit metus tincidunt massa,</span></div><div><span style="font-weight: 400; white-space: initial;">&nbsp;id consectetur lectus ipsum at sapien. Etiam nec turpis dui. Donec scelerisque aliquam justo</span></div><div><span style="font-weight: 400; white-space: initial;">, vitae laoreet mi iaculis id. Fusce venenatis dignissim nisl, vitae hendrerit ante lacinia ac.</span></div><div><span style="font-weight: 400; white-space: initial;">&nbsp;Praesent ultrices, urna a finibus iaculis, quam purus aliquam nulla, vel posuere risus lorem eget risus.&nbsp;</span></div><div><span style="font-weight: 400; white-space: initial;">Mauris lobortis mollis bibendum. Mauris risus nulla, iaculis id diam id, finibus varius nibh.</span></div><div><span style="font-weight: 400; white-space: initial;">&nbsp;Aenean ipsum quam, accumsan et dictum eget, elementum ut velit.&nbsp;</span></div><div><span style="font-weight: 400; white-space: initial;">Sed rhoncus velit sed mi ornare, vitae auctor diam auctor. Curabitur quis dictum neque.&nbsp;</span></div><div><span style="font-weight: 400; white-space: initial;">Proin venenatis, odio eget ultricies viverra, erat nisl tincidunt est, at ultrices mauris lorem a nisl.</span></div></h3>';
    }
  };

  const layoutDragend = (e: React.DragEvent<HTMLDivElement>) => {
    for (
      var i = 0;
      i < document.getElementsByClassName("drag-border-plane").length;
      i++
    ) {
      document.getElementsByClassName("drag-border-plane")[0].className = "";
    }
  };
  const layoutDragleave = (e: React.DragEvent<HTMLDivElement>) => {
    for (
      var i = 0;
      i < document.getElementsByClassName("drag-border-plane").length;
      i++
    ) {
      document.getElementsByClassName("drag-border-plane")[0].className = "";
    }
  };

  function tabsclicked(obj: string) {
    // @ts-ignore
    document.getElementById("layoutbtn").className = "";
    // @ts-ignore
    document.getElementById("Homebtn").className = "";
    // @ts-ignore
    document.getElementById("Dateibtn").className = "";
    // @ts-ignore
    document.getElementById(obj).className = "is-active";
    if (obj === "layoutbtn") {
      // @ts-ignore
      document.getElementById("fonts").style.display = "none";
      // @ts-ignore
      document.getElementById("layouts").style.display = "";
    } else if (obj === "Homebtn") {
      // @ts-ignore
      document.getElementById("layouts").style.display = "none";

      // @ts-ignore
      document.getElementById("fonts").style.display = "";
    }
  }

  const addplane = () => {
    var pagediv = document.getElementById("page-div");
    var newdiv = document.createElement("div");
    newdiv.className = "plane";

    // @ts-ignore
    newdiv.id =
      "plane%" +
      (
        parseInt(
          // @ts-ignore

          pagediv.children[pagediv.children.length - 1].id.split("%")[1]
        ) + 1
      ).toString();

    // @ts-ignore
    newdiv.ondrop = (e: React.DragEvent<HTMLDivElement>) => layoutdrop(e);
    // @ts-ignore
    newdiv.ondragover = (e: React.DragEvent<HTMLDivElement>) =>
      layoutallowDrop(e);
    // @ts-ignore
    newdiv.ondragend = (e: React.DragEvent<HTMLDivElement>) => onDragEnd(e);
    // @ts-ignore
    newdiv.ondragend = (e: React.DragEvent<HTMLDivElement>) => layoutDragend(e);
    // @ts-ignore
    newdiv.ondragleave = (e: React.DragEvent<HTMLDivElement>) =>
      layoutDragend(e);
    // @ts-ignore
    newdiv.style = "height: 100%";
    // @ts-ignore
    pagediv.appendChild(newdiv);
    var planelist = document.getElementById("planelist");
    var newplanelistplane = document.createElement("div");
    newplanelistplane.className = "planelist-plane";
    // @ts-ignore
    newplanelistplane.id =
      "planelist-plane%" +
      (
        parseInt(
          // @ts-ignore
          planelist.children[planelist.children.length - 1].id.split("%")[1]
        ) + 1
      ).toString();

    // @ts-ignore
    planelist.appendChild(newplanelistplane);
  };
  document.addEventListener("click", function (evt) {
    var targetEl = evt.target; // clicked element
    var planelist = document.getElementById("planelist");
    //console.log("test");
    do {
      // @ts-ignore
      for (var i = 1; i < planelist.children.length; i++) {
        // @ts-ignore
        if (targetEl == planelist.children[i]) {
          // @ts-ignore

          if (
            // @ts-ignore

            planelist.children[i].style.border ===
            "2px solid rgb(165, 162, 250)"
          ) {
            // @ts-ignore
            planelist.children[i].style = "";
            return;
          }
          // @ts-ignore
          planelist.children[i].style = "border: 2px solid rgb(165, 162, 250)";
          return;
        }
      }
      // @ts-ignore

      // Go up the DOM
      // @ts-ignore
      targetEl = targetEl.parentNode;
    } while (targetEl);
    // @ts-ignore
    for (var i = 1; i < planelist.children.length; i++) {
      // @ts-ignore
      planelist.children[i].style = "";
    }
    // This is a click outside.
  });
  const removeplane = () => {
    var pagediv = document.getElementById("page-div");
    var planelist = document.getElementById("planelist");
    var list = [];
    // @ts-ignore
    for (var i = 1; i < planelist.children.length; i++) {
      // @ts-ignore
      if (
        // @ts-ignore
        planelist.children[i].style.border === "2px solid rgb(165, 162, 250)"
      ) {
        // @ts-ignore
        list.push(planelist.children[i]);
      }
    }
    // @ts-ignore
    for (var i = 0; i < list.length; i++) {
      //console.log(list[i].id);
      // @ts-ignore
      if (planelist.children.length > 2) {
        console.log(list[i].id.split("%")[1]);
        // @ts-ignore
        for (var j = 0; j < pagediv.children.length; j++) {
          // @ts-ignore
          if (
            // @ts-ignore
            pagediv.children[j].id ===
            "plane%" + list[i].id.split("%")[1].toString()
          ) {
            // @ts-ignore
            pagediv.children[j].remove();
          }
        }

        list[i].remove();
      }
    }
    list = [];
  };

  return (
    <>
      <header>
        <div className="tabs is-small tabs">
          <ul>
            <li id="Dateibtn">
              <a onClick={() => tabsclicked("Dateibtn")}>Datei</a>
            </li>
            <li className="is-active" id="Homebtn">
              <a onClick={() => tabsclicked("Homebtn")}>Home</a>
            </li>
            <li id="layoutbtn">
              <a onClick={() => tabsclicked("layoutbtn")}>Layout</a>
            </li>
            <li>
              <a>Designideen</a>
            </li>
          </ul>
        </div>
        <div className="verticalLine-right">
          <div className="fonts" id="fonts">
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
            <input
              min="0"
              className="input plane-number"
              type="number"
              id="plane-number"
            />
            <img
              src="/images/layouts/icons/textalgin_left.png"
              className="textalgin"
            />
            <img
              src="/images/layouts/icons/textalgin_center.png"
              className="textalgin"
            />
            <img
              src="/images/layouts/icons/textalgin_right.png"
              className="textalgin"
            />
            <img
              src="/images/layouts/icons/textalgin_justify.png"
              className="textalgin"
            />
          </div>

          <div className="layouts" id="layouts" style={{ display: "none" }}>
            <figure
              id="Title_left__Text_left__No_pic"
              className="image is-128x128"
              draggable="true"
              onDragStart={(e) => layoutdrag(e)}
            >
              <img src="images/layouts/Title_left__Text_left__No_pic.png" />
            </figure>
          </div>
        </div>
      </header>

      <div className="main-div">
        <div>
          <div className="planelist" id="planelist">
            <div>
              <a>
                <img
                  src="/images/layouts/icons/+.png"
                  draggable="false"
                  className="textalgin planesbuttons"
                  onClick={() => addplane()}
                />
              </a>
              <a>
                <img
                  src="/images/layouts/icons/-.png"
                  draggable="false"
                  className="textalgin planesbuttons"
                  onClick={() => removeplane()}
                />
              </a>
            </div>
            <div id="planelist-plane%1" className="planelist-plane"></div>
          </div>
          <div className="page-div" id="page-div">
            <div
              className="plane"
              id="plane%1"
              onDrop={(e) => layoutdrop(e)}
              onDragOver={(e) => layoutallowDrop(e)}
              style={{ height: "100%" }}
              onDragEnd={(e) => layoutDragend(e)}
              onDragLeave={(e) => layoutDragend(e)}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
