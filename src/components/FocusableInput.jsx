/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */

import React, { useEffect, useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

const TextInput = React.forwardRef((props, ref) => {
  return <Input ref={ref ? ref : null} {...props}></Input>;
});

// Implement:
// When the focused prop is changed from false to true,
// and the input is not focused, it should receive focus.
// If focused prop is true, the input should receive the focus.
export function FocusableInput({ focusable = true, ...props }) {
  const inputRef = useRef(null);
  useEffect(() => {
    if (focusable && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Implement
  return (
    <TextInput data-testid="focusable-input" autoFocus={focusable} ref={inputRef} {...props}></TextInput>
  );
}
