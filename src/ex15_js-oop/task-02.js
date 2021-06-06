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

const apartment = [];
apartment.push(new Domestic('кухня', 'холодильник', 200, 'true'));
apartment.push(new Domestic('зал', 'телевизор', 100, 'true'));
apartment.push(new Lighting(5, 'зал', 'люстра', 300, 'false'));
apartment.push(new Domestic('кухня', 'микроволновка', 1000, 'false'));
apartment.push(new Lighting(3, 'кухня', 'люстра', 180, 'false'));
console.log(`Список электроприборов в квартире:`);
console.log(apartment);

const totalPower = apartment.reduce((sum, item) => sum + item.power, 0);
console.log(
	`Потребляемая мощность электроприборов в квартире: ${totalPower / 1000} КВт`
);

let roomDevices = (string) => {
	return appartment.filter((item) => item.room === string.toLowerCase());
};
console.log('Электроприборы на кухне:');
roomDevices('Кухня').forEach((item) => console.log(item.name));

let findDevice = (string) => {
	return apartment.find((item) => item.name === string);
};
console.log('Найти прибор по названию: "телевизор"');
console.log(findDevice('телевизор'));
