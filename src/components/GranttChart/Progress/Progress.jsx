import { useRef } from "react";
import React from "react";
import "./Progress.css"

function Progress(props) {
  var pos, deltaX;
  const ele = useRef();

  const mouseDown = (e) => {
    e = e || window.event;
    e.preventDefault();
    ele.current.style.position = "relative";
    // let x = e.target.offsetWidth;
    // console.log(x);
    // console.log(e.clientX)
    // get the mouse cursor position at startup:
    pos = e.clientX;

    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  };

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    deltaX = e.clientX - pos;

    pos = e.clientX;
    console.log(e.target.offsetWidth);

    // set the element's new position:
    if (e.target.className === "progress-child-right") {
      e.target.parentNode.style.width =
        e.target.parentNode.offsetWidth + deltaX + "px";
    }
    // for (var i in e.target) {
    //   console.log("====>", i);
    // }
    if (e.target.className === "progress-child-left") {
      e.target.parentNode.style.width =
        e.target.parentNode.offsetWidth - deltaX + "px";
      ele.current.style.left = ele.current.offsetLeft + deltaX + "px";
    }
    console.log(e.target.parentNode);
    if (e.target.className === "progress-child-center") {
      ele.current.style.left = ele.current.offsetLeft + deltaX + "px";
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }

  return (
    <div className="progress" onMouseDown={mouseDown} ref={ele}>
      {props.children}
    </div>
  );
}

export default Progress;