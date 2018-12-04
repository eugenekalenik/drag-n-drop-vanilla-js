const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill listeners

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  console.log('start');
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  console.log('end');
  this.className = 'fill';
}

function dragOver(e) {
  console.log('over');
  e.preventDefault();
}

function dragEnter(e) {
  console.log('enter');
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  console.log('leave');
  this.className = 'empty';
}

function dragDrop() {
  console.log('drop');
  this.className = 'empty';
  this.append(fill);
}