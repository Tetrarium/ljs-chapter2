
function cutOfExtraSpacingFromCodeElem(taskCodeElems) {
  if (!taskCodeElems) {
    return;
  }

  taskCodeElems.forEach(elem => {
    const { parentElement } = elem;

    if (!parentElement) {
      return;
    }

    const htmlCode = parentElement.innerHTML;
    const codeStrings = htmlCode.split('\n');

    const startIndex = Math.min(
      ...(codeStrings
        .map(str => str.search(/\s\S/) + 1)
        .filter(val => val !== 0))
    );

    const truncatedCodeStrings = codeStrings.map((str, index, arr) => {
      if (index === arr.length - 1) {
        return '';
      }

      const isTag = str.search(/<code \w*[^>]*>/gi) > -1 || str.search(/<\/code>/gi) > -1;
      const string = str.slice(startIndex);

      return isTag ? string : `<span class="code-line">${string}</span>`;
    });

    parentElement.innerHTML = truncatedCodeStrings.join('\n');
  });
}

const addNumLine = cutOfExtraSpacingFromCodeElem;
export default addNumLine;
