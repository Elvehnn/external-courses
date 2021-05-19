function Candy(name, weight) {
    this.name = name;
    this.weight = weight;
}
  
Candy.prototype.getWeight = function() {
    console.log(`Вес: ${this.weight}`);
};
Candy.prototype.getName = function() {
    console.log(`Название: ${this.name}`);
};

function Chocolate(name, weight, topping) {
    this.type = 'chocolate';
    this.topping = topping;
    Candy.call(this, name, weight);
}

Chocolate.prototype = Candy.prototype;

function Lollipop(name, weight, topping) {
    this.type = 'lollipop';
    this.topping = topping;
    Candy.call(this, name, weight);
}

Lollipop.prototype = Candy.prototype;

const gift = [];
gift.push(new Chocolate('Belochka', 30, 'nuts'));
gift.push(new Chocolate('Red Riding Hood', 20, 'waffle'));
gift.push(new Chocolate('Bear in the north', 20, 'waffle'));
gift.push(new Lollipop('Golden key', 5, 'melted sugar'));


let totalWeight = gift.reduce((sum, item) => sum + item.weight, 0);
// console.log(`Общий вес подарка: ${totalWeight} г`);

let sortedGift = (param) => {
  if (typeof(param) === 'string') {
    return gift.sort(function (a, b) {
      return a[param] < b[param];
    });
  }
};
console.log(sortedGift(name));

let findCandy = (string) => {
  return gift.find(item => item.name === string);
};
// console.log(findCandy('Golden key'));