const createElement = (tag, className) => {
  const elTag = document.createElement(tag);
  if (className) {
    elTag.classList.add(className);
  }
  return elTag;
};

// function createElement(tag, className) {
//   const elTag = document.createElement(tag);

//   if (className) {
//     elTag.classList.add(className);
//   }
//   return elTag;
// }

export default createElement;
