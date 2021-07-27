class Cell {
  constructor(x, y) {
    this.live = false;
    this.nextGeneration = false;
    this.adjacent = 0;
    this.x = x;
    this.y = y;
  }
  setLive() {
    this.live = true;
  }
  setDead() {
    this.live = false;
  }
  findNeighbors(board) {
    if(this.live === true){
        this.adjacent = -1
    }else{
        this.adjacent = 0
    }
   
    for (let ly = this.y - 1; ly < this.y + 2; ly++) {
      if (ly >= 0 && ly < board.length) {
        for (let lx = this.x - 1; lx < this.x + 2; lx++) {
          if(lx>=0 && lx < board[ly].length){
              if(board[ly][lx].live === true && [lx, ly] !== [this.x, this.y]){
                  this.adjacent += 1
              }
          }
        }
      }
    }
    if(this.adjacent === 3 ){
        this.nextGeneration = true
    }

    if(this.live === true && this.adjacent===2){
        this.nextGeneration = true
    }

    if(this.adjacent <= 1  ){
        this.nextGeneration = false
    }

    if(this.adjacent > 3 ){
        this.nextGeneration = false
    }
  }
  updateGeneration(){
      this.live = this.nextGeneration
  }
  renderCell(board, gridSize) {
    if (this.live === false) {
      board.strokeStyle = "blue";
      board.beginPath();
      board.arc(
        this.x * gridSize + gridSize / 2,
        this.y * gridSize + gridSize / 2,
        2,
        0,
        2 * Math.PI
      );
      board.stroke();
    } else {
      board.strokeStyle = "red";
      board.beginPath();
      board.arc(
        this.x * gridSize + gridSize / 2,
        this.y * gridSize + gridSize / 2,
        16,
        0,
        2 * Math.PI
      );
      board.stroke();
    }
  }
}

export default Cell;
