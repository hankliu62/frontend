export function copyTextToClipboard(
  input: string,
  { target = document.body } = {}
) {
  const element = document.createElement("textarea");
  const previouslyFocusedElement = document.activeElement;

  element.value = input;

  // Prevent keyboard from showing on mobile
  element.setAttribute("readonly", "");

  element.style.contain = "strict";
  element.style.position = "absolute";
  element.style.left = "-9999px";
  element.style.fontSize = "12pt"; // Prevent zooming on iOS

  const selection = document.getSelection();
  let originalRange: false | Range = false;
  if (selection.rangeCount > 0) {
    originalRange = selection.getRangeAt(0);
  }

  target.append(element);
  element.select();

  // Explicit selection workaround for iOS
  element.selectionStart = 0;
  element.selectionEnd = input.length;

  let isSuccess = false;
  try {
    isSuccess = document.execCommand("copy");
  } catch {}

  element.remove();

  if (originalRange) {
    selection.removeAllRanges();
    selection.addRange(originalRange);
  }

  // Get the focus back on the previously focused element, if any
  if (previouslyFocusedElement) {
    // @ts-expect-error
    previouslyFocusedElement.focus();
  }

  return isSuccess;
}
