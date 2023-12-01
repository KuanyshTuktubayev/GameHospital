const doctorNames = ['Dr. Johnson', 'Dr. Lee', 'Dr. Patel', 'Dr. Nguyen', 'Dr. Garcia', 'Dr. Wang', 'Dr. Hernandez', 'Dr. Smith', 'Dr. Kim', 'Dr. Jones'];
const nurseNames = ['Nurse Brown', 'Nurse Davis', 'Nurse Martinez', 'Nurse Wilson', 'Nurse Anderson', 'Nurse Thomas', 'Nurse Jackson', 'Nurse White', 'Nurse Harris', 'Nurse Martin'];
const employeeTypes = {
	doctor: 'доктор',
	nurse: 'медсестра',
	storeman: 'кладовщик',
	cook: 'повар',
	bouncer: 'вышибала',
	driver: 'водитель-механик',
};
const doctorSpecializations = {
	therapist: 'терапевт',
	dentist: 'стоматолог',
	psychiatrist: 'психиатр',
	surgeon: 'хирург',
	pathologist: 'паталогоанатом',
};
class Employee {
	constructor(name, age, experience, education, salary) {
		this.id = this._GetUniqueId();
		this.name = name;
		this.age = age;
		this.experience = experience;
		this.education = education;
		this.salary = salary;
		this.satisfaction = 50; // set a default satisfaction value of 50%
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
	constructor(specialization, name, age, experience, education, iq, certificates, salary) {
		super(name, age, experience, education, salary);
		this.specialization = specialization;
		this.iq = iq;
		this.certificates = certificates;
	}
}
class Nurse extends Employee {
	constructor(name, age, experience, education, chest, waist, hips, salary) {
		super(name, age, experience, education, salary);
		this.chest = chest;
		this.waist = waist;
		this.hips = hips;
	}
}
class Storeman extends Employee {
	constructor(name, age, experience, education, salary) {
		super(name, age, experience, education, salary);
	}
}
class Driver extends Employee {
	constructor(name, age, experience, education, salary) {
		super(name, age, experience, education, salary);
	}
}
class Cook extends Employee {
	constructor(name, age, experience, education, salary) {
		super(name, age, experience, education, salary);
	}
}
class Bouncer extends Employee {
	constructor(name, age, experience, education, salary) {
		super(name, age, experience, education, salary);
	}
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
class ClickCoordinates {
	constructor(x1, x2, y1, y2) {
		this.x1 = x1; 
		this.x2 = x2;
		this.y1 = y1;
		this.y2 = y2;
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
			return new ClickCoordinates(530, 580, 395, 425);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyNurseCoordinates.setOK: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setCancel() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(530, 580, 450, 475);
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
			return new ClickCoordinates(530, 580, 395, 425);
		} else if (this.width === 1024 && this.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`VacancyDoctorCoordinates.setOK: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setCancel() {
		if (this.width === 800 && this.height === 600) {
			return new ClickCoordinates(530, 580, 450, 475);
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
			return new ClickCoordinates(525, 580, 440, 470);
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
	constructor(image, pauseImage) {
		super('Офис');
		this.image = image;
		this.pauseImage = pauseImage;
		this.windowCoors = this.setWindowCoors();
		this.hrDoorCoors = this.setHRCoors();
		this.adminDoorCoors = this.setAdminCoors();
		this.realtorDoorCoors = this.setRealtorCoors();
		this.pauseBtnCoors = this.setPauseCoors();
	}
	setWindowCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 5, x2: 170, y1: 60, y2: 245};
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
			//return {x1: 703, x2: 785, y1: 15, y2: 145};
			return new ClickCoordinates(703, 785, 15, 145);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setHRCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setAdminCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 695, x2: 790, y1: 193, y2: 300};
			return new ClickCoordinates(695, 790, 193, 300);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setAdminCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setRealtorCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 694, x2: 785, y1: 348, y2: 455};
			return new ClickCoordinates(694, 785, 348, 455);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setRealtorCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setPauseCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 440, x2: 510, y1: 170, y2: 270};
			return new ClickCoordinates(440, 510, 170, 270);
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
		this.windowCoors = this.setWindowCoors();
		this.officeDoorCoors = this.setOfficeCoors();
		this.vacancyCoors = this.setVacancyCoors();
		this.candidatesCoors = this.setCandidatesCoors();
		this.nurseCoors = this.setNurseCoors();
		this.storemanCoors = this.setStoremanCoors();
		this.therapistCoors = this.setTherapistCoors();
		this.dentistCoors = this.setDentistCoors();
		this.psychiatristCoors = this.setPsychiatristCoors();
		this.surgeonCoors = this.setSurgeonCoors();
		this.pathologistCoors = this.setPathologistCoors();
		this.cookCoors = this.setCookCoors();
		this.driverCoors = this.setDriverCoors();
		this.bouncerCoors = this.setBouncerCoors();
		this.vacancyCancelCoors = this.setVacancyCancelCoors();
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
	setNurseCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 210, x2: 335, y1: 20, y2: 100};
			return new ClickCoordinates(210, 335, 20, 100);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setNurseCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setStoremanCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 364, x2: 490, y1: 20, y2: 100};
			return new ClickCoordinates(364, 490, 20, 100);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setStoremanCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setTherapistCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 210, x2: 335, y1: 130, y2: 210};
			return new ClickCoordinates(210, 335, 130, 210);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setTherapistCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setDentistCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 364, x2: 490, y1: 130, y2: 210};
			return new ClickCoordinates(364, 490, 130, 210);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setDentistCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setPsychiatristCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 208, x2: 335, y1: 240, y2: 320};
			return new ClickCoordinates(208, 335, 240, 320);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setPsychiatristCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setSurgeonCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 364, x2: 490, y1: 240, y2: 320};
			return new ClickCoordinates(364, 490, 240, 320);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setSurgeonCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setPathologistCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 208, x2: 335, y1: 345, y2: 425};
			return new ClickCoordinates(208, 335, 345, 425);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setPathologistCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setCookCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 364, x2: 490, y1: 345, y2: 425};
			return new ClickCoordinates(364, 490, 345, 425);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setCookCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setDriverCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 208, x2: 335, y1: 454, y2: 535};
			return new ClickCoordinates(208, 335, 454, 535);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setDriverCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setBouncerCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 364, x2: 490, y1: 454, y2: 535};
			return new ClickCoordinates(364, 490, 454, 535);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setBouncerCoors: incorrect image size! Cannot set coordinates!`);
			return new ClickCoordinates(0, 0, 0, 0);
		}
	}
	setVacancyCancelCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			//return {x1: 520, x2: 580, y1: 480, y2: 530};
			return new ClickCoordinates(520, 580, 480, 530);
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return new ClickCoordinates(0, 0, 0, 0);
		} else {
			console.error(`${this.name} setVacancyCancelCoors: incorrect image size! Cannot set coordinates!`);
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
	constructor(name, ownership) {
		super(name);
		this.isRented = false;
		this.ownership = ownership;
	}
	rent() {
		if (this.isRented) {
			console.log(`${this.name} уже был взят в аренду.`);
		} else {
			this.isRented = true;
			console.log(`${this.name} взят в аренду.`);
		}
	}
}
class Room extends Hospital {
	constructor(name, price, square) {
		super(name);
		this.price = price;
		this.square = square;
		this.isRented = false;
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
	constructor(employeeType, specialization, body, education, experience, salary) {
		this.employeeType = employeeType;
		this.specialization = employeeType === employeeTypes.doctor ? specialization : null;
		this.chest = employeeType === employeeTypes.nurse ? body.chest : null;
		this.waist = employeeType === employeeTypes.nurse ? body.waist : null;
		this.hips = employeeType === employeeTypes.nurse ? body.hips : null;
		this.minAge = 18;
		this.age = this.minAge + education + experience;
		this.education = education;
		this.experience = experience;
		this.salary = salary;
		this.publishTime = new Date();
		this.durationByMinutes = 120;
		this.candidates = [];
	}
	calculateChance() {
		// Calculate the chance of generating a candidate based on the parameter values
		let chance = 0.5; // default chance
		switch (this.employeeType) {
			case employeeTypes.doctor:
				chance -= 0.2;
				if (this.age < 30) {
					chance += 0.15;
				} else if (this.age >= 30 && this.age < 40) {
					chance += 0.1;
				} else if (this.age >= 40 && this.age < 50) {
					chance -= 0.05;
				} else {
					chance += 0.05;
				}
				break;
			case employeeTypes.nurse:
				chance -= 0.1;
				if (this.age < 25) {
					chance += 0.1;
				} else if (this.age >= 25 && this.age < 30) {
					chance -= 0.1;
				} else if (this.age >= 30 && this.age < 35) {
					chance -= 0.05;
				} else if (this.age >= 35 && this.age < 40) {
					chance += 0.05;
				} else if (this.age >= 40 && this.age < 50) {
					chance += 0.1;
				} else {
					chance += 0.15;
				}
				break;
			default:
				break;
		}
		
		if (this.experience < 10) {
			chance += 0.15;
		} else if (this.experience >= 10 && this.experience < 50) {
			chance += 0.1;
		} else if (this.experience >= 50 && this.experience < 100) {
			chance += 0.08;
		} else if (this.experience >= 100 && this.experience < 200) {
			chance += 0.05;
		} else if (this.experience >= 200 && this.experience < 500) {
			chance += 0.01;
		} else if (this.experience >= 500 && this.experience < 700) {
			chance -= 0.05;
		} else if (this.experience >= 700 && this.experience < 1000) {
			chance -= 0.1;
		} else {
			chance -= 0.2;
		}
		
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

		// Generate a random number and compare it to the chance value
		const randomNumber = Math.random();
		if (randomNumber < chance) {
			return 1;
		} else {
			return 0;
		}
	}
	generateCandidates() {
		if (this.candidates.length > 15) {
			console.warn(`vacancy of '${this.employeeType}': generated ${this.candidates.length} candidates. Will not generate more.`);
			return;
		}
		//let countOfNewCandidates = 0;
		if (this.calculateChance() === 1) {
			const numCandidates = Math.floor(Math.random() * 4); // Generate a random number of candidates between 0 and 3
			for (let i = 0; i < numCandidates; i++) {
				let education = this.education + Math.floor(Math.random() * 3) - 1;
				if (education < 0) {
					education = 0;
				}
				let experience = this.experience + Math.floor(Math.random() * 5) - 2;
				if (experience < 0) {
					experience = 0;
				}
				let age = this.minAge + education + experience + Math.floor(Math.random() * 15) - 5;
				if (age < this.minAge) {
					age = this.minAge;
					education = 0;
					experience = 0;
				} else if (age < this.minAge + education + experience) {
					age = this.minAge + education + experience;
				}
				const minSalary = this.salary * 0.7; // 70% of vacancy's salary
				const maxSalary = this.salary * 1.3; // 130% of vacancy's salary
				let salary = Math.round( Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary ,0);
				if (salary <= 0) {
					salary = (Math.round(this.salary * 0.5 ,0) > 0) ? Math.round(this.salary * 0.5 ,0) : minSalary;
				}
				let candidate = null;
				if (this.employeeType === employeeTypes.doctor) {
					const name = doctorNames[Math.floor(Math.random() * doctorNames.length)];
					const iq = this.education * 10 + Math.floor(Math.random() * 50) - 25;
					const certificates = Math.floor(Math.random() * 5);
					candidate = new Doctor(this.specialization, name, age, experience, education, iq, certificates, salary);
				} else if (this.employeeType === employeeTypes.nurse) {
					const name = nurseNames[Math.floor(Math.random() * nurseNames.length)];
					const chest = this.chest + Math.floor(Math.random() * 10) - 5; //грудь
					const waist = this.waist + Math.floor(Math.random() * 10) - 5; //талия
					const hips = this.hips + Math.floor(Math.random() * 10) - 5; //бёдра
					candidate = new Nurse(name, age, experience, education, chest, waist, hips, salary);
				} else {
					console.log(`Don't generate candidates for this vacancy, unknown employeeType '${this.employeeType}'`);
				}
				if (candidate && candidate !== null) {
					this.candidates.push(candidate);
				}
				//countOfNewCandidates++;
			}
		}
		//console.log(`${countOfNewCandidates} new candidates for vacancy '${this.employeeType}'`);
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
			const rentedReceptionPlayers = players.filter(player => player.rentedRooms.some(room => room instanceof Reception));
			if (rentedReceptionPlayers.length > 0) { // Check if there are rented receptions
				const randomIndex = Math.floor(Math.random() * rentedReceptionPlayers.length); // Choose a random player index
				const player = rentedReceptionPlayers[randomIndex]; // Get the random player
				const reception = player.rentedRooms.find(room => room instanceof Reception);
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
	constructor(name, locations) {
		this.name = name;
		this.locations = locations;
		this.money = 100;
		this.vacancies = [];
		this.candidates = [];
		this.employees = [];
		this.rentedRooms = [];
		this.currentLocation = this.locations.find(loc => loc instanceof Office);
		this.currentCandidate = null;
		let limitsOfRentingRooms = {
			maxReceptions: 1,
			maxWaitingRooms: 5,
			maxTherapistOffices: 10,
		};
		this.setLimitsForRooms(limitsOfRentingRooms);
		this.newVacancy = {};
		this.clearNewVacancy();
	}
	setLimitsForRooms(limitsOfRooms) {
		this.maxReceptions = limitsOfRooms.maxReceptions;
		this.maxWaitingRooms = limitsOfRooms.maxWaitingRooms;
		this.maxTherapistOffices = limitsOfRooms.maxTherapistOffices;
	}
	goToLocation(newLocation) {
		this.currentLocation = newLocation;
		console.log(`change location to '${newLocation.name}'`);
	}
	clearNewVacancy() {
		this.newVacancy = {
			employeeType: '',
			specialization: '',
			body: {
				chest: 0,
				waist: 0,
				hips: 0,
			},
			experience: 0,
			education: 0,
			salary: 0
		}
	}
	publishVacancy(employeeType, specialization, body, education, experience, salary) {
		const vacancy = new Vacancy(employeeType, specialization, body, education, experience, salary);
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
		if (room.isRented) {
			console.log(`Игрок ${this.name} уже арендовал ${room.name}.`);
		} else if (this.money < room.price) {
			console.log(`Игрок ${this.name} не имеет достаточно денег для аренды ${room.name} стоимостью ${room.price} в день.`);
		} else {
			// Check if the player has reached the limit for this type of room
			let roomCount = 0;
			if (room instanceof Reception) {
				roomCount = this.rentedRooms.filter(r => r instanceof Reception).length;
				if (roomCount >= this.maxReceptions) {
					console.log(`Игрок ${this.name} уже арендовал максимальное количество ресепшенов.`);
					return;
				}
			} else if (room instanceof WaitingRoom) {
				roomCount = this.rentedRooms.filter(r => r instanceof WaitingRoom).length;
				if (roomCount >= this.maxWaitingRooms) {
					console.log(`Игрок ${this.name} уже арендовал максимальное количество залов ожидания.`);
					return;
				}
			} else if (room instanceof TherapistOffice) {
				roomCount = this.rentedRooms.filter(r => r instanceof TherapistOffice).length;
				if (roomCount >= this.maxTherapistOffices) {
					console.log(`Игрок ${this.name} уже арендовал максимальное количество кабинетов терапевта.`);
					return;
				}
			}
			room.rent();
			this.rentedRooms.push(room);
			this.money -= room.price;
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
        loadingImage.src = `./${this.imageFolder}/loading.jpg`;
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
				this.loadImage(`./${this.imageFolder}/mainmenu.jpg`),
				this.loadImage(`./${this.imageFolder}/office.jpg`),
				this.loadImage(`./${this.imageFolder}/street.jpg`),
				this.loadImage(`./${this.imageFolder}/hr.jpg`),
				this.loadImage(`./${this.imageFolder}/administation.jpg`),
				this.loadImage(`./${this.imageFolder}/realtor.jpg`),
				this.loadImage(`./${this.imageFolder}/paused.jpg`),
				this.loadImage(`./${this.imageFolder}/vacancyChoice.jpg`),
				this.loadImage(`./${this.imageFolder}/vacancyDoctor.jpg`),
				this.loadImage(`./${this.imageFolder}/vacancyNurse.jpg`),
				this.loadImage(`./${this.imageFolder}/candidates.jpg`),
			])
			.then(([mainmenuImage, officeImage, streetImage, hrImage, administationImage, realtorImage, pauseImage,
					vacancyTypesImage, vacancyDoctorImage, vacancyNurseImage, candidatesImage]) => {
				this.mainmenuImage = mainmenuImage;
				this.officeImage = officeImage;
				this.streetImage = streetImage;
				this.hrImage = hrImage;
				this.administationImage = administationImage;
				this.realtorImage = realtorImage;
				this.pauseImage = pauseImage;
				this.vacancyTypesImage = vacancyTypesImage;
				this.vacancyDoctorImage = vacancyDoctorImage;
				this.vacancyNurseImage = vacancyNurseImage;
				this.candidatesImage = candidatesImage;
				this.setPauseImageParams();
				const office = new Office(this.officeImage, this.pauseImage);
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
				this.addPlayer(new Player('human1', this.locations));
				this.isLoading = false;
				console.log(`game loaded`);
			})
			.catch((error) => {
				console.error('Error loading images:', error);
			});
        };
    }
	setPauseImageParams() {
		this.pauseImgX1 = this.canvas.width/2 - this.pauseImage.width/2;
		this.pauseImgX2 = this.pauseImgX1 + this.pauseImage.width;
		this.pauseImgY1 = this.canvas.height/2 - this.pauseImage.height/2;
		this.pauseImgY2 = this.pauseImgY1 + this.pauseImage.height;
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
					if (x >= this.pauseImgX1 && x <= this.pauseImgX2 && y >= this.pauseImgY1 && y <= this.pauseImgY2) {
						this.isPaused = false;
						console.log(`paused off`);
					}
				} else {
					const player = this.players[0];
					const currentLocation = player.currentLocation;
					switch (true) {
						case currentLocation instanceof Office:
							if (x >= currentLocation.pauseBtnCoors.x1 && x <= currentLocation.pauseBtnCoors.x2 && y >= currentLocation.pauseBtnCoors.y1 && y <= currentLocation.pauseBtnCoors.y2) {
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
								if (x >= currentLocation.nurseCoors.x1 && x <= currentLocation.nurseCoors.x2 && y >= currentLocation.nurseCoors.y1 && y <= currentLocation.nurseCoors.y2) {
									console.log('nurse vacancy');
									player.newVacancy.employeeType = employeeTypes.nurse;
									player.newVacancy.specialization = '';
									player.newVacancy.body = {
										chest: 90,
										waist: 60,
										hips: 90,
									},
									player.newVacancy.experience = 3;
									player.newVacancy.education = 3;
									player.newVacancy.salary = 10;
									currentLocation.showDoctorVacancy = false;
									currentLocation.showNurseVacancy = true;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.storemanCoors.x1 && x <= currentLocation.storemanCoors.x2 && y >= currentLocation.storemanCoors.y1 && y <= currentLocation.storemanCoors.y2) {
									console.log('storeman vacancy');
									player.newVacancy.employeeType = employeeTypes.storeman;
									player.newVacancy.specialization = '';
									player.newVacancy.body = {
										chest: 0,
										waist: 0,
										hips: 0,
									},
									player.newVacancy.experience = 0;
									player.newVacancy.education = 0;
									player.newVacancy.salary = 5;
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.therapistCoors.x1 && x <= currentLocation.therapistCoors.x2 && y >= currentLocation.therapistCoors.y1 && y <= currentLocation.therapistCoors.y2) {
									console.log('therapist vacancy');
									player.newVacancy.employeeType = employeeTypes.doctor;
									player.newVacancy.specialization = doctorSpecializations.therapist;
									player.newVacancy.body = {
										chest: 0,
										waist: 0,
										hips: 0,
									},
									player.newVacancy.experience = 1;
									player.newVacancy.education = 7;
									player.newVacancy.salary = 13;
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.dentistCoors.x1 && x <= currentLocation.dentistCoors.x2 && y >= currentLocation.dentistCoors.y1 && y <= currentLocation.dentistCoors.y2) {
									console.log('dentist vacancy');
									player.newVacancy.employeeType = employeeTypes.doctor;
									player.newVacancy.specialization = doctorSpecializations.dentist;
									player.newVacancy.body = {
										chest: 0,
										waist: 0,
										hips: 0,
									},
									player.newVacancy.experience = 1;
									player.newVacancy.education = 7;
									player.newVacancy.salary = 13;
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.psychiatristCoors.x1 && x <= currentLocation.psychiatristCoors.x2 && y >= currentLocation.psychiatristCoors.y1 && y <= currentLocation.psychiatristCoors.y2) {
									console.log('psychiatrist vacancy');
									player.newVacancy.employeeType = employeeTypes.doctor;
									player.newVacancy.specialization = doctorSpecializations.psychiatrist;
									player.newVacancy.body = {
										chest: 0,
										waist: 0,
										hips: 0,
									},
									player.newVacancy.experience = 1;
									player.newVacancy.education = 7;
									player.newVacancy.salary = 13;
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.surgeonCoors.x1 && x <= currentLocation.surgeonCoors.x2 && y >= currentLocation.surgeonCoors.y1 && y <= currentLocation.surgeonCoors.y2) {
									console.log('surgeon vacancy');
									player.newVacancy.employeeType = employeeTypes.doctor;
									player.newVacancy.specialization = doctorSpecializations.surgeon;
									player.newVacancy.body = {
										chest: 0,
										waist: 0,
										hips: 0,
									},
									player.newVacancy.experience = 2;
									player.newVacancy.education = 8;
									player.newVacancy.salary = 15;
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.pathologistCoors.x1 && x <= currentLocation.pathologistCoors.x2 && y >= currentLocation.pathologistCoors.y1 && y <= currentLocation.pathologistCoors.y2) {
									console.log('pathologist vacancy');
									player.newVacancy.employeeType = employeeTypes.doctor;
									player.newVacancy.specialization = doctorSpecializations.pathologist;
									player.newVacancy.body = {
										chest: 0,
										waist: 0,
										hips: 0,
									},
									player.newVacancy.experience = 1;
									player.newVacancy.education = 5;
									player.newVacancy.salary = 11;
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.cookCoors.x1 && x <= currentLocation.cookCoors.x2 && y >= currentLocation.cookCoors.y1 && y <= currentLocation.cookCoors.y2) {
									console.log('cook vacancy');
									player.newVacancy.employeeType = employeeTypes.cook;
									player.newVacancy.specialization = '';
									player.newVacancy.body = {
										chest: 0,
										waist: 0,
										hips: 0,
									},
									player.newVacancy.experience = 0;
									player.newVacancy.education = 1;
									player.newVacancy.salary = 5;
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.driverCoors.x1 && x <= currentLocation.driverCoors.x2 && y >= currentLocation.driverCoors.y1 && y <= currentLocation.driverCoors.y2) {
									console.log('driver vacancy');
									player.newVacancy.employeeType = employeeTypes.driver;
									player.newVacancy.specialization = '';
									player.newVacancy.body = {
										chest: 0,
										waist: 0,
										hips: 0,
									},
									player.newVacancy.experience = 1;
									player.newVacancy.education = 1;
									player.newVacancy.salary = 6;
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.bouncerCoors.x1 && x <= currentLocation.bouncerCoors.x2 && y >= currentLocation.bouncerCoors.y1 && y <= currentLocation.bouncerCoors.y2) {
									console.log('bouncer vacancy');
									player.newVacancy.employeeType = employeeTypes.bouncer;
									player.newVacancy.specialization = '';
									player.newVacancy.body = {
										chest: 0,
										waist: 0,
										hips: 0,
									},
									player.newVacancy.experience = 0;
									player.newVacancy.education = 0;
									player.newVacancy.salary = 5;
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.vacancyCancelCoors.x1 && x <= currentLocation.vacancyCancelCoors.x2 && y >= currentLocation.vacancyCancelCoors.y1 && y <= currentLocation.vacancyCancelCoors.y2) {
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
								} else if (x >= currentLocation.vacancyNurseCoords.buttonOK.x1 && x <= currentLocation.vacancyNurseCoords.buttonOK.x2 && y >= currentLocation.vacancyNurseCoords.buttonOK.y1 && y <= currentLocation.vacancyNurseCoords.buttonOK.y2) {
									currentLocation.showNurseVacancy = false;
									player.publishVacancy(
										player.newVacancy.employeeType,
										player.newVacancy.specialization,
										player.newVacancy.body,
										player.newVacancy.education,
										player.newVacancy.experience,
										player.newVacancy.salary);
									console.log(`${player.newVacancy.employeeType} Vacancy: ok`);
									player.clearNewVacancy();
									console.log(`vacancies`,player.vacancies);
								} else if (x >= currentLocation.vacancyNurseCoords.buttonCancel.x1 && x <= currentLocation.vacancyNurseCoords.buttonCancel.x2 && y >= currentLocation.vacancyNurseCoords.buttonCancel.y1 && y <= currentLocation.vacancyNurseCoords.buttonCancel.y2) {
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
									console.log(`Doctor Vacancy: more experience`);
									if (player.newVacancy.experience < 50) {
										player.newVacancy.experience++;
									}
								} else if (x >= currentLocation.vacancyDoctorCoords.buttonExperienceLess.x1 && x <= currentLocation.vacancyDoctorCoords.buttonExperienceLess.x2 && y >= currentLocation.vacancyDoctorCoords.buttonExperienceLess.y1 && y <= currentLocation.vacancyDoctorCoords.buttonExperienceLess.y2) {
									console.log(`Doctor Vacancy: less experience`);
									if (player.newVacancy.experience > 0) {
										player.newVacancy.experience--;
									}
								} else if (x >= currentLocation.vacancyDoctorCoords.buttonOK.x1 && x <= currentLocation.vacancyDoctorCoords.buttonOK.x2 && y >= currentLocation.vacancyDoctorCoords.buttonOK.y1 && y <= currentLocation.vacancyDoctorCoords.buttonOK.y2) {
									currentLocation.showDoctorVacancy = false;
									player.publishVacancy(
										player.newVacancy.employeeType,
										player.newVacancy.specialization,
										player.newVacancy.body,
										player.newVacancy.education,
										player.newVacancy.experience,
										player.newVacancy.salary);
									console.log(`${player.newVacancy.employeeType} Vacancy: ok`);
									player.clearNewVacancy();
									console.log(`vacancies`,player.vacancies);
								} else if (x >= currentLocation.vacancyDoctorCoords.buttonCancel.x1 && x <= currentLocation.vacancyDoctorCoords.buttonCancel.x2 && y >= currentLocation.vacancyDoctorCoords.buttonCancel.y1 && y <= currentLocation.vacancyDoctorCoords.buttonCancel.y2) {
									currentLocation.showDoctorVacancy = false;
									console.log(`Doctor Vacancy: cancel`);
								} else {
									console.log(`invalid coordinates, still showing Doctor Vacancy`);
								}
							} else if (currentLocation.showCandidates) {
								if (x >= currentLocation.candidateCoords.buttonCancel.x1 && x <= currentLocation.candidateCoords.buttonCancel.x2 && y >= currentLocation.candidateCoords.buttonCancel.y1 && y <= currentLocation.candidateCoords.buttonCancel.y2) {
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
								console.log(`player.vacancies`, player.vacancies);
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
									player.newVacancy.employeeType = employeeTypes.nurse;
									player.newVacancy.experience = 3;
									player.newVacancy.education = 10;
									player.newVacancy.salary = 100;
									currentLocation.showNurseVacancy = true;
									currentLocation.choiceVacancyType = false;
								} else if (event.key === 's') {
									console.log('storeman vacancy');
								} else if (event.key === 't') {
									console.log('therapist vacancy');
								} else if (event.key === 'd') {
									console.log('dentist vacancy');
								} else if (event.key === 'p') {
									console.log('psychiatrist vacancy');
								} else if (event.key === 'g') {
									console.log('surgeon vacancy');
								} else if (event.key === 'h') {
									console.log('pathologist vacancy');
								} else if (event.key === 'c') {
									console.log('cook vacancy');
								} else if (event.key === 'd') {
									console.log('driver vacancy');
								} else if (event.key === 'b') {
									console.log('bouncerCoors vacancy');
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
		this.addPlayer(new Player('bot1', this.locations));
		this.addPlayer(new Player('bot2', this.locations));
		this.addPlayer(new Player('bot3', this.locations));
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
						this.ctx.drawImage(currentLocation.pauseImage, this.pauseImgX1, this.pauseImgY1, this.pauseImage.width, this.pauseImage.height);
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
				switch(employeeType) {
					case employeeTypes.nurse:
						return 'медсестра';
					case employeeTypes.doctor:
						return 'доктор';
					case employeeTypes.storeman:
						return 'кладовщик';
					case employeeTypes.driver:
						return 'водитель-механик';
					case employeeTypes.cook:
						return 'повар';
					case employeeTypes.bouncer:
						return 'вышибала';
					default:
						return 'unknown';
				}
			}
			let employeeType = getEmployeeType(vacancy.employeeType);
			if (vacancy.employeeType === employeeTypes.doctor) {
				const getDoctorSpecialization = function(specialization) {
					switch(specialization) {
						case doctorSpecializations.therapist:
							return 'терапевт';
						case doctorSpecializations.psychiatrist:
							return 'психиатр';
						case doctorSpecializations.dentist:
							return 'стоматолог';
						case doctorSpecializations.surgeon:
							return 'хирург';
						case doctorSpecializations.pathologist:
							return 'паталогоанатом';
						default:
							return 'unknown';
					}
				}
				employeeType = getDoctorSpecialization(vacancy.specialization);
			} else if (vacancy.employeeType === employeeTypes.nurse) {
				this.ctx.fillStyle = 'darkblue';
			}
			const maxWidth = this.vacancyNurseImage.width-75;
			this.ctx.fillText(`Вакансия:`, x, y, maxWidth);
			this.ctx.fillText(`на должность: ${employeeType}`, x, y+(30*1), maxWidth);
			this.ctx.fillText(`Требования:`, x, y+(30*2), maxWidth);
			this.ctx.fillText(`${vacancy.education} лет учёбы в универе,`, x, y+(30*3), maxWidth);
			this.ctx.fillText(`${vacancy.experience} лет опыта работы.`, x, y+(30*4), maxWidth);
			let lineNum = 5;
			if (vacancy.employeeType === employeeTypes.nurse) {
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
		if (this.players[0].currentCandidate) {
			const player = this.players[0];
			let candidate = player.currentCandidate;
			let candidateIndex = player.candidates.indexOf(candidate);
			let employeeType = 'непонятный кандидат';
			let additional = '';
			if (candidate instanceof Nurse) {
				employeeType = employeeTypes.nurse;
				additional = `${candidate.chest}*${candidate.waist}*${candidate.hips}`;
			} else if (candidate instanceof Doctor) {
				employeeType = employeeTypes.doctor + ' ' + candidate.specialization;
				additional = `IQ: ${candidate.iq}, сертификатов: ${candidate.certificates}`;
			} else if (candidate instanceof Storeman) {
				employeeType = employeeTypes.storeman;
			} else if (candidate instanceof Driver) {
				employeeType = employeeTypes.driver;
			} else if (candidate instanceof Cook) {
				employeeType = employeeTypes.cook;
			} else if (candidate instanceof Bouncer) {
				employeeType = employeeTypes.bouncer;
			}
			this.ctx.fillText(`${candidateIndex+1}) ${employeeType}: #${candidate.id}`, x, y);
			this.ctx.fillText(`'${candidate.name}', ${candidate.age} лет`, x, y+30);
			this.ctx.fillText(`учился ${candidate.education} лет,`, x, y+(30*2));
			this.ctx.fillText(`опыт работы ${candidate.experience} лет`, x, y+(30*3));
			let lineNum = 4;
			if (candidate instanceof Nurse) {
				this.ctx.fillText(`фигура ${additional}`, x, y+(30*lineNum));
				lineNum++;
			} else if (candidate instanceof Doctor) {
				this.ctx.fillText(`${additional}`, x, y+(30*lineNum));
				lineNum++;
			}
			this.ctx.fillText(`хочет зарплату ${candidate.salary}$ в день`, x, y+(30*lineNum));
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


