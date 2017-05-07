class PushRandoms {
  public numbers = [];
  constructor(public howMany: number, public howFar: number){}
  pushRandoms = () => {
    for (let i = 0; i < this.howMany; i++ ){
      this.numbers.push(Math.floor(Math.random() * this.howFar) + 1);
    }
  return this.numbers;
  }
};