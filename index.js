function getFirstSelector (selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < list.length; i++) {
  list[i].innerHTML = parseInt(list[i].innerHTML) + 1;
  }
}

function deepestChild() {
 let gNode = document.querySelector('div#grand-node');
 let deepest = false;
 let anotherDiv = "div"
 while(deepest === false) {
   gNode = document.querySelector(`div#grand-node ${anotherDiv}`);
   anotherDiv += " div"
   if (document.querySelector(`div#grand-node ${anotherDiv}`) === null) {
     deepest = true;
   }
 }
 return gNode;
}
