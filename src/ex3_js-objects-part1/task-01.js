function createObject() {
  var obj = {
    name: "Elena",
    age: 40
  };
  console.log(obj);

  obj.family = {
    husband: "Nick",
    son: "Volodya",
    cat: "Busya"
  };
  console.log(obj);

  delete obj.family.cat;
  return obj;
}

module.exports = createObject;
