import React from "react";
import "./TopButton.css";

export default function TopButton({ theme, skills }) {
  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function GoDownEvent() {
    const skills = document.getElementById("skills");
    skills.scrollIntoView(true);
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      document.getElementById("topButton").style.visibility = "visible";
      document.getElementById("downButton").style.visibility = "hidden";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
      document.getElementById("downButton").style.visibility = "visible";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  const onMouseEnter = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("topButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    const downButton = document.getElementById("downButton");
    downButton.style.color = color;
    downButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  const onMouseLeave = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("topButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    const downButton = document.getElementById("downButton");
    downButton.style.color = color;
    downButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  return (
    <>
      <div
        onClick={GoDownEvent}
        id="downButton"
        style={{
          color: theme.body,
          backgroundColor: theme.text,
          border: `solid 1px ${theme.text}`,
          visibility: skills ? "visible" : "hidden",
        }}
        title="Go Down"
        onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
        onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
      >
        <i class="fas fa-arrow-down" id="arrow" aria-hidden="true" />
      </div>

      <div
        onClick={GoUpEvent}
        id="topButton"
        style={{
          color: theme.body,
          backgroundColor: theme.text,
          border: `solid 1px ${theme.text}`,
        }}
        title="Go up"
        onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
        onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
      >
        <i class="fas fa-arrow-up" id="arrow" aria-hidden="true" />
      </div>
    </>
  );
}
