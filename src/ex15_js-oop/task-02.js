class Devices {
    constructor(name, power, plugged) {
      this.name = name;
      this.plugged = plugged;
      this.power = power;
    }
    isPlugged() {
      return this.plugged;
    }
    setPlugged() {
      this.plugged = true;
    }
  }
  
  class Domestic extends Devices {
    constructor(room, ...args) {
      super(...args);
      this.room = room;
    }
  }
  
  class Lighting extends Domestic {
    constructor(lampsNumber, ...args) {
      super(...args);
      this.lampsNumber = lampsNumber;
    }
  }
  
  const appartment = [];
  appartment.push(new Domestic('кухня','холодильник',200,'true'));
  appartment.push(new Domestic('зал','телевизор', 100, 'true'));
  appartment.push(new Lighting(5, 'зал', 'люстра', 300, 'false'));
  appartment.push(new Domestic('кухня','микроволновка', 1000, 'false'));
  appartment.push(new Lighting(3, 'кухня', 'люстра', 180, 'false'));
  console.log(`Список электроприборов в квартире:`);
  console.log(appartment);
  
  const totalPower = appartment.reduce((sum, item) => sum + item.power, 0);
  console.log(`Потребляемая мощность электроприборов в квартире: ${totalPower /1000} КВт`);
  
  let roomDevices = (string) => {
    return appartment.filter(item => item.room === string.toLowerCase());
  };
  console.log('Электроприборы на кухне:');
  roomDevices('Кухня').forEach(item => console.log((item.name)))
  
  let findDevice = (string) => {
    return appartment.find(item => item.name === string);
  };
  console.log('Найти прибор по названию: "телевизор"');
  console.log(findDevice('телевизор'));