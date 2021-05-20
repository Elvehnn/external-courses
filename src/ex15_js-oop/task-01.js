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
gift.push(new Chocolate('Белочка', 30, 'nuts'));
gift.push(new Chocolate('Красная шапочка', 20, 'waffle'));
gift.push(new Chocolate('Мишка на севере', 20, 'waffle'));
gift.push(new Lollipop('Дюшес', 15, 'melted sugar'));


let totalWeight = gift.reduce((sum, item) => sum + item.weight, 0);
console.log(`Общий вес подарка: ${totalWeight} г`);

let sortedGift = (param) => {
  return gift.sort((a, b) => a[param] > b[param] ? 1 : -1);
};
console.log('Сортировка по весу:')
sortedGift('weight').forEach((item) =>{
  console.log(`${item.name}, ${item.weight} г`)
});

let findCandy = (string) => {
  return gift.find(item => item.name === string);
};
console.log('Найти конфету по названию: "Дюшес"');
console.log(findCandy('Дюшес'));