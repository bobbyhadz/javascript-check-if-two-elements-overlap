console.log('bobbyhadz.com');

function elementsOverlap(el1, el2) {
  const domRect1 = el1.getBoundingClientRect();
  const domRect2 = el2.getBoundingClientRect();

  return !(
    domRect1.top > domRect2.bottom ||
    domRect1.right < domRect2.left ||
    domRect1.bottom < domRect2.top ||
    domRect1.left > domRect2.right
  );
}

const el1 = document.getElementById('box1');
const el2 = document.getElementById('box2');
const el3 = document.getElementById('box3');

console.log(elementsOverlap(el1, el2)); // 👉️ true

console.log(elementsOverlap(el1, el3)); // 👉️ false
