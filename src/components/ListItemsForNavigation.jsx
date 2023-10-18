/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience

export function ListItemsForNavigation({ listItems }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeItemRef = useRef();

  useEffect(
    function () {
      if (activeItemRef) activeItemRef.current.focus();
    },
    [selectedIndex]
  );

  function handleKeyDown(event) {
    const { key } = event;
    if (key == "ArrowRight" || key == "ArrowUp") {
      event.preventDefault();
      if (selectedIndex < listItems.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      }
    } else if (key == "ArrowLeft" || key == "ArrowDown") {
      event.preventDefault();
      if (selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    }
    // Add the proper logic to calculate the index that correspond to the item that should be focused.
  }

  return (
    <ul onKeyDown={handleKeyDown}>
      {listItems.map((item, i) => (
        <li
          key={i}
          tabIndex={0}
          ref={selectedIndex === i ? activeItemRef : null}
        >
          {item}
        </li>
      ))}
     
    </ul>
  );
}
