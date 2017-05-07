class Insertion {
  public numbersLast: number;
  private i;
  private j;
  constructor(public whichArray){}

  Sort = () => {
    this.numbersLast = this.whichArray.length - 1;
    for (this.i = this.numbersLast; this.i >= 0; this.i-- ){
      for (this.j = this.i - 1; this.j >= 0; this.j--){
        if(this.whichArray[this.i] < this.whichArray[this.j]){
          [this.whichArray[this.i], this.whichArray[this.j]] = [this.whichArray[this.j], this.whichArray[this.i]];
        }
      }
    }
    return this.whichArray;
  }
};