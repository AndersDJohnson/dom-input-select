export default function domInputSelect(node) {
  if ('selectionStart' in node) {
    node.selectionStart = 0
    node.selectionEnd = 9999
  } else {
    node.select()
  }
}
