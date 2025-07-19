interface Container<T> {
    items: T[];
    addItem(item:T): void;
    getItem(index: number):T | undefined;
}

const numberContainer: Container<number> = {
  items: [],
  addItem(item: number) {
    this.items.push(item);
  },
  getItem(index: number) {
    return this.items[index];
  }
};

const stringContainer: Container<string> = {
  items: [],
  addItem(item: string) {
    this.items.push(item);
  },
  getItem(index: number) {
    return this.items[index];
  }
};

numberContainer.addItem(5);
numberContainer.addItem(15);
console.log(numberContainer.getItem(1));
stringContainer.addItem("hello");
stringContainer.addItem("world");
console.log(stringContainer.getItem(0));

function getLastElement<T>(items: T[]): T | undefined {
  if (items.length === 0) return undefined;
  return items[items.length - 1];
}

console.log(getLastElement(numberContainer.items));
console.log(getLastElement(stringContainer.items));