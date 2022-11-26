window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
  console.log(header);
});


let leavesContainer = document.querySelector('.leaves-container');

const createLeave = () => {
  // make leaves
  let leaves = document.createElement('span');
  leaves.className = "leaves";

  minSize = 5;
  maxSize = 10;

  // choose the size of leaves randomly
  let leafSize = Math.random() * (maxSize - minSize) + minSize;

  leaves.style.width = leafSize + 'px';
  leaves.style.height = leafSize + 'px';

  leaves.style.left = Math.random() * 100 + '%';

  leavesContainer.appendChild(leaves);

  // The leaves will dissapear after 10sec

  setTimeout(() => {
    leaves.remove();
  }, 30000);
};

setInterval(createLeave, 100);
