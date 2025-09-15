class RandomizedSet {
  private arr: Array<number>;
  private hash: Map<number, number>;
  constructor() {
    this.arr = new Array<number>();
    this.hash = new Map<number, number>();
  }

  insert(val: number): boolean {
    if (this.hash.has(val)) {
      return false;
    }
    this.hash.set(val, this.arr.length);
    this.arr.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.hash.has(val)) {
      return false;
    }
    const last = this.arr[this.arr.length - 1];
    const index = this.hash.get(val);
    if (!index) return false;
    this.arr[index] = last;
    this.hash.set(last, index);
    this.arr.pop();
    this.hash.delete(val);
    return true;
  }

  getRandom(): number {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
