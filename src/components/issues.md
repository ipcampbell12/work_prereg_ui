Changes Made:
Button onClick handlers: Changed onClick={editing ? saveChanges(e) : turnOnEditing} to onClick={editing ? saveChanges : turnOnEditing} to ensure the functions are passed correctly as event handlers.
Form Handling: Ensure saveChanges is only called when the form is submitted by wrapping it in a function instead of immediately invoking it.
This should resolve the "e is not defined" error and ensure that the event handlers are set up correctly.






