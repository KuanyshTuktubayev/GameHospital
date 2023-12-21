const ownerships = {
	none: 'none',
	rented: 'rented',
	owned: 'owned'
};
class Employee {
	constructor(photo, name, iq, education, salary) {
		this.id = this._GetUniqueId();
		this.photo = photo;
		this.name = name || 'NoName';
		this.iq = iq || 50; //30..145
		this.education = education || 0; //сколько классов закончил в школе 0..12
		this.salary = salary || 1; //зарплата
		const minAge = 18;
		const maxAge = 63;
		this.age = minAge + Math.floor(Math.random() * (maxAge - minAge + 1)); //возраст 18..63
		const minHeight = 150;
		const maxHeight = 210;
		this.height = minHeight + Math.floor(Math.random() * (maxHeight - minHeight + 1)); //рост 140..210
		const minWeight = 50;
		const maxWeight = 100;
		this.weight = minWeight + Math.floor(Math.random() * (maxWeight - minWeight + 1)); //вес 45..100
		this.experience = 0; //опыт - сколько задач выполнил
		this.seniority = 0; //стаж, сколько дней работает тут
		this.morality = 50; //мораль-выносливость 0%..100%
		this.durationInJob = 0; //сколько часов находится на работе сегодня
		this.satisfaction = 50; //удовлетворенность-довольство зарплатой 0%..100%
		this.independence = 0; //самостоятельность, может ли работать сам, 0%..100%
		this.doingNow = ''; //что делает сейчас
		this.courses = 0; //сколько курсов обучения прошел
		this.lazyness = ''; //характеристика о лени
	}
	_GetUniqueId(length=16) {
		return parseInt(Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace(".", ""))
	}
	calculateSatisfaction(expectedSalary) {
		const diff = expectedSalary - this.salary;
		if (diff >= 0) {
			this.satisfaction = 100;
		} else {
			this.satisfaction = 50 + (diff / expectedSalary) * 50; // calculate satisfaction based on the difference between the employee's salary and the expected salary
		}
	}
}
class Doctor extends Employee {
	constructor(photo, name, iq, education, salary, specialization, golf) {
		super(photo, name, iq, education, salary);
		this.specialization = specialization || 'unknown';
		this.golf = golf || 0;

		//вакансия: iq образование зарплата
		//кандидат: (тип врача) фото имя, возраст, iq рост вес образование зарплата
		//приянт: номер фото имя возраст рост вес гольф iq образование опыт стаж мораль зарплата 
		//на работе х часов сегодня
		//довольство зарплатой
		//может ли работать сам
		//что делает сейчас
		//сколько курсов прошел
		//характеристика о лени
	}
}
class Nurse extends Employee {
	constructor(photo, name, iq, education, salary, body) {
		super(photo, name, iq, education, salary);
		this.chest = body.chest || 80; //грудь
		this.waist = body.waist || 50; //талия
		this.hips = body.hips || 80; //бёдра
	}
	//вакансия - грудь, образование, зарплата
	//кандидат: фото имя возраст рост вес фигура образование зарплата
	//принят: номер фото имя рост вес возраст грудь талия бедра iq образование опыт стаж мораль зарплата на_работе
	//довольство зарплатой
	//может ли работать сам
}
class Storeman extends Employee {
	constructor(photo, name, iq, education, salary, liver) {
		super(photo, name, iq, education, salary);
		this.liver = liver; //уровень печени для алкоголя 0..100%
		//вакансия: печень образование зарплата
		//кандидат: фото имя возраст рост вес печень образование зарплата
		//принят: номер фото имя номер возраст рост вес iq 
		//печень единиц 
		//образование 1-11 классов 
		//стаж в днях (сколько работает тут)
		//мораль %
		//зарплата
		//на работе сегодня х часов
		//довольство зарплатой
		//может ли работать сам

	}
}
class Driver extends Employee {
	constructor(photo, name, iq, education, salary, risk) {
		super(photo, name, iq, education, salary);
		this.risk = risk; //уровень риска в гонках 0..100%
	}
	//вакансия: риск_рейтинг образование зарплата
	//кандидат: имя iq рост вес образование зарплата
	//принят: номер имя возврас рост вес риск iq образование опыт стаж мораль зарплата на_работе довольство может_ли_сам
}
class Cook extends Employee {
	constructor(photo, name, iq, education, salary, hygiene) {
		super(photo, name, iq, education, salary);
		this.hygiene = hygiene; //гигиена 0..100%
	}
	//вакансия: гигиена образование зарплата
	//кандидат: имя возраст рост вес iq образование зарплата
	//принят: номер возраст рост вес гигиена iq образование опыт стаж мораль зарплата на_работе довольство может_ли_сам_работать

}
class Hooligan extends Employee {
	constructor(photo, name, iq, education, salary, punchLevel) {
		super(photo, name, iq, education, salary);
		this.punchLevel = punchLevel; //уровень удара, драчунства 0..100%
	}
	//вакансия: (slap head) punch_up_rating образование зарплата
	//кандидаты: (хулиган) имя возраст рост вес iq образование зарплата
	//принят: номер имя возраст рост вес iq вышибала_ед образование опыт стаж мораль зарплатана_работе довольство может_ли_сам_работать
}
class Thing {
	constructor(name, priceToBuy, priceToSell, state, image) {
		this.name = name;
		this.priceToBuy = priceToBuy;
		this.priceToSell = priceToSell;
		this.state = state;
		this.image = image;
	}
}
class InteriorItem extends Thing {
	constructor(name, priceToBuy, priceToSell, state, image) {
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class Table extends InteriorItem {
	constructor(name, priceToBuy, priceToSell, state, image) {
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class WoodenTable extends Table {
	constructor(priceToBuy, priceToSell, state) {
		let name = 'деревянный стол';
		let image = './wooden_table.jpg';
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class PlasticTable extends Table {
	constructor(priceToBuy, priceToSell, state) {
		let name = 'пластиковый стол';
		let image = './plastic_table.jpg';
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class Chair extends InteriorItem {
	constructor(name, priceToBuy, priceToSell, state, image) {
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class WoodenChair extends Chair {
	constructor(priceToBuy, priceToSell, state) {
		let name = 'деревянный стул';
		let image = './wooden_chair.jpg';
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class PlasticChair extends Chair {
	constructor(priceToBuy, priceToSell, state) {
		let name = 'пластиковый стул';
		let image = './plastic_chair.jpg';
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class Decor extends InteriorItem {
	constructor(name, priceToBuy, priceToSell, state, image) {
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class Carpet extends InteriorItem {
	constructor(name, priceToBuy, priceToSell, state, image) {
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class ArtificialTurf extends Carpet {
	constructor(priceToBuy, priceToSell, state) {
		let name = 'искусственный газон';
		let image = './artificial_turf.jpg';
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class PersianRug extends Carpet {
	constructor(priceToBuy, priceToSell, state) {
		let name = 'персидский ковёр';
		let image = './persian_rug.jpg';
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class Supplies extends Thing {
	constructor(name, priceToBuy, priceToSell, state, image) {
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class Pen extends Supplies {
	constructor(name, priceToBuy, priceToSell, state) {
		let image = './pen.jpg';
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class Pencil extends Supplies {
	constructor(name, priceToBuy, priceToSell, state) {
		let image = './pencil.jpg';
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class Notebook extends Supplies {
	constructor(name, priceToBuy, priceToSell, state) {
		let image = './notebook.jpg';
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class Magazine extends Supplies {
	constructor(name, priceToBuy, priceToSell, state) {
		let image = './magazine.jpg';
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class Statoscope extends Supplies {
	constructor(name, priceToBuy, priceToSell, state) {
		let image = './statoscope.jpg';
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class Scalpel extends Supplies {
	constructor(name, priceToBuy, priceToSell, state) {
		let image = './scalpel.jpg';
		super(name, priceToBuy, priceToSell, state, image);
	}
}
class CircularClickCoordinates {
    constructor(centerX, centerY, radius) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }
    isPointInside(x, y) {
        const distance = Math.sqrt(Math.pow(x - this.centerX, 2) + Math.pow(y - this.centerY, 2));
        return distance <= this.radius;
    }
}
class EllipticalClickCoordinates {
    constructor(centerX, centerY, semiMajorAxis, semiMinorAxis) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.semiMajorAxis = semiMajorAxis;
        this.semiMinorAxis = semiMinorAxis;
    }
    isPointInside(x, y) {
        const normalizedX = (x - this.centerX) / this.semiMajorAxis;
        const normalizedY = (y - this.centerY) / this.semiMinorAxis;
        return (Math.pow(normalizedX, 2) + Math.pow(normalizedY, 2)) <= 1;
    }
}
class ClickCoordinates {
	constructor(x1, x2, y1, y2) {
		this.x1 = x1; 
		this.x2 = x2;
		this.y1 = y1;
		this.y2 = y2;
	}
}
class VacancyTypeCoordinates {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.buttonCancel = this.setCancel();
		this.buttonNurse = this.setNurse();
		this.buttonStoreman = this.setStoreman();
		this.buttonTherapist = this.setTherapist();
		this.buttonDentist = this.setDentist();
		this.buttonNeurologist = this.setNeurologist();
		this.buttonSurgeon = this.setSurgeon();
		this.buttonPathologist = this.setPathologist();
		this.buttonCook = this.setCook();
		this.buttonDriver = this.setDriver();
		this.buttonHooligan = this.setHooligan();
	}
	setCancel() {
		if (this.width === 800 && this.height === 600) {
			const circularButton = new CircularClickCoordinates(550, 505, 40);
			return circularButton;
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyTypeCoordinates.setCancel: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setNurse() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(210, 335, 20, 100);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyTypeCoordinates.setNurse: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setStoreman() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(364, 490, 20, 100);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyTypeCoordinates.setStoreman: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setTherapist() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(210, 335, 130, 210);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyTypeCoordinates.setTherapist: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setDentist() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(364, 490, 130, 210);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyTypeCoordinates.setDentist: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setNeurologist() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(208, 335, 240, 320);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyTypeCoordinates.setNeurologist: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setSurgeon() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(364, 490, 240, 320);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyTypeCoordinates.setSurgeon: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setPathologist() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(208, 335, 345, 425);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyTypeCoordinates.setPathologist: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setCook() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(364, 490, 345, 425);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyTypeCoordinates.setCook: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setDriver() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(208, 335, 454, 535);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyTypeCoordinates.setDriver: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setHooligan() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(364, 490, 454, 535);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyTypeCoordinates.setHooligan: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
}
class VacancyNurseCoordinates {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.buttonSalaryMore = this.setSalaryMore();
		this.buttonSalaryLess = this.setSalaryLess();
		this.buttonEducationMore = this.setEducationMore();
		this.buttonEducationLess = this.setEducationLess();
		this.buttonExperienceMore = this.setExperienceMore();
		this.buttonExperienceLess = this.setExperienceLess();
		this.buttonChestMore = this.setChestMore();
		this.buttonChestLess = this.setChestLess();
		this.buttonWaistMore = this.setWaistMore();
		this.buttonWaistLess = this.setWaistLess();
		this.buttonHipsMore = this.setHipsMore();
		this.buttonHipsLess = this.setHipsLess();
		this.buttonOK = this.setOK();
		this.buttonCancel = this.setCancel();
	}
	setSalaryMore() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(215, 240, 430, 450);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setSalaryMore: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setSalaryLess() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(215, 240, 460, 480);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setSalaryLess: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setEducationMore() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(295, 330, 430, 450);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setEducationMore: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setEducationLess() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(295, 330, 460, 480);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setEducationLess: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setExperienceMore() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(375, 405, 430, 450);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setExperienceMore: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setExperienceLess() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(375, 405, 460, 480);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setExperienceLess: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setChestMore() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(550, 580, 130, 155);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setChestMore: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setChestLess() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(550, 580, 165, 190);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setChestLess: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setWaistMore() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(550, 580, 215, 235);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setWaistMore: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setWaistLess() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(550, 580, 250, 275);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setWaistLess: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setHipsMore() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(550, 580, 305, 330);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setHipsMore: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setHipsLess() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(550, 580, 340, 360);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setHipsLess: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setOK() {
		if (this.width === 800 && this.height === 600) {
			const ellipticalButton = new EllipticalClickCoordinates(555, 410, 30, 20);
			return ellipticalButton;
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setOK: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setCancel() {
		if (this.width === 800 && this.height === 600) {
			const ellipticalButton = new EllipticalClickCoordinates(555, 460, 30, 20);
			return ellipticalButton;
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setCancel: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
}
class VacancyDoctorCoordinates {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.buttonSalaryMore = this.setSalaryMore();
		this.buttonSalaryLess = this.setSalaryLess();
		this.buttonEducationMore = this.setEducationMore();
		this.buttonEducationLess = this.setEducationLess();
		this.buttonExperienceMore = this.setExperienceMore();
		this.buttonExperienceLess = this.setExperienceLess();
		this.buttonOK = this.setOK();
		this.buttonCancel = this.setCancel();
	}
	setSalaryMore() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(215, 240, 430, 450);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyDoctorCoordinates.setSalaryMore: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setSalaryLess() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(215, 240, 460, 480);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyDoctorCoordinates.setSalaryLess: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setEducationMore() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(295, 330, 430, 450);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyDoctorCoordinates.setEducationMore: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setEducationLess() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(295, 330, 460, 480);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyDoctorCoordinates.setEducationLess: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setExperienceMore() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(375, 405, 430, 450);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyDoctorCoordinates.setExperienceMore: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setExperienceLess() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(375, 405, 460, 480);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyDoctorCoordinates.setExperienceLess: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setOK() {
		if (this.width === 800 && this.height === 600) {
			const ellipticalButton = new EllipticalClickCoordinates(550, 405, 25, 37);
			return ellipticalButton;
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyDoctorCoordinates.setOK: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setCancel() {
		if (this.width === 800 && this.height === 600) {
			const ellipticalButton = new EllipticalClickCoordinates(550, 460, 25, 37);
			return ellipticalButton;
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyDoctorCoordinates.setCancel: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
}
class CandidateCoordinates {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.buttonPrevious = this.setPrevious();
		this.buttonNext = this.setNext();
		this.buttonCancel = this.setCancel();
	}
	setPrevious() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(215, 245, 460, 480);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`CandidateCoordinates.setPrevious: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setNext() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(250, 280, 460, 480);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`CandidateCoordinates.setNext: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setCancel() {
		if (this.width === 800 && this.height === 600) {
			const ellipticalButton = new EllipticalClickCoordinates(555, 455, 25, 30);
			return ellipticalButton;
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`CandidateCoordinates.setCancel: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
}
class Location {
	constructor(name) {
		this.name = name;
	}
}
class Office extends Location {
	constructor(images) {
		super('Офис');
		this.image = images.background;
		this.pauseImage = images.pauseImage;
		this.pausedImage = images.pausedImage;
		this.goToHRImage = images.goToHRImage;
		this.goToAdministrationImage = images.goToAdministrationImage;
		this.goToRealtorImage = images.goToRealtorImage;
		this.selectingObjects = {
			none: 'none',
			pause: 'pause',
			hr: 'hr',
			administration: 'administration',
			realtor: 'realtor',
			street: 'street',
			help: 'help',
			news: 'news',
			money: 'money',
			menu: 'menu'
		};
		this.selectedObject = this.selectingObjects.none;
		this.windowCoors = this.setWindowCoors();
		this.hrDoorCoors = this.setHRCoors();
		this.adminDoorCoors = this.setAdminCoors();
		this.realtorDoorCoors = this.setRealtorCoors();
		this.pauseBtnCoors = this.setPauseCoors();
	}
	setWindowCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return new ClickCoordinates(5, 170, 60, 245);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setWindowCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setHRCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return new ClickCoordinates(697, 790, 6, 145);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setHRCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setAdminCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return new ClickCoordinates(691, 790, 182, 300);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setAdminCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setRealtorCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return new ClickCoordinates(689, 785, 340, 455);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setRealtorCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setPauseCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			const ellipticalButton = new EllipticalClickCoordinates(475, 225, 56, 82);
			return ellipticalButton;
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setPauseCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
}
class HR extends Location {
	constructor(images) {
		super('Отдел кадров');
		this.image = images.background;
		this.vacancyTypesImage = images.vacancyTypesImage;
		this.vacancyDoctorImage = images.vacancyDoctorImage;
		this.vacancyNurseImage = images.vacancyNurseImage;
		this.candidatesImage = images.candidatesImage;
		this.selectingObjects = {
			none: 'none',
			street: 'street',
			office: 'office',
			vacancy: 'vacancy',
			candidates: 'candidates',
			manage: 'manage',
			workingEmployees: 'workingEmployees',
			notworkingEmployees: 'notworkingEmployees',
			courses: 'courses',
			learnings: 'learnings',
			arrested: 'arrested',
			atHome: 'atHome',
			vacancyNurse: 'vacancyNurse',
			vacancyStoreman: 'vacancyStoreman',
			vacancyTherapist: 'vacancyTherapist',
			vacancyDentist: 'vacancyDentist',
			vacancyNeurologist: 'vacancyNeurologist',
			vacancySurgeon: 'vacancySurgeon',
			vacancyPathologist: 'vacancyPathologist',
			vacancyCook: 'vacancyCook',
			vacancyDriver: 'vacancyDriver',
			vacancyHooligan: 'vacancyHooligan',
			vacancyCancel: 'vacancyCancel',
			candidatePrevious: 'candidatePrevious',
			candidateNext: 'candidateNext',
			candidateThrow: 'candidateThrow',
			candidateHire: 'candidateHire',
		};
		this.windowCoors = this.setWindowCoors();
		this.officeDoorCoors = this.setOfficeCoors();
		this.vacancyCoors = this.setVacancyCoors();
		this.candidatesCoors = this.setCandidatesCoors();
		this.vacancyTypeCoords = new VacancyTypeCoordinates(this.image.width, this.image.height);
		this.vacancyDoctorCoords = new VacancyDoctorCoordinates(this.image.width, this.image.height);
		this.vacancyNurseCoords = new VacancyNurseCoordinates(this.image.width, this.image.height);
		this.candidateCoords = new CandidateCoordinates(this.image.width, this.image.height);
		this.choiceVacancyType = false;
		this.showNurseVacancy = false;
		this.showCandidates = false;
	}
	setWindowCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 10, x2: 178, y1: 20, y2: 115};
			return new ClickCoordinates(10, 178, 20, 115);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setWindowCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setOfficeCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 8, x2: 80, y1: 140, y2: 300};
			return new ClickCoordinates(8, 80, 140, 300);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setOfficeCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setVacancyCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 200, x2: 330, y1: 10, y2: 305};
			return new ClickCoordinates(200, 330, 10, 305);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setVacancyCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setCandidatesCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 390, x2: 575, y1: 260, y2: 310};
			return new ClickCoordinates(390, 575, 260, 310);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setCandidatesCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
}
class Administration extends Location {
	constructor(image) {
		super('Администрация');
		this.image = image;
		this.windowCoors = this.setWindowCoors();
		this.officeDoorCoors = this.setOfficeCoors();
	}
	setWindowCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 130, x2: 290, y1: 15, y2: 90};
			return new ClickCoordinates(130, 290, 15, 90);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setWindowCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setOfficeCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 10, x2: 100, y1: 10, y2: 115};
			return new ClickCoordinates(10, 100, 10, 115);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setOfficeCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
}
class Realtor extends Location {
	constructor(image) {
		super('Риелтор');
		this.image = image;
		this.windowCoors = this.setWindowCoors();
		this.officeDoorCoors = this.setOfficeCoors();
	}
	setWindowCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 140, x2: 310, y1: 15, y2: 105};
			return new ClickCoordinates(140, 310, 15, 105);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setWindowCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setOfficeCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 10, x2: 120, y1: 10, y2: 150};
			return new ClickCoordinates(10, 120, 10, 150);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setOfficeCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
}
class Street extends Location {
	constructor(image, office, hr, administration, realtor) {
		super('Улица');
		this.image = image;
		this.officeDoorCoors = this.setOfficeCoors();
		this.hrDoorCoors = this.setHRCoors();
		this.adminDoorCoors = this.setAdminCoors();
		this.realtorDoorCoors = this.setRealtorCoors();
		this.office = office;
		this.hr = hr;
		this.administration = administration;
		this.realtor = realtor;
		this.hospital = null;
	}
	setOfficeCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 35, x2: 180, y1: 60, y2: 158};
			return new ClickCoordinates(35, 180, 60, 158);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setOfficeCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setHRCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 35, x2: 189, y1: 185, y2: 279};
			return new ClickCoordinates(35, 189, 185, 279);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setHRCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setAdminCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 30, x2: 185, y1: 310, y2: 375};
			return new ClickCoordinates(30, 185, 310, 375);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setAdminCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setRealtorCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 30, x2: 180, y1: 412, y2: 505};
			return new ClickCoordinates(30, 180, 412, 505);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setRealtorCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
}
class Hospital extends Location {
	constructor(name) {
		super(name);
		this.ownership = ownerships.none;
	}
	rent() {
		if (this.ownership === ownerships.rented) {
			console.log(`${this.name} already rented.`);
			return false;
		} else {
			this.ownership = ownerships.rented;
			console.log(`${this.name} rented.`);
			return true;
		}
	}
	buy() {
		if (this.ownership === ownerships.owned) {
			console.log(`${this.name} already bought.`);
			return false;
		} else {
			this.ownership = ownerships.owned;
			console.log(`${this.name} bought.`);
			return true;
		}
	}
}
class Room extends Hospital {
	constructor(name, price, square) {
		super(name);
		this.price = price;
		this.square = square;
		this.interiorItems = [];
		this.supplies = [];
	}
}
class Reception extends Room {
	constructor() {
		super('Ресепшен', 5, 4);
		this.interiorItems = [new WoodenTable(0, 120, 55), new WoodenChair(0, 12, 85), new ArtificialTurf(0, 110, 35)];
		this.supplies = [new Pen('шариковая ручка', 0, 8, 78)];
		this.clients = [];
	}
	sendClientToWaitingRoom(client, waitingRoom) {
		if (waitingRoom) {
			waitingRoom.clients.push(client);
		}
	}
}
class WaitingRoom extends Room {
	constructor() {
		super('Зал ожидания', 8, 7);
		this.interiorItems = [new PlasticChair(0, 9, 35), new WoodenChair(0, 12, 85), new PersianRug(0, 115, 37)];
		this.supplies = [new Magazine('автомобильный журнал', 0, 3, 46)];
		this.clients = [];
	}
}
class TherapistOffice extends Room {
	constructor() {
		super('Кабинет терапевта', 7, 6);
	}
}
class Vacancy {
	constructor(names, employeePhotos, education, salary) {
		this.names = names;
		this.employeePhotos = employeePhotos;
		this.education = education;
		this.salary = salary;
		this.publishTime = new Date();
		this.durationByMinutes = 120;
		this.candidates = [];
	}
	getChanceByEducation() {
		let chance = 0;
		if (this.education < 2) {
			chance += 0.2;
		} else if (this.education >= 2 && this.education < 5) {
			chance += 0.15;
		} else if (this.education >= 5 && this.education < 7) {
			chance += 0.1;
		} else if (this.education >= 7 && this.education < 9) {
			chance += 0.05;
		} else if (this.education >= 9 && this.education < 11) {
			chance -= 0.1;
		} else {
			chance -= 0.2;
		}
		return chance;
	}
	getChanceBySalary() {
		let chance = 0;
		if (this.salary < 10) {
			chance -= 0.05;
		} else if (this.salary >= 10 && this.salary < 13) {
			chance += 0.05;
		} else if (this.salary >= 13 && this.salary < 16) {
			chance += 0.1;
		} else if (this.salary >= 16 && this.salary < 20) {
			chance += 0.12;
		} else {
			chance += 0.15;
		}
		return chance;
	}
	calculateChance() {
		let chance = 0.5;
		chance += this.getChanceByEducation();
		chance += this.getChanceBySalary();
		const randomNumber = Math.random();
		return (randomNumber < chance);
	}
	getCommonGeneratedData() {
		const name = this.names[Math.floor(Math.random() * this.names.length)];
		const indexOfPhoto = Math.floor(Math.random() * this.employeePhotos.length);
		const photo = this.employeePhotos[indexOfPhoto];
		let education = this.education + Math.floor(Math.random() * 3) - 1;
		if (education < 0) {
			education = 0;
		}
		const minSalary = this.salary * 0.7;
		const maxSalary = this.salary * 1.3;
		let salary = Math.round( Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary ,0);
		if (salary <= 0) {
			const halfSalary = Math.round(this.salary * 0.5 ,0);
			salary = (halfSalary > 0) ? halfSalary : minSalary;
		}
		const iq = this.education * 10 + Math.floor(Math.random() * 50) - 25;
		return {photo, name, education, salary, iq};
	}
}
class VacancyDoctor extends Vacancy {
	constructor(names, employeePhotos, education, salary, specialization, golf) {
		super(names, employeePhotos, education, salary);
		this.specialization = specialization;
		this.golf = golf;
	}
	generateCandidates() {
		if (this.candidates.length > 15) {
			console.warn(`VacancyDoctor: generated ${this.candidates.length} candidates. Will not generate more.`);
			return;
		}
		if (this.calculateChance()) {
			const numCandidates = Math.floor(Math.random() * 4);
			for (let i = 0; i < numCandidates; i++) {
				const {photo, name, education, salary, iq} = super.getCommonGeneratedData();
				const minGolfLevel = this.golf * 0.7;
				const maxGolfLevel = this.golf * 1.3;
				const golf = Math.round( Math.floor(Math.random() * (maxGolfLevel - minGolfLevel + 1)) + minGolfLevel ,0);
				const candidate = new Doctor(photo, name, iq, education, salary, this.specialization, golf);
				this.candidates.push(candidate);
			}
		}
	}
}
class VacancyNurse extends Vacancy {
	constructor(names, employeePhotos, education, salary, chest) {
		super(names, employeePhotos, education, salary);
		this.body = {
			chest: chest,
			waist: 60,
			hips: 90,
		};
	}
	generateCandidates() {
		if (this.candidates.length > 15) {
			console.warn(`VacancyNurse: generated ${this.candidates.length} candidates. Will not generate more.`);
			return;
		}
		if (this.calculateChance()) {
			const numCandidates = Math.floor(Math.random() * 4);
			for (let i = 0; i < numCandidates; i++) {
				const {photo, name, education, salary, iq} = super.getCommonGeneratedData();
				const minChest = this.chest * 0.8;
				const maxChest = this.chest * 1.2;
				const chest = Math.round( Math.floor(Math.random() * (maxChest - minChest + 1)) + minChest ,0); //грудь
				const waist = this.waist + Math.floor(Math.random() * 10) - 5; //талия
				const hips = this.hips + Math.floor(Math.random() * 10) - 5; //бёдра
				const body = { chest, waist, hips };
				const candidate = new Nurse(photo, name, iq, education, salary, body);
				this.candidates.push(candidate);
			}
		}
	}
}
class VacancyStoreman extends Vacancy {
	constructor(names, employeePhotos, education, salary, liver) {
		super(names, employeePhotos, education, salary);
		this.liver = liver;
	}
	getChanceByAge() {
		let chance = -0.05;
		if (this.age < 22) {
			chance += 0.15;
		} else if (this.age >= 22 && this.age < 25) {
			chance += 0.12;
		} else if (this.age >= 25 && this.age < 30) {
			chance += 0.1;
		} else if (this.age >= 30 && this.age < 36) {
			chance += 0.08;
		} else if (this.age >= 36 && this.age < 40) {
			chance -= 0.05;
		} else {
			chance -= 0.1;
		}
		return chance;
	}
	hasChance() {
		const chanceByAge = this.getChanceByAge();
		return super.calculateChance(chanceByAge);
	}
	generateCandidates() {
		if (this.candidates.length > 15) {
			console.warn(`VacancyStoreman: generated ${this.candidates.length} candidates. Will not generate more.`);
			return;
		}
		if (this.hasChance()) {
			const numCandidates = Math.floor(Math.random() * 4);
			for (let i = 0; i < numCandidates; i++) {
				const {photo, name, education, salary, iq} = super.getCommonGeneratedData();
				const minLiver = this.liver * 0.7;
				const maxLiver = this.liver * 1.3;
				const liver = Math.round( Math.floor(Math.random() * (maxLiver - minLiver + 1)) + minLiver ,0);
				const candidate = new Doctor(photo, name, iq, education, salary, liver);
				this.candidates.push(candidate);
			}
		}
	}
}
class VacancyCook extends Vacancy {
	constructor(names, employeePhotos, education, salary, hygiene) {
		super(names, employeePhotos, education, salary);
		this.hygiene = hygiene;
	}
	getChanceByAge() {
		let chance = -0.05;
		if (this.age < 23) {
			chance -= 0.05;
		} else if (this.age >= 23 && this.age < 25) {
			chance += 0.15;
		} else if (this.age >= 25 && this.age < 30) {
			chance += 0.12;
		} else if (this.age >= 30 && this.age < 35) {
			chance += 0.08;
		} else if (this.age >= 35 && this.age < 40) {
			chance += 0.05;
		} else {
			chance += 0.1;
		}
		return chance;
	}
	hasChance() {
		const chanceByAge = this.getChanceByAge();
		return super.calculateChance(chanceByAge);
	}
	generateCandidates() {
		if (this.candidates.length > 15) {
			console.warn(`VacancyCook: generated ${this.candidates.length} candidates. Will not generate more.`);
			return;
		}
		if (this.hasChance()) {
			const numCandidates = Math.floor(Math.random() * 4);
			for (let i = 0; i < numCandidates; i++) {
				const {photo, name, education, salary, iq} = super.getCommonGeneratedData();
				const minHygiene = this.hygiene * 0.7;
				const maxHygiene = this.hygiene * 1.3;
				const hygiene = Math.round( Math.floor(Math.random() * (maxHygiene - minHygiene + 1)) + minHygiene ,0);
				const candidate = new Cook(photo, name, iq, education, salary, hygiene);
				this.candidates.push(candidate);
			}
		}
	}
}
class VacancyDriver extends Vacancy {
	constructor(names, employeePhotos, education, salary, risk) {
		super(names, employeePhotos, education, salary);
		this.risk = risk;
	}
	getChanceByAge() {
		let chance = -0.05;
		if (this.age < 25) {
			chance += 0.15;
		} else if (this.age >= 25 && this.age < 28) {
			chance += 0.12;
		} else if (this.age >= 28 && this.age < 34) {
			chance += 0.10;
		} else if (this.age >= 34 && this.age < 40) {
			chance += 0.09;
		} else if (this.age >= 40 && this.age < 50) {
			chance += 0.05;
		} else {
			chance += 0.01;
		}
		return chance;
	}
	hasChance() {
		const chanceByAge = this.getChanceByAge();
		return super.calculateChance(chanceByAge);
	}
	generateCandidates() {
		if (this.candidates.length > 15) {
			console.warn(`VacancyDriver: generated ${this.candidates.length} candidates. Will not generate more.`);
			return;
		}
		if (this.hasChance()) {
			const numCandidates = Math.floor(Math.random() * 4);
			for (let i = 0; i < numCandidates; i++) {
				const {photo, name, education, salary, iq} = super.getCommonGeneratedData();
				const minRisk = this.risk * 0.7;
				const maxRisk = this.risk * 1.3;
				const risk = Math.round( Math.floor(Math.random() * (maxRisk - minRisk + 1)) + minRisk ,0);
				const candidate = new Cook(photo, name, iq, education, salary, risk);
				this.candidates.push(candidate);
			}
		}
	}
}
class VacancyHooligan extends Vacancy {
	constructor(names, employeePhotos, education, salary, punchLevel) {
		super(names, employeePhotos, education, salary);
		this.punchLevel = punchLevel;
	}
	getChanceByAge() {
		let chance = -0.05;
		if (this.age < 21) {
			chance += 0.16;
		} else if (this.age >= 21 && this.age < 25) {
			chance += 0.13;
		} else if (this.age >= 25 && this.age < 30) {
			chance += 0.1;
		} else if (this.age >= 30 && this.age < 35) {
			chance += 0.08;
		} else if (this.age >= 35 && this.age < 40) {
			chance += 0.05;
		} else {
			chance -= 0.05;
		}
		return chance;
	}
	hasChance() {
		const chanceByAge = this.getChanceByAge();
		return super.calculateChance(chanceByAge);
	}
	generateCandidates() {
		if (this.candidates.length > 15) {
			console.warn(`VacancyHooligan: generated ${this.candidates.length} candidates. Will not generate more.`);
			return;
		}
		if (this.hasChance()) {
			const numCandidates = Math.floor(Math.random() * 4);
			for (let i = 0; i < numCandidates; i++) {
				const {photo, name, education, salary, iq} = super.getCommonGeneratedData();
				const minPunchLevel = this.punchLevel * 0.7;
				const maxPunchLevel = this.punchLevel * 1.3;
				const punchLevel = Math.round( Math.floor(Math.random() * (maxPunchLevel - minPunchLevel + 1)) + minPunchLevel ,0);
				const candidate = new Cook(photo, name, iq, education, salary, punchLevel);
				this.candidates.push(candidate);
			}
		}
	}
}
class Client {
	constructor() {
		const illnesses = ['flu', 'headache', 'stomachache', 'back pain', 'depression', 'anxiety', 'insomnia', 'migraine', 'asthma', 'diabetes', 'hypertension', 'cancer', 'arthritis', 'allergies', 'heart disease'];
		const randomIllness = illnesses[Math.floor(Math.random() * illnesses.length)];
		this.illness = randomIllness;
		this.healthLevel = Math.floor(Math.random() * 100);
		this.isSearchHospital = true;
		this.searchingStartTime = 0;
		this.searchingDuration = Math.floor(Math.random() * 15) + 1;
		this.trusts = [];
	}
	choicePlayer(players) {
		if (this.isSearchHospital) {
			const elapsed = Date.now() - this.searchingStartTime;
			if (elapsed < this.searchingDuration) { // simulate delay
				return;
			}
			this.searchingStartTime = Date.now();
			if (!players || players.length === 0) {
				return;
			}
			const receptionsOfPlayers = players.filter(player => player.rooms.some(room => room instanceof Reception));
			if (receptionsOfPlayers.length > 0) { // Check if there are receptions
				const randomIndex = Math.floor(Math.random() * receptionsOfPlayers.length); // Choose a random player index
				const player = receptionsOfPlayers[randomIndex]; // Get the random player
				const reception = player.rooms.find(room => room instanceof Reception);
				if (reception) {
					reception.clients.push(newClient);
				}
			}
		}
	}
	kikOut(player) {
		const trust = this.getTrust(player);
		if (trust) {
			trust.score -= 10; // Decrease trust score by 10%
		} else {
			this.trusts.push({ player: player, score: 0 });
		}
	}
	help(player) {
		const trust = this.getTrust(player);
		if (trust) {
			trust.score += 10; // Increase trust score by 10%
		} else {
			this.trusts.push({ player: player, score: 10 });
		}
	}
	getTrust(player) {
		return this.trusts.find((trust) => trust.player === player);
	}
}
class Player {
	constructor(name, locations, employeeMalePhotos, employeesFemaleImage) {
		this.name = name;
		this.locations = locations;
		this.employeeMalePhotos = employeeMalePhotos;
		this.employeesFemaleImage = employeesFemaleImage;
		this.money = 100;
		this.vacancies = [];
		this.candidates = [];
		this.employees = [];
		this.rooms = [];
		this.currentLocation = this.locations.find(loc => loc instanceof Office);
		this.currentCandidate = null;
		this.maxReceptions = 1;
		this.maxWaitingRooms = 5;
		this.maxTherapistOffices = 10;
		this.newVacancy = null;
		this.clearNewVacancy();
	}
	goToLocation(newLocation) {
		this.currentLocation = newLocation;
		console.log(`change location to '${newLocation.name}'`);
	}
	clearNewVacancy() {
		this.newVacancy = null;
	}
	publishVacancy(vacancy) {
		this.vacancies.push(vacancy);
	}
	clearCandidates() {
		while(this.candidates.length > 0) {
			this.candidates.pop();
		}
		this.candidates = [];
	}
	updateCandidates() {
		this.clearCandidates();
		this.vacancies.forEach(vacancy => {
			vacancy.candidates?.forEach(candidate => {
				this.candidates.push(candidate);
			})
		});
	}
	updateCurrentCandidate() {
		const getFirstCandidate = function(vacancies) {
			if (!vacancies) {
				return null;
			}
			for (let i = 0; i < vacancies.length; i++) {
				if (vacancies[i].candidates.length > 0) {
					return vacancies[i].candidates[0];
				}
			}
			return null;
		}
		if (!this.vacancies || this.vacancies.length === 0) {
			this.currentCandidate = null;
			return;
		}

		if (this.currentCandidate === null) {
			this.currentCandidate = getFirstCandidate(this.vacancies);
		} else {
			const currentVacancy = this.vacancies.find(vacancy => vacancy.candidates.includes(this.currentCandidate));
			if (currentVacancy) {
				//dont change this.currentCandidate
			} else {
				console.warn(`selected candidate went away! Getting other candidate...`, this.currentCandidate);
				this.currentCandidate = getFirstCandidate(this.vacancies);
			}
		}
	}
	getPreviousCandidate() {
		if (!this.vacancies || this.vacancies.length === 0) {
            return null;
        }

		if (this.currentCandidate === null) {
			// Перебираем все вакансии, возвращаем первого кандидата из первой вакансии с кандидатами
			this.updateCurrentCandidate();
			return this.currentCandidate;
		} else {
			const currentVacancy = this.vacancies.find(vacancy => vacancy.candidates.includes(this.currentCandidate));
			const currentVacancyIndex = this.vacancies.indexOf(currentVacancy);
			
			if (currentVacancy.candidates.length > 1) {
				// Если текущий кандидат не первый в текущей вакансии,
				// вернем предыдущего кандидата этой вакансии
				const currentCandidateIndex = currentVacancy.candidates.indexOf(this.currentCandidate);
				if (currentCandidateIndex > 0) {
					return currentVacancy.candidates[currentCandidateIndex - 1];
				}

				// Если текущий кандидат первый в текущей вакансии
				// Ищем предыдущую вакансию с кандидатами
				for (let i = currentVacancyIndex - 1; i >= 0; i--) {
					if (this.vacancies[i].candidates.length > 0) {
						return this.vacancies[i].candidates[this.vacancies[i].candidates.length - 1];
					}
				}
			} else {
				// Если текущая вакансия имеет только одного кандидата
				// Переходим на предыдущую вакансию, если она есть и имеет кандидатов
				if (currentVacancyIndex > 0) {
					for (let i = currentVacancyIndex - 1; i >= 0; i--) {
						if (this.vacancies[i].candidates.length > 0) {
							return this.vacancies[i].candidates[this.vacancies[i].candidates.length - 1];
						}
					}
				}
			}
			
			// Если не найдено вакансии с кандидатами,
			// продолжаем двигаться вверх по вакансиям
			for (let i = this.vacancies.length - 1; i >= 0; i--) {
				if (this.vacancies[i].candidates.length > 0) {
					return this.vacancies[i].candidates[this.vacancies[i].candidates.length - 1];
				}
			}
		}
		return null;
	}
	getNextCandidate() {
		if (!this.vacancies || this.vacancies.length === 0) {
			return null;
		}

		if (this.currentCandidate === null) {
			// Перебираем все вакансии, возвращаем первого кандидата из первой вакансии с кандидатами
			this.updateCurrentCandidate();
			return this.currentCandidate;
		} else {
			const currentVacancy = this.vacancies.find(vacancy => vacancy.candidates.includes(this.currentCandidate));
			const currentVacancyIndex = this.vacancies.indexOf(currentVacancy);

			if (currentVacancy.candidates.length > 1) {
				// Если текущий кандидат не последний в текущей вакансии, вернем следующего кандидата
				const currentCandidateIndex = currentVacancy.candidates.indexOf(this.currentCandidate);
				if (currentCandidateIndex < currentVacancy.candidates.length - 1) {
					return currentVacancy.candidates[currentCandidateIndex + 1];
				}
			}
			
			// Если текущий кандидат последний в текущей вакансии, ищем первого кандидата из следующих вакансий
			for (let i = currentVacancyIndex + 1; i < this.vacancies.length; i++) {
				if (this.vacancies[i].candidates.length > 0) {
					return this.vacancies[i].candidates[0];
				}
			}
			
			// Если следующих вакансий нет, возвращаем первого кандидата начиная с первой вакансии
			for (let i = 0; i <= currentVacancyIndex; i++) {
				if (this.vacancies[i].candidates.length > 0) {
					return this.vacancies[i].candidates[0];
				}
			}
		}
		return null;
	}
	hireEmployee(vacancyIndex, candidateIndex) {
		const vacancy = this.vacancies[vacancyIndex];
		const candidate = vacancy.candidates[candidateIndex];
		const expectedSalary = candidate.salary;
		if (this.money >= expectedSalary) {
			candidate.calculateSatisfaction(expectedSalary);
			this.employees.push(candidate);
			this.money -= candidate.salary;
			this.vacancies.splice(vacancyIndex, 1);
		}
	}
	rentRoom(room) {
		if (room.ownership === ownerships.rented) {
			console.log(`player '${this.name}' already rented '${room.name}'`);
		} else if (this.money < room.price) {
			console.log(`player '${this.name}' does not have enough money to rent '${room.name}' which cost ${room.price} per day`);
		} else {
			let roomCount = 0;
			if (room instanceof Reception) {
				roomCount = this.rooms.filter(r => r instanceof Reception).length;
				if (roomCount >= this.maxReceptions) {
					console.log(`player '${this.name}' already rented max count of receptions`);
					return;
				}
			} else if (room instanceof WaitingRoom) {
				roomCount = this.rooms.filter(r => r instanceof WaitingRoom).length;
				if (roomCount >= this.maxWaitingRooms) {
					console.log(`player '${this.name}' already rented max count of waiting rooms`);
					return;
				}
			} else if (room instanceof TherapistOffice) {
				roomCount = this.rooms.filter(r => r instanceof TherapistOffice).length;
				if (roomCount >= this.maxTherapistOffices) {
					console.log(`player '${this.name}' already rented max count of therapist offices`);
					return;
				}
			}
			if (room.rent()) {
				this.rooms.push(room);
				this.money -= room.price;
			}
		}
	}
	buyRoom(room) {
		if (room.ownership === ownerships.owned) {
			console.log(`player '${this.name}' already bought '${room.name}'`);
		} else if (this.money < room.price) {
			console.log(`player '${this.name}' does not have enough money to buy '${room.name}' which cost ${room.price} per day`);
		} else {
			let roomCount = 0;
			if (room instanceof Reception) {
				roomCount = this.rooms.filter(r => r instanceof Reception).length;
				if (roomCount >= this.maxReceptions) {
					console.log(`player '${this.name}' already bought max count of receptions`);
					return;
				}
			} else if (room instanceof WaitingRoom) {
				roomCount = this.rooms.filter(r => r instanceof WaitingRoom).length;
				if (roomCount >= this.maxWaitingRooms) {
					console.log(`player '${this.name}' already bought max count of waiting rooms`);
					return;
				}
			} else if (room instanceof TherapistOffice) {
				roomCount = this.rooms.filter(r => r instanceof TherapistOffice).length;
				if (roomCount >= this.maxTherapistOffices) {
					console.log(`player '${this.name}' already bought max count of therapist offices`);
					return;
				}
			}
			if (room.buy()) {
				this.rooms.push(room);
				this.money -= room.price;
			}
		}
	}
	kikClientOut(client) {
		client.kikOut(this);
	}
	helpClient(client) {
		client.help(this);
	}
}
class Game {
	constructor(canvasElement, minuteDuration, imageFolder) {
		console.log(`game loading...`);
		this.canvas = canvasElement;
		this.ctx = this.canvas.getContext('2d');
		this.imageFolder = imageFolder;
		this.maleNames = ['Асылбек', 'Данияр', 'Ерасыл', 'Нұрлан', 'Теміржан', 'Айдос', 'Асқар', 'Әлихан', 'Назарбай', 'Мұрат', 'Әсет', 'Сырым', 'Жасұлан', 'Қайрат', 'Рауан', 'Серік', 'Талғат', 'Жандос', 'Арман', 'Тәуекел', 'Әлімжан', 'Айбала', 'Нұржан', 'Ержан', 'Нұрсұлтан', 'Бекзат', 'Азамат', 'Санжар', 'Сапар', 'Жүсіп', 'Жомарт', 'Айдар', 'Жанболат', 'Мәди', 'Самат', 'Жанат', 'Талғат', 'Бекжан', 'Марат', 'Бауыржан', 'Ермек', 'Нұрасыл', 'Жарас', 'Кеңес', 'Батыр', 'Қуаныш', 'Ғалым', 'Бөкейхан', 'Хақназар'];
		this.femaleNames = ['Айгерім', 'Айдана', 'Айша', 'Динара', 'Мадина', 'Нәзгүл', 'Сәуле', 'Айнұр', 'Айжан', 'Айсұлу', 'Аружан', 'Әсем', 'Жазира', 'Сымбат', 'Жайна', 'Айзада', 'Айым', 'Жанель', 'Гулденай', 'Сұлушаш', 'Маржан', 'Жанар', 'Толғанай', 'Нұрай', 'Шынар', 'Мөлдір', 'Ақмарал', 'Самал', 'Айна', 'Меруерт', 'Сәния', 'Айөлең', 'Тамырыс', 'Нұршекер', 'Руана', 'Жансая', 'Гүлзира', 'Еркежан', 'Нұрбике', 'Айзамал', 'Гауһар', 'Салтанат', 'Толқын', 'Ботакөз', 'Жұлдыз', 'Аруана', 'Күнсұлу', 'Асылтас', 'Дана', 'Қарлығаш'];
		this.employeeTypes = {
			doctor: 'доктор',
			nurse: 'медсестра',
			storeman: 'кладовщик',
			cook: 'повар',
			hooligan: 'вышибала', //bouncer
			driver: 'водитель-механик',
		};
		this.doctorSpecializations = {
			therapist: 'терапевт', //general doctor
			dentist: 'стоматолог', //dentist
			neurologist: 'невропатолог', //neurologist //psychiatrist
			surgeon: 'хирург', //surgeon
			pathologist: 'паталогоанатом', //pathologist
		};
		this.fps = 60;
		this.interval = 1000 / this.fps;
		this.startTime = new Date(2000, 0, 1, 0, 0, 0);
		this.clearTimeParams();
		this.minuteDuration = minuteDuration || 5000;
		this.players = [];
		this.locations = [];
		this.clients = [];
		this.isLoading = true;
		this.gameStarted = false;
		this.isPaused = false;
		this.canvas.addEventListener('click', (event) => this.handleCanvasClick(event));
		this.canvas.addEventListener('mousemove', (event) => this.handleCanvasMousemove(event));
		window.addEventListener('keydown', (event) => this.handleKeyDown(event));
        this.initializeStartImage();
		requestAnimationFrame(this.loop.bind(this));
	}
	#privateMethod() {
		//private method can be using only in this class, not accessable in child classes or anywhere
		console.log('private method');
	}
	_protectedMethod() {
		//protected method can be using in this class and in child classes, but not accessable from anywhere
		console.log('protected method');
	}
	publicMethod() {
		//public method can be using in this class, in child classes, and from anywhere
		console.log('public method');
	}
	get field1() {
		//getter method is public, uses to get value of any private property (variable)
		return this.field1;
	}
	set field1(value) {
		//setter method is public, uses to set new value to any private property (variable)
		this.field1 = value;
	}
	getField1() {
		return this.field1;
	}
	setField1(value) {
		this.field1 = value;
	}
	loadImage = (src) => {
		return new Promise((resolve, reject) => {
			const image = new Image();
			image.onload = () => resolve(image);
			image.onerror = (error) => reject(error);
			image.src = src;
		});
	};
	initializeStartImage() {
        const loadingImage = new Image();
        loadingImage.src = `${this.imageFolder}/loading.jpg`;
        loadingImage.onload = () => {
			this.loadingImage = loadingImage;
			if (this.loadingImage) {
				this.canvas.width = this.loadingImage.width;
				this.canvas.height = this.loadingImage.height;
			} else {
				this.canvas.width = loadingImage.width;
				this.canvas.height = loadingImage.height;
			}
			this.draw();
			Promise.all([
				this.loadImage(`${this.imageFolder}/mainmenu.jpg`),
				this.loadImage(`${this.imageFolder}/office.jpg`),
				this.loadImage(`${this.imageFolder}/pause.jpg`),
				this.loadImage(`${this.imageFolder}/officeDoorToHR.jpg`),
				this.loadImage(`${this.imageFolder}/officeDoorToAdministration.jpg`),
				this.loadImage(`${this.imageFolder}/officeDoorToRealtor.jpg`),
				this.loadImage(`${this.imageFolder}/street.jpg`),
				this.loadImage(`${this.imageFolder}/hr.jpg`),
				this.loadImage(`${this.imageFolder}/administation.jpg`),
				this.loadImage(`${this.imageFolder}/realtor.jpg`),
				this.loadImage(`${this.imageFolder}/paused.jpg`),
				this.loadImage(`${this.imageFolder}/vacancyChoice.jpg`),
				this.loadImage(`${this.imageFolder}/vacancyDoctor.jpg`),
				this.loadImage(`${this.imageFolder}/vacancyNurse.jpg`),
				this.loadImage(`${this.imageFolder}/candidates.jpg`),
				this.loadImage(`${this.imageFolder}/employeesMale.jpg`),
				this.loadImage(`${this.imageFolder}/employeesFemale.jpg`),
			])
			.then(([mainmenuImage,
					officeImage, pauseImage, fromOfficeToHRImage, fromOfficeToAdministrationImage, fromOfficeToRealtorImage,
					streetImage, hrImage, administationImage, realtorImage, pausedImage,
					vacancyTypesImage, vacancyDoctorImage, vacancyNurseImage, candidatesImage,
					employeesMaleImage, employeesFemaleImage]) => {
				this.mainmenuImage = mainmenuImage;
				this.officeImage = officeImage;
				this.pauseImage = pauseImage;
				this.fromOfficeToHRImage = fromOfficeToHRImage;
				this.fromOfficeToAdministrationImage = fromOfficeToAdministrationImage;
				this.fromOfficeToRealtorImage = fromOfficeToRealtorImage;
				this.streetImage = streetImage;
				this.hrImage = hrImage;
				this.administationImage = administationImage;
				this.realtorImage = realtorImage;
				this.pausedImage = pausedImage;
				this.vacancyTypesImage = vacancyTypesImage;
				this.vacancyDoctorImage = vacancyDoctorImage;
				this.vacancyNurseImage = vacancyNurseImage;
				this.candidatesImage = candidatesImage;
				this.employeesMaleImage = employeesMaleImage;
				this.employeesFemaleImage = employeesFemaleImage;
				this.employeeMalePhotos = [];
				this.employeeFemalePhotos = [];
				this.extractPhotosFromImage('male', this.employeesMaleImage, 100);
				this.extractPhotosFromImage('female', this.employeesFemaleImage, 100);
				this.setPausedImageParams();
				const officeImages = {
					background: this.officeImage,
					pauseImage: this.pauseImage,
					pausedImage: this.pausedImage,
					goToHRImage: this.fromOfficeToHRImage,
					goToAdministrationImage: this.fromOfficeToAdministrationImage,
					goToRealtorImage: this.fromOfficeToRealtorImage,
				};
				const office = new Office(officeImages);
				const hrImages = {
					background: this.hrImage,
					vacancyTypesImage: this.vacancyTypesImage,
					vacancyDoctorImage: this.vacancyDoctorImage,
					vacancyNurseImage: this.vacancyNurseImage,
					candidatesImage: this.candidatesImage,
				};
				const hr = new HR(hrImages);
				const administration = new Administration(this.administationImage);
				const realtor = new Realtor(this.realtorImage);
				const street = new Street(this.streetImage, office, hr, administration, realtor);
				this.locations.push(office);
				this.locations.push(hr);
				this.locations.push(administration);
				this.locations.push(realtor);
				this.locations.push(street);
				this.addPlayer(new Player('human1', this.locations, this.employeeMalePhotos, this.employeeFemalePhotos));
				this.isLoading = false;
				console.log(`game loaded`);
			})
			.catch((error) => {
				console.error('Error loading images:', error);
			});
        };
    }
	async extractPhotosFromImage(gender, image, numPhotos) {
		const photoWidth = Math.round(image.width / 10 ,0);
		const photoHeight = Math.round(image.height / 10 ,0);
		const offscreenCanvas = new OffscreenCanvas(photoWidth, photoHeight);
		const offscreenContext = offscreenCanvas.getContext('2d');
		let column = 0;
		let row = 0;
		for (let i = 0; i < numPhotos; i++) {
			const startX = photoWidth * column;
			const startY = photoHeight * row;
			offscreenContext.drawImage(image, startX, startY, photoWidth, photoHeight, 0, 0, photoWidth, photoHeight);
			const imageBitmap = await createImageBitmap(offscreenCanvas);
			const photo = await createImageBitmap(imageBitmap);
			if (photo) {
				if (gender === 'male') {
					this.employeeMalePhotos.push(photo);
				} else if (gender === 'female') {
					this.employeeFemalePhotos.push(photo);
				} else {
					console.error(`extractPhotosFromImage: incorrent gender '${gender}'`);
				}
			}
			column++;
			if (column > 9) {
				column = 0;
				row++;
			}
		}
	}
	setPausedImageParams() {
		this.pausedImgX1 = this.canvas.width/2 - this.pausedImage.width/2;
		this.pausedImgX2 = this.pausedImgX1 + this.pausedImage.width;
		this.pausedImgY1 = this.canvas.height/2 - this.pausedImage.height/2;
		this.pausedImgY2 = this.pausedImgY1 + this.pausedImage.height;
	}
	handleCanvasMousemove(event) {
		if (this.isLoading) {
			console.log(`Mousemove: resources are loading, wait...`);
		} else {
			const x = event.clientX - this.canvas.getBoundingClientRect().left;
			const y = event.clientY - this.canvas.getBoundingClientRect().top;
			if (this.gameStarted) {
				if (this.isPaused) {
					if (x >= this.pausedImgX1 && x <= this.pausedImgX2 && y >= this.pausedImgY1 && y <= this.pausedImgY2) {
						//this.isPaused = false;
					}
				} else {
					const player = this.players[0];
					const currentLocation = player.currentLocation;
					switch (true) {
						case currentLocation instanceof Office:
							if (currentLocation.pauseBtnCoors.isPointInside(x, y)) {
								currentLocation.selectedObject = currentLocation.selectingObjects.pause;
							} else if (x >= currentLocation.hrDoorCoors.x1 && x <= currentLocation.hrDoorCoors.x2 && y >= currentLocation.hrDoorCoors.y1 && y <= currentLocation.hrDoorCoors.y2) {
								currentLocation.selectedObject = currentLocation.selectingObjects.hr;
							} else if (x >= currentLocation.adminDoorCoors.x1 && x <= currentLocation.adminDoorCoors.x2 && y >= currentLocation.adminDoorCoors.y1 && y <= currentLocation.adminDoorCoors.y2) {
								currentLocation.selectedObject = currentLocation.selectingObjects.administration;
							} else if (x >= currentLocation.realtorDoorCoors.x1 && x <= currentLocation.realtorDoorCoors.x2 && y >= currentLocation.realtorDoorCoors.y1 && y <= currentLocation.realtorDoorCoors.y2) {
								currentLocation.selectedObject = currentLocation.selectingObjects.realtor;
							} else {
								currentLocation.selectedObject = currentLocation.selectingObjects.none;
							}
							break;
						default:
							break;
					}
				}
			} else {
				if (x >= 5 && x <= 180 && y >= 60 && y <= 140) {
					//this.start();
				} else {
					//console.warn(`click to 'start' to start game`);
				}
			}
		}
	}
	handleCanvasClick(event) {
		if (this.isLoading) {
			console.warn(`resources are loading, wait...`);
		} else {
			const x = event.clientX - this.canvas.getBoundingClientRect().left;
			const y = event.clientY - this.canvas.getBoundingClientRect().top;
			console.log('x',x,'y',y);
			if (this.gameStarted) {
				if (this.isPaused) {
					if (x >= this.pausedImgX1 && x <= this.pausedImgX2 && y >= this.pausedImgY1 && y <= this.pausedImgY2) {
						this.isPaused = false;
						console.log(`paused off`);
					}
				} else {
					const player = this.players[0];
					const currentLocation = player.currentLocation;
					switch (true) {
						case currentLocation instanceof Office:
							currentLocation.selectedObject = currentLocation.selectingObjects.none;
							if (currentLocation.pauseBtnCoors.isPointInside(x, y)) {
								this.isPaused = true;
								console.log(`game paused`);
							} else {
								if (x >= currentLocation.windowCoors.x1 && x <= currentLocation.windowCoors.x2 && y >= currentLocation.windowCoors.y1 && y <= currentLocation.windowCoors.y2) {
									player.goToLocation(this.locations.find(loc => loc instanceof Street));
								} else if (x >= currentLocation.hrDoorCoors.x1 && x <= currentLocation.hrDoorCoors.x2 && y >= currentLocation.hrDoorCoors.y1 && y <= currentLocation.hrDoorCoors.y2) {
									player.goToLocation(this.locations.find(loc => loc instanceof HR));
								} else if (x >= currentLocation.adminDoorCoors.x1 && x <= currentLocation.adminDoorCoors.x2 && y >= currentLocation.adminDoorCoors.y1 && y <= currentLocation.adminDoorCoors.y2) {
									player.goToLocation(this.locations.find(loc => loc instanceof Administration));
								} else if (x >= currentLocation.realtorDoorCoors.x1 && x <= currentLocation.realtorDoorCoors.x2 && y >= currentLocation.realtorDoorCoors.y1 && y <= currentLocation.realtorDoorCoors.y2) {
									player.goToLocation(this.locations.find(loc => loc instanceof Realtor));
								} else {
									console.log(`invalid coordinates, still showing office`);
								}
							}
							break;
						case currentLocation instanceof HR:
							if (currentLocation.choiceVacancyType) {
								if (x >= currentLocation.vacancyTypeCoords.buttonNurse.x1 && x <= currentLocation.vacancyTypeCoords.buttonNurse.x2 && y >= currentLocation.vacancyTypeCoords.buttonNurse.y1 && y <= currentLocation.vacancyTypeCoords.buttonNurse.y2) {
									console.log('nurse vacancy');
									const education = 3;
									const salary = 10;
									const chest = 90;
									player.newVacancy = new VacancyNurse(this.femaleNames, this.employeeFemalePhotos, education, salary, chest);
									currentLocation.showDoctorVacancy = false;
									currentLocation.showNurseVacancy = true;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.vacancyTypeCoords.buttonStoreman.x1 && x <= currentLocation.vacancyTypeCoords.buttonStoreman.x2 && y >= currentLocation.vacancyTypeCoords.buttonStoreman.y1 && y <= currentLocation.vacancyTypeCoords.buttonStoreman.y2) {
									console.log('storeman vacancy');
									const education = 0;
									const salary = 5;
									const liver = 33;
									player.newVacancy = new VacancyStoreman(this.maleNames, this.employeeMalePhotos, education, salary, liver);
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.vacancyTypeCoords.buttonTherapist.x1 && x <= currentLocation.vacancyTypeCoords.buttonTherapist.x2 && y >= currentLocation.vacancyTypeCoords.buttonTherapist.y1 && y <= currentLocation.vacancyTypeCoords.buttonTherapist.y2) {
									console.log('therapist vacancy');
									const education = 7;
									const salary = 13;
									const golf = 10;
									player.newVacancy = new VacancyDoctor(this.maleNames, this.employeeMalePhotos, education, salary, this.doctorSpecializations.therapist, golf);
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.vacancyTypeCoords.buttonDentist.x1 && x <= currentLocation.vacancyTypeCoords.buttonDentist.x2 && y >= currentLocation.vacancyTypeCoords.buttonDentist.y1 && y <= currentLocation.vacancyTypeCoords.buttonDentist.y2) {
									console.log('dentist vacancy');
									const education = 7;
									const salary = 13;
									const golf = 10;
									player.newVacancy = new VacancyDoctor(this.maleNames, this.employeeMalePhotos, education, salary, this.doctorSpecializations.dentist, golf);
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.vacancyTypeCoords.buttonNeurologist.x1 && x <= currentLocation.vacancyTypeCoords.buttonNeurologist.x2 && y >= currentLocation.vacancyTypeCoords.buttonNeurologist.y1 && y <= currentLocation.vacancyTypeCoords.buttonNeurologist.y2) {
									console.log('neurologist vacancy');
									const education = 7;
									const salary = 13;
									const golf = 10;
									player.newVacancy = new VacancyDoctor(this.maleNames, this.employeeMalePhotos, education, salary, this.doctorSpecializations.neurologist, golf);
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.vacancyTypeCoords.buttonSurgeon.x1 && x <= currentLocation.vacancyTypeCoords.buttonSurgeon.x2 && y >= currentLocation.vacancyTypeCoords.buttonSurgeon.y1 && y <= currentLocation.vacancyTypeCoords.buttonSurgeon.y2) {
									console.log('surgeon vacancy');
									const education = 8;
									const salary = 15;
									const golf = 10;
									player.newVacancy = new VacancyDoctor(this.maleNames, this.employeeMalePhotos, education, salary, this.doctorSpecializations.surgeon, golf);
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.vacancyTypeCoords.buttonPathologist.x1 && x <= currentLocation.vacancyTypeCoords.buttonPathologist.x2 && y >= currentLocation.vacancyTypeCoords.buttonPathologist.y1 && y <= currentLocation.vacancyTypeCoords.buttonPathologist.y2) {
									console.log('pathologist vacancy');
									const education = 5;
									const salary = 11;
									const golf = 10;
									player.newVacancy = new VacancyDoctor(this.maleNames, this.employeeMalePhotos, education, salary, this.doctorSpecializations.pathologist, golf);
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.vacancyTypeCoords.buttonCook.x1 && x <= currentLocation.vacancyTypeCoords.buttonCook.x2 && y >= currentLocation.vacancyTypeCoords.buttonCook.y1 && y <= currentLocation.vacancyTypeCoords.buttonCook.y2) {
									console.log('cook vacancy');
									const education = 1;
									const salary = 5;
									const hygiene = 22;
									player.newVacancy = new VacancyCook(this.maleNames, this.employeeMalePhotos, education, salary, hygiene);
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.vacancyTypeCoords.buttonDriver.x1 && x <= currentLocation.vacancyTypeCoords.buttonDriver.x2 && y >= currentLocation.vacancyTypeCoords.buttonDriver.y1 && y <= currentLocation.vacancyTypeCoords.buttonDriver.y2) {
									console.log('driver vacancy');
									const education = 1;
									const salary = 6;
									const risk = 15;
									player.newVacancy = new VacancyDriver(this.maleNames, this.employeeMalePhotos, education, salary, risk);
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.vacancyTypeCoords.buttonHooligan.x1 && x <= currentLocation.vacancyTypeCoords.buttonHooligan.x2 && y >= currentLocation.vacancyTypeCoords.buttonHooligan.y1 && y <= currentLocation.vacancyTypeCoords.buttonHooligan.y2) {
									console.log('hooligan vacancy');
									const education = 0;
									const salary = 5;
									const punch = 10;
									player.newVacancy = new VacancyHooligan(this.maleNames, this.employeeMalePhotos, education, salary, punch);
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (currentLocation.vacancyTypeCoords.buttonCancel.isPointInside(x, y)) {
									currentLocation.choiceVacancyType = false;
									console.log('close choiceVacancyType');
								} else {
									console.log(`invalid coordinates, still showing choiceVacancyType`);
								}
							} else if (currentLocation.showNurseVacancy) {
								if (x >= currentLocation.vacancyNurseCoords.buttonSalaryMore.x1 && x <= currentLocation.vacancyNurseCoords.buttonSalaryMore.x2 && y >= currentLocation.vacancyNurseCoords.buttonSalaryMore.y1 && y <= currentLocation.vacancyNurseCoords.buttonSalaryMore.y2) {
									console.log(`Nurse Vacancy: more salary`);
									if (player.newVacancy.salary < player.money) {
										player.newVacancy.salary++;
									}
								} else if (x >= currentLocation.vacancyNurseCoords.buttonSalaryLess.x1 && x <= currentLocation.vacancyNurseCoords.buttonSalaryLess.x2 && y >= currentLocation.vacancyNurseCoords.buttonSalaryLess.y1 && y <= currentLocation.vacancyNurseCoords.buttonSalaryLess.y2) {
									console.log(`Nurse Vacancy: less salary`);
									if (player.newVacancy.salary > 1) {
										player.newVacancy.salary--;
									}
								} else if (x >= currentLocation.vacancyNurseCoords.buttonEducationMore.x1 && x <= currentLocation.vacancyNurseCoords.buttonEducationMore.x2 && y >= currentLocation.vacancyNurseCoords.buttonEducationMore.y1 && y <= currentLocation.vacancyNurseCoords.buttonEducationMore.y2) {
									console.log(`Nurse Vacancy: more education`);
									if (player.newVacancy.education < 15) {
										player.newVacancy.education++;
									}
								} else if (x >= currentLocation.vacancyNurseCoords.buttonEducationLess.x1 && x <= currentLocation.vacancyNurseCoords.buttonEducationLess.x2 && y >= currentLocation.vacancyNurseCoords.buttonEducationLess.y1 && y <= currentLocation.vacancyNurseCoords.buttonEducationLess.y2) {
									console.log(`Nurse Vacancy: less education`);
									if (player.newVacancy.education > 0) {
										player.newVacancy.education--;
									}
								} else if (x >= currentLocation.vacancyNurseCoords.buttonExperienceMore.x1 && x <= currentLocation.vacancyNurseCoords.buttonExperienceMore.x2 && y >= currentLocation.vacancyNurseCoords.buttonExperienceMore.y1 && y <= currentLocation.vacancyNurseCoords.buttonExperienceMore.y2) {
									console.log(`Nurse Vacancy: more experience`);
									if (player.newVacancy.experience < 50) {
										player.newVacancy.experience++;
									}
								} else if (x >= currentLocation.vacancyNurseCoords.buttonExperienceLess.x1 && x <= currentLocation.vacancyNurseCoords.buttonExperienceLess.x2 && y >= currentLocation.vacancyNurseCoords.buttonExperienceLess.y1 && y <= currentLocation.vacancyNurseCoords.buttonExperienceLess.y2) {
									console.log(`Nurse Vacancy: less experience`);
									if (player.newVacancy.experience > 0) {
										player.newVacancy.experience--;
									}
								} else if (x >= currentLocation.vacancyNurseCoords.buttonChestMore.x1 && x <= currentLocation.vacancyNurseCoords.buttonChestMore.x2 && y >= currentLocation.vacancyNurseCoords.buttonChestMore.y1 && y <= currentLocation.vacancyNurseCoords.buttonChestMore.y2) {
									console.log(`Nurse Vacancy: more chest`);
									if (player.newVacancy.body.chest < 140) {
										player.newVacancy.body.chest++;
									}
								} else if (x >= currentLocation.vacancyNurseCoords.buttonChestLess.x1 && x <= currentLocation.vacancyNurseCoords.buttonChestLess.x2 && y >= currentLocation.vacancyNurseCoords.buttonChestLess.y1 && y <= currentLocation.vacancyNurseCoords.buttonChestLess.y2) {
									console.log(`Nurse Vacancy: less chest`);
									if (player.newVacancy.body.chest > 75) {
										player.newVacancy.body.chest--;
									}
								} else if (x >= currentLocation.vacancyNurseCoords.buttonWaistMore.x1 && x <= currentLocation.vacancyNurseCoords.buttonWaistMore.x2 && y >= currentLocation.vacancyNurseCoords.buttonWaistMore.y1 && y <= currentLocation.vacancyNurseCoords.buttonWaistMore.y2) {
									console.log(`Nurse Vacancy: more waist`);
									if (player.newVacancy.body.waist < 100) {
										player.newVacancy.body.waist++;
									}
								} else if (x >= currentLocation.vacancyNurseCoords.buttonWaistLess.x1 && x <= currentLocation.vacancyNurseCoords.buttonWaistLess.x2 && y >= currentLocation.vacancyNurseCoords.buttonWaistLess.y1 && y <= currentLocation.vacancyNurseCoords.buttonWaistLess.y2) {
									console.log(`Nurse Vacancy: less waist`);
									if (player.newVacancy.body.waist > 45) {
										player.newVacancy.body.waist--;
									}
								} else if (x >= currentLocation.vacancyNurseCoords.buttonHipsMore.x1 && x <= currentLocation.vacancyNurseCoords.buttonHipsMore.x2 && y >= currentLocation.vacancyNurseCoords.buttonHipsMore.y1 && y <= currentLocation.vacancyNurseCoords.buttonHipsMore.y2) {
									console.log(`Nurse Vacancy: more hips`);
									if (player.newVacancy.body.hips < 130) {
										player.newVacancy.body.hips++;
									}
								} else if (x >= currentLocation.vacancyNurseCoords.buttonHipsLess.x1 && x <= currentLocation.vacancyNurseCoords.buttonHipsLess.x2 && y >= currentLocation.vacancyNurseCoords.buttonHipsLess.y1 && y <= currentLocation.vacancyNurseCoords.buttonHipsLess.y2) {
									console.log(`Nurse Vacancy: less hips`);
									if (player.newVacancy.body.hips > 75) {
										player.newVacancy.body.hips--;
									}
								} else if (currentLocation.vacancyNurseCoords.buttonOK.isPointInside(x, y)) {
									currentLocation.showNurseVacancy = false;
									player.publishVacancy(player.newVacancy);
									console.log(`Nurse Vacancy: ok, publishVacancy ${player.newVacancy.constructor.name}`);
									player.clearNewVacancy();
								} else if (currentLocation.vacancyNurseCoords.buttonCancel.isPointInside(x, y)) {
									currentLocation.showNurseVacancy = false;
									console.log(`Nurse Vacancy: cancel`);
								} else {
									console.log(`invalid coordinates, still showing Nurse Vacancy`);
								}
							} else if (currentLocation.showDoctorVacancy) {
								if (x >= currentLocation.vacancyDoctorCoords.buttonSalaryMore.x1 && x <= currentLocation.vacancyDoctorCoords.buttonSalaryMore.x2 && y >= currentLocation.vacancyDoctorCoords.buttonSalaryMore.y1 && y <= currentLocation.vacancyDoctorCoords.buttonSalaryMore.y2) {
									console.log(`Doctor Vacancy: more salary`);
									if (player.newVacancy.salary < player.money) {
										player.newVacancy.salary++;
									}
								} else if (x >= currentLocation.vacancyDoctorCoords.buttonSalaryLess.x1 && x <= currentLocation.vacancyDoctorCoords.buttonSalaryLess.x2 && y >= currentLocation.vacancyDoctorCoords.buttonSalaryLess.y1 && y <= currentLocation.vacancyDoctorCoords.buttonSalaryLess.y2) {
									console.log(`Doctor Vacancy: less salary`);
									if (player.newVacancy.salary > 1) {
										player.newVacancy.salary--;
									}
								} else if (x >= currentLocation.vacancyDoctorCoords.buttonEducationMore.x1 && x <= currentLocation.vacancyDoctorCoords.buttonEducationMore.x2 && y >= currentLocation.vacancyDoctorCoords.buttonEducationMore.y1 && y <= currentLocation.vacancyDoctorCoords.buttonEducationMore.y2) {
									console.log(`Doctor Vacancy: more education`);
									if (player.newVacancy.education < 15) {
										player.newVacancy.education++;
									}
								} else if (x >= currentLocation.vacancyDoctorCoords.buttonEducationLess.x1 && x <= currentLocation.vacancyDoctorCoords.buttonEducationLess.x2 && y >= currentLocation.vacancyDoctorCoords.buttonEducationLess.y1 && y <= currentLocation.vacancyDoctorCoords.buttonEducationLess.y2) {
									console.log(`Doctor Vacancy: less education`);
									if (player.newVacancy.education > 0) {
										player.newVacancy.education--;
									}
								} else if (x >= currentLocation.vacancyDoctorCoords.buttonExperienceMore.x1 && x <= currentLocation.vacancyDoctorCoords.buttonExperienceMore.x2 && y >= currentLocation.vacancyDoctorCoords.buttonExperienceMore.y1 && y <= currentLocation.vacancyDoctorCoords.buttonExperienceMore.y2) {
									console.log(`Doctor Vacancy: more golf`);
									if (player.newVacancy.golf < 50) {
										player.newVacancy.golf++;
									}
								} else if (x >= currentLocation.vacancyDoctorCoords.buttonExperienceLess.x1 && x <= currentLocation.vacancyDoctorCoords.buttonExperienceLess.x2 && y >= currentLocation.vacancyDoctorCoords.buttonExperienceLess.y1 && y <= currentLocation.vacancyDoctorCoords.buttonExperienceLess.y2) {
									console.log(`Doctor Vacancy: less golf`);
									if (player.newVacancy.golf > 0) {
										player.newVacancy.golf--;
									}
								} else if (currentLocation.vacancyDoctorCoords.buttonOK.isPointInside(x, y)) {
									currentLocation.showDoctorVacancy = false;
									player.publishVacancy(player.newVacancy);
									console.log(`Doctor Vacancy: ok, publishVacancy ${player.newVacancy.constructor.name}`);
									player.clearNewVacancy();
								} else if (currentLocation.vacancyDoctorCoords.buttonCancel.isPointInside(x, y)) {
									currentLocation.showDoctorVacancy = false;
									console.log(`Doctor Vacancy: cancel`);
								} else {
									console.log(`invalid coordinates, still showing Doctor Vacancy`);
								}
							} else if (currentLocation.showCandidates) {
								if (currentLocation.candidateCoords.buttonCancel.isPointInside(x, y)) {
									currentLocation.showCandidates = false;
									console.log(`showCandidates: cancel`);
								} else if (x >= currentLocation.candidateCoords.buttonPrevious.x1 && x <= currentLocation.candidateCoords.buttonPrevious.x2 && y >= currentLocation.candidateCoords.buttonPrevious.y1 && y <= currentLocation.candidateCoords.buttonPrevious.y2) {
									console.log(`showCandidates: prev`);
									player.currentCandidate = player.getPreviousCandidate();
								} else if (x >= currentLocation.candidateCoords.buttonNext.x1 && x <= currentLocation.candidateCoords.buttonNext.x2 && y >= currentLocation.candidateCoords.buttonNext.y1 && y <= currentLocation.candidateCoords.buttonNext.y2) {
									console.log(`showCandidates: next`);
									player.currentCandidate = player.getNextCandidate();
								} else {
									console.log(`invalid coordinates, still showing candidates`);
								}
							} else {
								if (x >= currentLocation.windowCoors.x1 && x <= currentLocation.windowCoors.x2 && y >= currentLocation.windowCoors.y1 && y <= currentLocation.windowCoors.y2) {
									player.goToLocation(this.locations.find(loc => loc instanceof Street));
								} else if (x >= currentLocation.officeDoorCoors.x1 && x <= currentLocation.officeDoorCoors.x2 && y >= currentLocation.officeDoorCoors.y1 && y <= currentLocation.officeDoorCoors.y2) {
									player.goToLocation(this.locations.find(loc => loc instanceof Office));
								} else if (x >= currentLocation.vacancyCoors.x1 && x <= currentLocation.vacancyCoors.x2 && y >= currentLocation.vacancyCoors.y1 && y <= currentLocation.vacancyCoors.y2) {
									currentLocation.choiceVacancyType = true;
									console.log(`hr: show choiceVacancyType`);
								} else if (x >= currentLocation.candidatesCoors.x1 && x <= currentLocation.candidatesCoors.x2 && y >= currentLocation.candidatesCoors.y1 && y <= currentLocation.candidatesCoors.y2) {
									currentLocation.showCandidates = true;
									console.log(`hr: show showCandidates`);
								} else {
									console.log(`invalid coordinates, still showing hr`);
								}
							}
							break;
						case currentLocation instanceof Administration:
							if (x >= currentLocation.windowCoors.x1 && x <= currentLocation.windowCoors.x2 && y >= currentLocation.windowCoors.y1 && y <= currentLocation.windowCoors.y2) {
								player.goToLocation(this.locations.find(loc => loc instanceof Street));
							} else if (x >= currentLocation.officeDoorCoors.x1 && x <= currentLocation.officeDoorCoors.x2 && y >= currentLocation.officeDoorCoors.y1 && y <= currentLocation.officeDoorCoors.y2) {
								player.goToLocation(this.locations.find(loc => loc instanceof Office));
							} else {
								console.log(`invalid coordinates, still showing Administration`);
							}
							break;
						case currentLocation instanceof Realtor:
							if (x >= currentLocation.windowCoors.x1 && x <= currentLocation.windowCoors.x2 && y >= currentLocation.windowCoors.y1 && y <= currentLocation.windowCoors.y2) {
								player.goToLocation(this.locations.find(loc => loc instanceof Street));
							} else if (x >= currentLocation.officeDoorCoors.x1 && x <= currentLocation.officeDoorCoors.x2 && y >= currentLocation.officeDoorCoors.y1 && y <= currentLocation.officeDoorCoors.y2) {
								player.goToLocation(this.locations.find(loc => loc instanceof Office));
							} else {
								console.log(`invalid coordinates, still showing Realtor`);
							}
							break;
						case currentLocation instanceof Street:
							if (x >= currentLocation.officeDoorCoors.x1 && x <= currentLocation.officeDoorCoors.x2 && y >= currentLocation.officeDoorCoors.y1 && y <= currentLocation.officeDoorCoors.y2) {
								player.goToLocation(this.locations.find(loc => loc instanceof Office));
							} else if (x >= currentLocation.hrDoorCoors.x1 && x <= currentLocation.hrDoorCoors.x2 && y >= currentLocation.hrDoorCoors.y1 && y <= currentLocation.hrDoorCoors.y2) {
								player.goToLocation(this.locations.find(loc => loc instanceof HR));
							} else if (x >= currentLocation.adminDoorCoors.x1 && x <= currentLocation.adminDoorCoors.x2 && y >= currentLocation.adminDoorCoors.y1 && y <= currentLocation.adminDoorCoors.y2) {
								player.goToLocation(this.locations.find(loc => loc instanceof Administration));
							} else if (x >= currentLocation.realtorDoorCoors.x1 && x <= currentLocation.realtorDoorCoors.x2 && y >= currentLocation.realtorDoorCoors.y1 && y <= currentLocation.realtorDoorCoors.y2) {
								player.goToLocation(this.locations.find(loc => loc instanceof Realtor));
							} else {
								console.log(`invalid coordinates, still showing Street`);
							}
							break;
						default:
							break;
					}
				}
				this.draw();
			} else {
				if (x >= 5 && x <= 180 && y >= 60 && y <= 140) {
					this.start();
				} else {
					console.warn(`click to 'start' to start game`);
				}
			}
		}
	}
	handleKeyDown(event) {
		if (this.isLoading) {
			console.error(`resources are loading, wait...`);
		} else {
			if (this.gameStarted) {
				let player = this.players[0];
				if (event.altKey && event.key === 'p') {
					player.goToLocation(this.locations.find(loc => loc instanceof Office));
					this.isPaused = !this.isPaused;
				} else {
					let currentLocation = player.currentLocation;
					switch (true) {
						case currentLocation instanceof Office:
							if (event.altKey && event.key === 'p') {
								this.isPaused = !this.isPaused;
							} else {
								if (event.key === 's') {
									player.goToLocation(this.locations.find(loc => loc instanceof Street));
								} else if (event.key === 'h') {
									player.goToLocation(this.locations.find(loc => loc instanceof HR));
								} else if (event.key === 'a') {
									player.goToLocation(this.locations.find(loc => loc instanceof Administration));
								} else if (event.key === 'r') {
									player.goToLocation(this.locations.find(loc => loc instanceof Realtor));
								}
							}
							break;
						case currentLocation instanceof HR:
							if (currentLocation.choiceVacancyType) {
								if (event.key === 'n') {
									console.log('nurse vacancy');
									const education = 3;
									const salary = 10;
									const chest = 90;
									player.newVacancy = new VacancyNurse(this.femaleNames, this.employeeFemalePhotos, education, salary, chest);
									currentLocation.showNurseVacancy = true;
									currentLocation.choiceVacancyType = false;
								} else if (event.key === 's') {
									console.log('storeman vacancy');
								} else if (event.key === 't') {
									console.log('therapist vacancy');
								} else if (event.key === 'd') {
									console.log('dentist vacancy');
								} else if (event.key === 'p') {
									console.log('neurologist vacancy');
								} else if (event.key === 'g') {
									console.log('surgeon vacancy');
								} else if (event.key === 'h') {
									console.log('pathologist vacancy');
								} else if (event.key === 'c') {
									console.log('cook vacancy');
								} else if (event.key === 'd') {
									console.log('driver vacancy');
								} else if (event.key === 'b') {
									console.log('hooligan vacancy');
								} else if (event.key === 'q') {
									currentLocation.choiceVacancyType = false;
								}
							} else {
								if (event.key === 's') {
									player.goToLocation(this.locations.find(loc => loc instanceof Street));
								} else if (event.key === 'o') {
									player.goToLocation(this.locations.find(loc => loc instanceof Office));
								} else {
									if (event.key === 'v') {
										currentLocation.choiceVacancyType = true;
									}
								}
							}
							break;
						case currentLocation instanceof Administration:
							if (event.key === 's') {
								player.goToLocation(this.locations.find(loc => loc instanceof Street));
							} else if (event.key === 'o') {
								player.goToLocation(this.locations.find(loc => loc instanceof Office));
							}
							break;
						case currentLocation instanceof Realtor:
							if (event.key === 's') {
								player.goToLocation(this.locations.find(loc => loc instanceof Street));
							} else if (event.key === 'o') {
								player.goToLocation(this.locations.find(loc => loc instanceof Office));
							}
							break;
						case currentLocation instanceof Street:
							if (event.key === 'o') {
								player.goToLocation(this.locations.find(loc => loc instanceof Office));
							} else if (event.key === 'h') {
								player.goToLocation(this.locations.find(loc => loc instanceof HR));
							} else if (event.key === 'a') {
								player.goToLocation(this.locations.find(loc => loc instanceof Administration));
							} else if (event.key === 'r') {
								player.goToLocation(this.locations.find(loc => loc instanceof Realtor));
							} else 
							break;
						default:
							break;
					}
				}
				this.draw();
			} else {
				if (event.code === 'Enter' || event.code === 'Space' || event.code === 'Escape') {
					this.start();
				} else {
					console.warn(`click to 'start' to start game`);
				}
			}
		}
	}
	start() {
		if (this.isLoading) {
			return;
		}
		if (this.gameStarted) {
			return;
		}
		console.log(`game starting...`);
		this.addPlayer(new Player('bot1', this.locations, this.employeeMalePhotos, this.employeeFemalePhotos));
		this.addPlayer(new Player('bot2', this.locations, this.employeeMalePhotos, this.employeeFemalePhotos));
		this.addPlayer(new Player('bot3', this.locations, this.employeeMalePhotos, this.employeeFemalePhotos));
		this.gameStarted = true;
		this.startTime = new Date(2000, 0, 0, 23, 59, 59);
		this.clearTimeParams();
		this.clients = [];
		console.log(`game started`);
		requestAnimationFrame(this.loop.bind(this));
	}
	clearTimeParams() {
		this.time = this.formatTime(this.startTime);
		this.lastMinuteTime = 0;
		this.lastTime = 0;
		this.currentTime = 0;
	}
	addPlayer(player) {
		this.players.push(player);
		console.log(`player '${player.name}' joined to game`);
	}
	generateNewClients() {
		const numClients = Math.floor(Math.random() * 5) + 1; // Generate between 1 and 5 clients
		for (let i = 0; i < numClients; i++) {
			const newClient = new Client();
			this.clients.push(newClient);
			this.clients.forEach((client) => {
				if (client.isSearchHospital) {
					client.choicePlayer(this.players);
				}
			});
		}
	}
	loop(currentTime) {
		if (this.isLoading) {
			this.clearTimeParams();
		} else {
			if (this.gameStarted) {
				this.currentTime = currentTime;
				const elapsedTime = this.currentTime - this.lastTime;
				if (this.isPaused) {
					this.lastTime = this.currentTime - (elapsedTime % this.interval);
					this.lastMinuteTime = 0;
				}
				if (elapsedTime > this.interval) {
					this.update(elapsedTime);
					this.draw();
					this.lastTime = this.currentTime - (elapsedTime % this.interval);
				} else {
					const checkingTime = new Date(2000, 0, 0, 23, 59, 59);
					if (this.startTime.toLocaleDateString() === checkingTime.toLocaleDateString()) {
						this.startTime = new Date(2000, 0, 1, 0, 0, 0);
						this.clearTimeParams();
					}
				}
			} else {
				this.clearTimeParams();
				this.draw();
			}
		}
		requestAnimationFrame(this.loop.bind(this));
	}
	update(elapsedTime) {
		if (this.isLoading) {
			return;
		}
		if (this.isPaused) {
			return;
		}
		this.lastMinuteTime += elapsedTime;
		if (this.lastMinuteTime >= this.minuteDuration) {
			this.startTime.setMinutes(this.startTime.getMinutes() + 1);
			this.time = this.formatTime(this.startTime);
			this.lastMinuteTime = 0;
			this.players.forEach((player) => {
				player.vacancies.forEach((vacancy) => {
					vacancy.generateCandidates();
				});
				player.updateCandidates();
				player.updateCurrentCandidate();
			});
			this.generateNewClients();
			//console.log(`${this.time}`);
		}
	}
	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		if (this.isLoading) {
			if (this.loadingImage) {
				this.ctx.drawImage(this.loadingImage, 0, 0, this.canvas.width, this.canvas.height);
			}
			else {
				this.ctx.fillStyle = "grey";
				this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
				this.ctx.font = '30px Arial Bold';
				this.ctx.fillStyle = 'white';
				const x = 10;
				const y = 50;
				this.ctx.fillText(`LOADING...`, x, y);
			}
		} else {
			if (this.gameStarted) {
				const player = this.players[0];
				const currentLocation = player.currentLocation;
				this.ctx.drawImage(currentLocation.image, 0, 0, this.canvas.width, this.canvas.height);
				if (currentLocation instanceof Office) {
					this.drawTime();
					this.drawMoney();
					if (this.isPaused) {
						this.ctx.drawImage(currentLocation.pausedImage, this.pausedImgX1, this.pausedImgY1, this.pausedImage.width, this.pausedImage.height);
					} else {
						if (currentLocation.selectedObject === currentLocation.selectingObjects.pause) {
							this.ctx.drawImage(currentLocation.pauseImage, 420, 140, currentLocation.pauseImage.width, currentLocation.pauseImage.height);
						} else if (currentLocation.selectedObject === currentLocation.selectingObjects.hr) {
							this.ctx.drawImage(currentLocation.goToHRImage, currentLocation.hrDoorCoors.x1, currentLocation.hrDoorCoors.y1, currentLocation.goToHRImage.width, currentLocation.goToHRImage.height);
						} else if (currentLocation.selectedObject === currentLocation.selectingObjects.administration) {
							this.ctx.drawImage(currentLocation.goToAdministrationImage, currentLocation.adminDoorCoors.x1, currentLocation.adminDoorCoors.y1, currentLocation.goToAdministrationImage.width, currentLocation.goToAdministrationImage.height);
						} else if (currentLocation.selectedObject === currentLocation.selectingObjects.realtor) {
							this.ctx.drawImage(currentLocation.goToRealtorImage, currentLocation.realtorDoorCoors.x1, currentLocation.realtorDoorCoors.y1, currentLocation.goToRealtorImage.width, currentLocation.goToRealtorImage.height);
						}
					}
				} else if (currentLocation instanceof HR) {
					if (currentLocation.choiceVacancyType) {
						this.ctx.drawImage(currentLocation.vacancyTypesImage, 200, 10, this.vacancyTypesImage.width, this.vacancyTypesImage.height);
					} else if (currentLocation.showDoctorVacancy) {
						this.ctx.drawImage(currentLocation.vacancyDoctorImage, 200, 100, this.vacancyDoctorImage.width, this.vacancyDoctorImage.height);
						this.drawNewVacancyText();
					} else if (currentLocation.showNurseVacancy) {
						this.ctx.drawImage(currentLocation.vacancyNurseImage, 200, 100, this.vacancyNurseImage.width, this.vacancyNurseImage.height);
						this.drawNewVacancyText();
					} else if (currentLocation.showCandidates) {
						this.ctx.drawImage(currentLocation.candidatesImage, 200, 100, this.candidatesImage.width, this.candidatesImage.height);
						this.drawCandidate();
					}
				}
			} else {
				this.ctx.drawImage(this.mainmenuImage, 0, 0, this.canvas.width, this.canvas.height);
			}
		}
	}
	drawTime() {
		this.ctx.font = '20px Arial';
		this.ctx.fillStyle = 'white';
		let x = 0;
		let y = 0;
		if (this.canvas.width === 800 && this.canvas.height === 600) {
			x = 230;
			y = 50;
		} else if (this.canvas.width === 1024 && this.canvas.height === 768) {
			x = 310;
			y = 50;
		}
		this.ctx.fillText(this.time, x, y);
	}
	formatTime(date) {
		const year = date.getFullYear().toString().padStart(4, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');
		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');
		return `${year}-${month}-${day} ${hours}:${minutes}`;
	}
	drawMoney() {
		this.ctx.font = '20px Arial';
		this.ctx.fillStyle = 'white';
		let x = 0;
		let y = 0;
		if (this.canvas.width === 800 && this.canvas.height === 600) {
			x = 390;
			y = 460;
		} else if (this.canvas.width === 1024 && this.canvas.height === 768) {
			x = 390;
			y = 460;
		}
		this.ctx.fillText(`${this.players[0].money}$`, x, y);
	}
	drawNewVacancyText() {
		this.ctx.font = '20px Arial';
		this.ctx.fillStyle = 'white';
		let x = 0;
		let y = 0;
		if (this.canvas.width === 800 && this.canvas.height === 600) {
			x = 210;
			y = 140;
		} else if (this.canvas.width === 1024 && this.canvas.height === 768) {
			x = 10;
			y = 30;
		}
		if (this.players[0].newVacancy) {
			let vacancy = this.players[0].newVacancy;
			const getEmployeeType = function(employeeType) {
				switch(true) {
					case employeeType instanceof VacancyNurse:
						return 'медсестра';
					case employeeType instanceof VacancyDoctor:
						return 'доктор';
					case employeeType instanceof VacancyStoreman:
						return 'кладовщик';
					case employeeType instanceof VacancyDriver:
						return 'водитель-механик';
					case employeeType instanceof VacancyCook:
						return 'повар';
					case employeeType instanceof VacancyHooligan:
						return 'вышибала';
					default:
						return 'unknown';
				}
			}
			let employeeType = getEmployeeType(vacancy);
			if (vacancy instanceof VacancyDoctor) {
				const getDoctorSpecialization = function(specialization) {
					switch(specialization) {
						case this.doctorSpecializations.therapist:
							return 'терапевт';
						case this.doctorSpecializations.neurologist:
							return 'невропатолог';
						case this.doctorSpecializations.dentist:
							return 'стоматолог';
						case this.doctorSpecializations.surgeon:
							return 'хирург';
						case this.doctorSpecializations.pathologist:
							return 'паталогоанатом';
						default:
							return 'unknown';
					}
				}
				employeeType = getDoctorSpecialization(vacancy.specialization);
			} else if (vacancy instanceof VacancyNurse) {
				this.ctx.fillStyle = 'darkblue';
			}
			const maxWidth = this.vacancyNurseImage.width-75;
			this.ctx.fillText(`Вакансия:`, x, y, maxWidth);
			this.ctx.fillText(`на должность: ${employeeType}`, x, y+(30*1), maxWidth);
			this.ctx.fillText(`Требования:`, x, y+(30*2), maxWidth);
			this.ctx.fillText(`${vacancy.education} лет учёбы в универе,`, x, y+(30*3), maxWidth);
			this.ctx.fillText(`${vacancy.experience} лет опыта работы.`, x, y+(30*4), maxWidth);
			let lineNum = 5;
			if (vacancy instanceof VacancyNurse) {
				this.ctx.fillText(`фигура ${vacancy.body.chest}*${vacancy.body.waist}*${vacancy.body.hips}`, x, y+(30*lineNum), maxWidth);
				lineNum++;
			}
			this.ctx.fillText(`Зарплата ${vacancy.salary}$ в день`, x, y+(30*lineNum), maxWidth);
		} else {
			this.ctx.fillText(`no vacancy data`, x, y);
		}
	}
	drawCandidate() {
		this.ctx.font = '20px Arial';
		this.ctx.fillStyle = 'white';
		let x = 0;
		let y = 0;
		if (this.canvas.width === 800 && this.canvas.height === 600) {
			x = 220;
			y = 150;
		} else if (this.canvas.width === 1024 && this.canvas.height === 768) {
			x = 30;
			y = 40;
		}
		const player = this.players[0];
		if (player.currentCandidate) {
			let candidate = player.currentCandidate;
			let candidateIndex = player.candidates.indexOf(candidate);
			let employeeType = 'непонятный кандидат';
			let additional = '';
			if (candidate instanceof Nurse) {
				employeeType = this.employeeTypes.nurse;
				additional = `фигура ${candidate.chest}*${candidate.waist}*${candidate.hips}`;
			} else if (candidate instanceof Doctor) {
				employeeType = this.employeeTypes.doctor + ' ' + candidate.specialization;
				additional = `IQ: ${candidate.iq}`;
			} else if (candidate instanceof Storeman) {
				employeeType = this.employeeTypes.storeman;
			} else if (candidate instanceof Driver) {
				employeeType = this.employeeTypes.driver;
			} else if (candidate instanceof Cook) {
				employeeType = this.employeeTypes.cook;
			} else if (candidate instanceof Hooligan) {
				employeeType = this.employeeTypes.hooligan;
			}
			this.ctx.fillText(`${candidateIndex+1}) ${employeeType}: #${candidate.id}`, x, y);
			this.ctx.fillText(`'${candidate.name}', ${candidate.age} лет`, x, y+30);
			this.ctx.fillText(`учился ${candidate.education} лет,`, x, y+(30*2));
			this.ctx.fillText(`опыт работы ${candidate.experience} лет`, x, y+(30*3));
			let lineNum = 4;
			if (candidate instanceof Nurse || candidate instanceof Doctor) {
				this.ctx.fillText(`${additional}`, x, y+(30*lineNum));
				lineNum++;
			}
			this.ctx.fillText(`хочет зарплату ${candidate.salary}$ в день`, x, y+(30*lineNum));
			lineNum++;
			this.ctx.drawImage(candidate.photo, x, y + (30 * lineNum), 100, 100);
		} else {
			this.ctx.fillText(`никто не оставлял свое резюме!`, x, y);
		}
	}
}
try {
	const imageFolder = './images/';
	const gameMinuteDuration = 5000;
	const gameCanvas = document.getElementById('canvas');
	const game = new Game(gameCanvas, gameMinuteDuration, imageFolder);
} catch(e) {
	console.error(e);
}
