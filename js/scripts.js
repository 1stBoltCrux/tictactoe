function Player(name,) {
  this.name = name;
}
function Board(space) {
this.space = space;
}

Board.prototype.arraySpace(){
  spaceArray = [];
  for (var i = 0; i < space.length; i++) {
    var space = space[i]
    spaceArray.push(space);
    console.log()
    }
}
$(document).ready(function(){

var player1 = new Player(x);
var player2 = new Player(o);

var space = new Board([0,1,2,3,4,5,6,7,8]);
space.arraySpace(space);

});
