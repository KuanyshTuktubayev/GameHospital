const doctorNames = ['Dr. Johnson', 'Dr. Lee', 'Dr. Patel', 'Dr. Nguyen', 'Dr. Garcia', 'Dr. Wang', 'Dr. Hernandez', 'Dr. Smith', 'Dr. Kim', 'Dr. Jones'];
const nurseNames = ['Nurse Brown', 'Nurse Davis', 'Nurse Martinez', 'Nurse Wilson', 'Nurse Anderson', 'Nurse Thomas', 'Nurse Jackson', 'Nurse White', 'Nurse Harris', 'Nurse Martin'];
const employeeTypes = {
	doctor: 'doctor',
	nurse: 'nurse',
	storeman: 'storeman',
	cook: 'cook',
	bouncer: 'bouncer',
	driver: 'driver',
};
class Employee {
	constructor(name, age, experience, education, salary) {
		this.name = name;
		this.age = age;
		this.experience = experience;
		this.education = education;
		this.salary = salary;
		this.satisfaction = 50; // set a default satisfaction value of 50%
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
	constructor(name, age, experience, education, iq, certificates, salary) {
		super(name, age, experience, education, salary);
		this.iq = iq;
		this.certificates = certificates;
	}
}
class Nurse extends Employee {
	constructor(name, age, experience, education, chest, hips, salary) {
		super(name, age, experience, education, salary);
		this.chest = chest;
		this.hips = hips;
	}
}
class Storeman extends Employee {
	constructor(name, age, experience, education, salary) {
		super(name, age, experience, education, salary);
	}
}
class ResourceManager {
    constructor() {
        this.images = {};
    }
    loadImage(path) {
        if (!this.images[path]) {
            const image = new Image();
            image.src = path;
            this.images[path] = image;
        }
        return this.images[path];
    }
}
class Thing {
	constructor(name, priceToBuy, priceToSell, state, imagePath) {
		this.name = name;
		this.priceToBuy = priceToBuy;
		this.priceToSell = priceToSell;
		this.state = state;
		this.resourceManager = new ResourceManager();
		this.image = this.resourceManager.loadImage(imagePath);
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
		this.image.onload = () => {
            this.windowCoors = this.setWindowCoors();
            this.hrDoorCoors = this.setHRCoors();
            this.adminDoorCoors = this.setAdminCoors();
            this.realtorDoorCoors = this.setRealtorCoors();
            this.pauseBtnCoors = this.setPauseCoors();
        };
	}
	setWindowCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 5, x2: 170, y1: 60, y2: 245};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 7, x2: 220, y1: 55, y2: 250};
		} else {
			console.error(`${this.name} setWindowCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setHRCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 703, x2: 785, y1: 15, y2: 145};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 898, x2: 1010, y1: 13, y2: 142};
		} else {
			console.error(`${this.name} setHRCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setAdminCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 695, x2: 790, y1: 193, y2: 300};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 890, x2: 1013, y1: 190, y2: 300};
		} else {
			console.error(`${this.name} setAdminCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setRealtorCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 694, x2: 785, y1: 348, y2: 455};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 890, x2: 1005, y1: 348, y2: 453};
		} else {
			console.error(`${this.name} setRealtorCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setPauseCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 440, x2: 510, y1: 170, y2: 270};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 560, x2: 655, y1: 170, y2: 275};
		} else {
			console.error(`${this.name} setPauseCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
}
class HR extends Location {
	constructor(images, vacancyTypesImage) {
		super('Отдел кадров');
		this.image = images.background;
		this.vacancyTypesImage = images.vacancyTypesImage;
		this.vacancyDoctorImage = images.vacancyDoctorImage;
		this.vacancyNurseImage = images.vacancyNurseImage;
		this.candidatesImage = images.candidatesImage;
		this.image.onload = () => {
			this.windowCoors = this.setWindowCoors();
			this.officeDoorCoors = this.setOfficeCoors();
			this.vacancyCoors = this.setVacancyCoors();
			this.candidatesCoors = this.setCandidatesCoors();
        };
		this.choiceVacancyType = false;
		this.showNurseVacancy = false;
		this.showCandidates = false;
		this.vacancyTypesImage.onload = () => {
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
        };
		this.vacancyDoctorImage.onload = () => {
			this.vacancyDoctorCoords = new VacancyDoctorCoordinates(this.image.width, this.image.height);
        };
		this.vacancyNurseImage.onload = () => {
			this.vacancyNurseCoords = new VacancyNurseCoordinates(this.image.width, this.image.height);
			/*this.vSalaryMoreCoors = this.setVSalaryMoreCoors();
			this.vSalaryLessCoors = this.setVSalaryLessCoors();
			this.vOKCoors = this.setVOKCoors();
			this.vNoCoors = this.setVNoCoors();*/
        };
		this.candidatesImage.onload = () => {
			this.candidateCoords = new CandidateCoordinates(this.image.width, this.image.height);
			/*this.candPrevCoors = this.setCandPrevCoors();
			this.candNextCoors = this.setCandNextCoors();
			this.candCloseCoors = this.setCandCloseCoors();*/
        };
	}
	setWindowCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 10, x2: 178, y1: 20, y2: 115};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 15, x2: 230, y1: 20, y2: 120};
		} else {
			console.error(`${this.name} setWindowCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setOfficeCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 8, x2: 80, y1: 140, y2: 300};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 10, x2: 105, y1: 140, y2: 295};
		} else {
			console.error(`${this.name} setOfficeCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setVacancyCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 200, x2: 330, y1: 10, y2: 305};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 210, x2: 425, y1: 250, y2: 300};
		} else {
			console.error(`${this.name} setVacancyCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setCandidatesCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 390, x2: 575, y1: 260, y2: 310};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setCandidatesCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setNurseCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 210, x2: 335, y1: 20, y2: 100};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 210, x2: 345, y1: 20, y2: 110};
		} else {
			console.error(`${this.name} setNurseCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setStoremanCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 364, x2: 490, y1: 20, y2: 100};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 375, x2: 515, y1: 20, y2: 110};
		} else {
			console.error(`${this.name} setStoremanCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setTherapistCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 210, x2: 335, y1: 130, y2: 210};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 210, x2: 345, y1: 140, y2: 225};
		} else {
			console.error(`${this.name} setTherapistCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setDentistCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 364, x2: 490, y1: 130, y2: 210};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 375, x2: 515, y1: 140, y2: 230};
		} else {
			console.error(`${this.name} setDentistCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setPsychiatristCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 208, x2: 335, y1: 240, y2: 320};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setPsychiatristCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setSurgeonCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 364, x2: 490, y1: 240, y2: 320};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setSurgeonCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setPathologistCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 208, x2: 335, y1: 345, y2: 425};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setPathologistCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setCookCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 364, x2: 490, y1: 345, y2: 425};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setCookCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setDriverCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 208, x2: 335, y1: 454, y2: 535};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setDriverCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setBouncerCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 364, x2: 490, y1: 454, y2: 535};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setBouncerCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setVacancyCancelCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 520, x2: 580, y1: 480, y2: 530};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setVacancyCancelCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	/*setVSalaryMoreCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 215, x2: 240, y1: 430, y2: 450};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setVSalaryMoreCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setVSalaryLessCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 215, x2: 240, y1: 460, y2: 480};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setVSalaryLessCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setVOKCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 530, x2: 580, y1: 395, y2: 425};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setVOKCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setVNoCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 530, x2: 580, y1: 450, y2: 475};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setVNoCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}*/
	/*setCandPrevCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 215, x2: 245, y1: 460, y2: 480};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setCandCloseCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setCandNextCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 250, x2: 280, y1: 460, y2: 480};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setCandCloseCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setCandCloseCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 525, x2: 580, y1: 440, y2: 470};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		} else {
			console.error(`${this.name} setCandCloseCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}*/
}
class Administration extends Location {
	constructor(image) {
		super('Администрация');
		this.image = image;
		this.image.onload = () => {
			this.windowCoors = this.setWindowCoors();
			this.officeDoorCoors = this.setOfficeCoors();
        };
	}
	setWindowCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 130, x2: 290, y1: 15, y2: 90};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 165, x2: 375, y1: 15, y2: 95};
		} else {
			console.error(`${this.name} setWindowCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setOfficeCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 10, x2: 100, y1: 10, y2: 115};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 10, x2: 130, y1: 10, y2: 115};
		} else {
			console.error(`${this.name} setOfficeCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
}
class Realtor extends Location {
	constructor(image) {
		super('Риелтор');
		this.image = image;
		this.image.onload = () => {
			this.windowCoors = this.setWindowCoors();
			this.officeDoorCoors = this.setOfficeCoors();
        };
	}
	setWindowCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 140, x2: 310, y1: 15, y2: 105};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 180, x2: 400, y1: 20, y2: 110};
		} else {
			console.error(`${this.name} setWindowCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setOfficeCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 10, x2: 120, y1: 10, y2: 150};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 15, x2: 155, y1: 10, y2: 150};
		} else {
			console.error(`${this.name} setOfficeCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
}
class Street extends Location {
	constructor(image, office, hr, administration, realtor) {
		super('Улица');
		this.image = image;
		this.image.onload = () => {
			this.officeDoorCoors = this.setOfficeCoors();
			this.hrDoorCoors = this.setHRCoors();
			this.adminDoorCoors = this.setAdminCoors();
			this.realtorDoorCoors = this.setRealtorCoors();
        };
		this.office = office;
		this.hr = hr;
		this.administration = administration;
		this.realtor = realtor;
		this.hospital = null;
	}
	setOfficeCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 35, x2: 180, y1: 60, y2: 158};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 47, x2: 235, y1: 60, y2: 160};
		} else {
			console.error(`${this.name} setOfficeCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setHRCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 35, x2: 189, y1: 185, y2: 279};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 44, x2: 240, y1: 188, y2: 278};
		} else {
			console.error(`${this.name} setHRCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setAdminCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 30, x2: 185, y1: 310, y2: 375};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 41, x2: 237, y1: 310, y2: 376};
		} else {
			console.error(`${this.name} setAdminCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setRealtorCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 30, x2: 180, y1: 412, y2: 505};
		} else if (this.image.width === 1024 && this.image.height === 768) {
			return {x1: 30, x2: 235, y1: 410, y2: 500};
		} else {
			console.error(`${this.name} setRealtorCoors: incorrect image size! Cannot set coordinates!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
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
	constructor(employeeType, education, experience, salary) {
		this.employeeType = employeeType;
		this.age = 20 + education + experience;
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
		//let countOfNewCandidates = 0;
		if (this.calculateChance() === 1) {
			const numCandidates = Math.floor(Math.random() * 4); // Generate a random number of candidates between 0 and 3
			for (let i = 0; i < numCandidates; i++) {
				let age = this.age + Math.floor(Math.random() * 10) - 5;
				switch(this.employeeType) {
					default:
						age = 20 + this.experience + this.education + Math.floor(Math.random() * 10) - 5;
						break;
				}
				const experience = this.experience + Math.floor(Math.random() * 5) - 2;
				const education = this.education + Math.floor(Math.random() * 3) - 1;
				const minSalary = this.salary * 0.8; // 80% of vacancy's salary
				const maxSalary = this.salary * 1.2; // 120% of vacancy's salary
				const salary = Math.round( Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary ,0);
				let candidate;
				if (this.employeeType === employeeTypes.doctor) {
					const name = doctorNames[Math.floor(Math.random() * doctorNames.length)];
					const iq = this.education * 10 + Math.floor(Math.random() * 50) - 25;
					const certificates = Math.floor(Math.random() * 5);
					candidate = new Doctor(name, age, experience, education, iq, certificates, salary);
				} else if (this.employeeType === employeeTypes.nurse) {
					const name = nurseNames[Math.floor(Math.random() * nurseNames.length)];
					const chest = this.experience * 2 + Math.floor(Math.random() * 10) - 5;
					const hips = this.experience * 2 + Math.floor(Math.random() * 10) - 5;
					candidate = new Nurse(name, age, experience, education, chest, hips, salary);
				} else {
					console.log(`Don't generate candidates for this vacancy, unknown employeeType '${this.employeeType}'`);
				}
				this.candidates.push(candidate);
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
			experience: 0,
			education: 0,
			salary: 0
		}
	}
	publishVacancy(employeeType, education, experience, salary) {
		const vacancy = new Vacancy(employeeType, education, experience, salary);
		this.vacancies.push(vacancy);
	}
	updateCurrentCandidate() {
		if (this.currentCandidate === null) {
			for (let i = 0; i < this.vacancies.length; i++) {
				if (this.vacancies[i].candidates.length > 0) {
					this.currentCandidate = this.vacancies[i].candidates[0];
					break;
				}
			}
		}
	}
	getPreviousCandidate() {
		if (!this.vacancies || this.vacancies.length === 0) {
            return null;
        }
		
		if (this.currentCandidate === null) {
			// Перебираем все вакансии, возвращаем первого кандидата из первой вакансии с кандидатами
			for (let i = 0; i < this.vacancies.length; i++) {
				if (this.vacancies[i].candidates.length > 0) {
					return this.vacancies[i].candidates[0];
				}
			}
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
			for (let i = 0; i < this.vacancies.length; i++) {
				if (this.vacancies[i].candidates.length > 0) {
					return this.vacancies[i].candidates[0];
				}
			}
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
		this.clearParams();
		this.minuteDuration = minuteDuration || 5000;
		this.players = [];
		this.locations = [];
		this.clients = [];
		this.isLoading = true;
		this.gameStarted = false;
		this.isPaused = false;
		this.resourceManager = new ResourceManager();
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
	initializeStartImage() {
        const loadingImage = new Image();
        loadingImage.src = `./${this.imageFolder}/loading.jpg`;
        loadingImage.onload = () => {
			this.canvas.width = loadingImage.width;
			this.canvas.height = loadingImage.height;
            this.ctx.drawImage(loadingImage, 0, 0, this.canvas.width, this.canvas.height);
			this.loadImages();
			this.setPauseImageParams();
			let office = new Office(this.officeImage, this.pauseImage);
			let hrImages = {
				background: this.hrImage,
				vacancyTypesImage: this.vacancyTypesImage,
				vacancyDoctorImage: this.vacancyDoctorImage,
				vacancyNurseImage: this.vacancyNurseImage,
				candidatesImage: this.candidatesImage,
			};
			let hr = new HR(hrImages);
			let administration = new Administration(this.administationImage);
			let realtor = new Realtor(this.realtorImage);
			this.locations.push(office);
			this.locations.push(hr);
			this.locations.push(administration);
			this.locations.push(realtor);
			this.locations.push(new Street(this.streetImage, office, hr, administration, realtor));
			this.addPlayer(new Player('human1', this.locations));
			console.log(`game loaded`);
			this.isLoading = false;
        };
    }
	loadImages() {
		this.mainmenuImage = this.resourceManager.loadImage(`./${this.imageFolder}/mainmenu.jpg`);
		this.officeImage = this.resourceManager.loadImage(`./${this.imageFolder}/office.jpg`);
		this.streetImage = this.resourceManager.loadImage(`./${this.imageFolder}/street.jpg`);
		this.hrImage = this.resourceManager.loadImage(`./${this.imageFolder}/hr.jpg`);
		this.administationImage = this.resourceManager.loadImage(`./${this.imageFolder}/administation.jpg`);
		this.realtorImage = this.resourceManager.loadImage(`./${this.imageFolder}/realtor.jpg`);
		this.pauseImage = this.resourceManager.loadImage(`./${this.imageFolder}/paused.jpg`);
		this.vacancyTypesImage = this.resourceManager.loadImage(`./${this.imageFolder}/vacancyChoice.jpg`);
		this.vacancyDoctorImage = this.resourceManager.loadImage(`./${this.imageFolder}/vacancyDoctor.jpg`);
		this.vacancyNurseImage = this.resourceManager.loadImage(`./${this.imageFolder}/vacancyNurse.jpg`);
		this.candidatesImage = this.resourceManager.loadImage(`./${this.imageFolder}/candidates.jpg`);
	}
	setPauseImageParams() {
		this.pauseImgX1 = this.canvas.width/2 - this.pauseImage.width/2;
		this.pauseImgX2 = this.pauseImgX1 + this.pauseImage.width;
		this.pauseImgY1 = this.canvas.height/2 - this.pauseImage.height/2;
		this.pauseImgY2 = this.pauseImgY1 + this.pauseImage.height;
	}
	handleCanvasClick(event) {
		if (this.isLoading) {
			console.error(`resources are loading, wait...`);
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
									player.newVacancy.experience = 3;
									player.newVacancy.education = 10;
									player.newVacancy.salary = 100;
									currentLocation.showDoctorVacancy = false;
									currentLocation.showNurseVacancy = true;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.storemanCoors.x1 && x <= currentLocation.storemanCoors.x2 && y >= currentLocation.storemanCoors.y1 && y <= currentLocation.storemanCoors.y2) {
									console.log('storeman vacancy');
									player.newVacancy.employeeType = employeeTypes.storeman;
									player.newVacancy.experience = 1;
									player.newVacancy.education = 5;
									player.newVacancy.salary = 60;
									currentLocation.showNurseVacancy = true;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.therapistCoors.x1 && x <= currentLocation.therapistCoors.x2 && y >= currentLocation.therapistCoors.y1 && y <= currentLocation.therapistCoors.y2) {
									console.log('therapist vacancy');
									player.newVacancy.employeeType = employeeTypes.doctor;
									player.newVacancy.experience = 7;
									player.newVacancy.education = 11;
									player.newVacancy.salary = 300;
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.dentistCoors.x1 && x <= currentLocation.dentistCoors.x2 && y >= currentLocation.dentistCoors.y1 && y <= currentLocation.dentistCoors.y2) {
									console.log('dentist vacancy');
									player.newVacancy.employeeType = employeeTypes.doctor;
									player.newVacancy.experience = 7;
									player.newVacancy.education = 11;
									player.newVacancy.salary = 300;
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.psychiatristCoors.x1 && x <= currentLocation.psychiatristCoors.x2 && y >= currentLocation.psychiatristCoors.y1 && y <= currentLocation.psychiatristCoors.y2) {
									console.log('psychiatrist vacancy');
									player.newVacancy.employeeType = employeeTypes.doctor;
									player.newVacancy.experience = 7;
									player.newVacancy.education = 11;
									player.newVacancy.salary = 300;
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.surgeonCoors.x1 && x <= currentLocation.surgeonCoors.x2 && y >= currentLocation.surgeonCoors.y1 && y <= currentLocation.surgeonCoors.y2) {
									console.log('surgeon vacancy');
									player.newVacancy.employeeType = employeeTypes.doctor;
									player.newVacancy.experience = 7;
									player.newVacancy.education = 11;
									player.newVacancy.salary = 300;
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.pathologistCoors.x1 && x <= currentLocation.pathologistCoors.x2 && y >= currentLocation.pathologistCoors.y1 && y <= currentLocation.pathologistCoors.y2) {
									console.log('pathologist vacancy');
									player.newVacancy.employeeType = employeeTypes.doctor;
									player.newVacancy.experience = 7;
									player.newVacancy.education = 11;
									player.newVacancy.salary = 300;
									currentLocation.showDoctorVacancy = true;
									currentLocation.showNurseVacancy = false;
									currentLocation.choiceVacancyType = false;
								} else if (x >= currentLocation.cookCoors.x1 && x <= currentLocation.cookCoors.x2 && y >= currentLocation.cookCoors.y1 && y <= currentLocation.cookCoors.y2) {
									console.log('cook vacancy');
								} else if (x >= currentLocation.driverCoors.x1 && x <= currentLocation.driverCoors.x2 && y >= currentLocation.driverCoors.y1 && y <= currentLocation.driverCoors.y2) {
									console.log('driver vacancy');
								} else if (x >= currentLocation.bouncerCoors.x1 && x <= currentLocation.bouncerCoors.x2 && y >= currentLocation.bouncerCoors.y1 && y <= currentLocation.bouncerCoors.y2) {
									console.log('bouncer vacancy');
								} else if (x >= currentLocation.vacancyCancelCoors.x1 && x <= currentLocation.vacancyCancelCoors.x2 && y >= currentLocation.vacancyCancelCoors.y1 && y <= currentLocation.vacancyCancelCoors.y2) {
									currentLocation.choiceVacancyType = false;
									console.log('close choiceVacancyType');
								} else {
									console.log(`invalid coordinates, still showing choiceVacancyType`);
								}
							} else if (currentLocation.showNurseVacancy) {
								if (x >= currentLocation.vacancyNurseCoords.buttonCancel.x1 && x <= currentLocation.vacancyNurseCoords.buttonCancel.x2 && y >= currentLocation.vacancyNurseCoords.buttonCancel.y1 && y <= currentLocation.vacancyNurseCoords.buttonCancel.y2) {
									currentLocation.showNurseVacancy = false;
									console.log(`Nurse Vacancy: cancel`);
								} else if (x >= currentLocation.vacancyNurseCoords.buttonSalaryMore.x1 && x <= currentLocation.vacancyNurseCoords.buttonSalaryMore.x2 && y >= currentLocation.vacancyNurseCoords.buttonSalaryMore.y1 && y <= currentLocation.vacancyNurseCoords.buttonSalaryMore.y2) {
									console.log(`Nurse Vacancy: more salary`);
									player.newVacancy.salary++;
								} else if (x >= currentLocation.vacancyNurseCoords.buttonSalaryLess.x1 && x <= currentLocation.vacancyNurseCoords.buttonSalaryLess.x2 && y >= currentLocation.vacancyNurseCoords.buttonSalaryLess.y1 && y <= currentLocation.vacancyNurseCoords.buttonSalaryLess.y2) {
									console.log(`Nurse Vacancy: less salary`);
									player.newVacancy.salary--;
								} else if (x >= currentLocation.vacancyNurseCoords.buttonOK.x1 && x <= currentLocation.vacancyNurseCoords.buttonOK.x2 && y >= currentLocation.vacancyNurseCoords.buttonOK.y1 && y <= currentLocation.vacancyNurseCoords.buttonOK.y2) {
									currentLocation.showNurseVacancy = false;
									const newVacancy = {
										employeeType: player.newVacancy.employeeType,
										experience: player.newVacancy.experience,
										education: player.newVacancy.education,
										salary: player.newVacancy.salary
									};
									player.publishVacancy(newVacancy.employeeType, newVacancy.education, newVacancy.experience, newVacancy.salary);
									console.log(`${newVacancy.employeeType} Vacancy: ok`);
									player.clearNewVacancy();
									console.log(`vacancies`,player.vacancies);
								} else {
									console.log(`invalid coordinates, still showing Nurse Vacancy`);
								}
							} else if (currentLocation.showDoctorVacancy) {
								if (x >= currentLocation.vacancyDoctorCoords.buttonCancel.x1 && x <= currentLocation.vacancyDoctorCoords.buttonCancel.x2 && y >= currentLocation.vacancyDoctorCoords.buttonCancel.y1 && y <= currentLocation.vacancyDoctorCoords.buttonCancel.y2) {
									currentLocation.showDoctorVacancy = false;
									console.log(`Doctor Vacancy: cancel`);
								} else if (x >= currentLocation.vacancyDoctorCoords.buttonSalaryMore.x1 && x <= currentLocation.vacancyDoctorCoords.buttonSalaryMore.x2 && y >= currentLocation.vacancyDoctorCoords.buttonSalaryMore.y1 && y <= currentLocation.vacancyDoctorCoords.buttonSalaryMore.y2) {
									console.log(`Doctor Vacancy: more salary`);
									player.newVacancy.salary++;
								} else if (x >= currentLocation.vacancyDoctorCoords.buttonSalaryLess.x1 && x <= currentLocation.vacancyDoctorCoords.buttonSalaryLess.x2 && y >= currentLocation.vacancyDoctorCoords.buttonSalaryLess.y1 && y <= currentLocation.vacancyDoctorCoords.buttonSalaryLess.y2) {
									console.log(`Doctor Vacancy: less salary`);
									player.newVacancy.salary--;
								} else if (x >= currentLocation.vacancyDoctorCoords.buttonOK.x1 && x <= currentLocation.vacancyDoctorCoords.buttonOK.x2 && y >= currentLocation.vacancyDoctorCoords.buttonOK.y1 && y <= currentLocation.vacancyDoctorCoords.buttonOK.y2) {
									currentLocation.showDoctorVacancy = false;
									const newVacancy = {
										employeeType: player.newVacancy.employeeType,
										experience: player.newVacancy.experience,
										education: player.newVacancy.education,
										salary: player.newVacancy.salary
									};
									player.publishVacancy(newVacancy.employeeType, newVacancy.education, newVacancy.experience, newVacancy.salary);
									console.log(`${newVacancy.employeeType} Vacancy: ok`);
									player.clearNewVacancy();
									console.log(`vacancies`,player.vacancies);
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
		this.clearParams();
		this.clients = [];
		console.log(`game started`);
		requestAnimationFrame(this.loop.bind(this));
	}
	clearParams() {
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
			this.clearParams();
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
						this.clearParams();
					}
				}
			} else {
				this.clearParams();
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
				if (player.currentCandidate === null) {
					player.updateCurrentCandidate();
				}
			});
			this.generateNewClients();
			//console.log(`${this.time}`);
		}
	}
	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		if (this.isLoading) {
			this.ctx.drawImage(this.loadingImage, 0, 0, this.canvas.width, this.canvas.height);
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
					} else if (currentLocation.showNurseVacancy) {
						this.ctx.drawImage(currentLocation.vacancyNurseImage, 200, 100, this.vacancyNurseImage.width, this.vacancyNurseImage.height);
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
	drawCandidate() {
		this.ctx.font = '20px Arial';
		this.ctx.fillStyle = 'white';
		let x = 0;
		let y = 0;
		if (this.canvas.width === 800 && this.canvas.height === 600) {
			x = 250;
			y = 200;
		} else if (this.canvas.width === 1024 && this.canvas.height === 768) {
			x = 390;
			y = 460;
		}
		if (this.players[0].currentCandidate) {
			let candidate = this.players[0].currentCandidate;
			this.ctx.fillText(`candidate:`, x, y);
			this.ctx.fillText(`'${candidate.name}', age ${candidate.age}`, x, y+30);
			this.ctx.fillText(`education ${candidate.education} experience ${candidate.experience}`, x, y+30+30);
			this.ctx.fillText(`salary ${candidate.salary}`, x, y+30+30+30);
		} else {
			this.ctx.fillText(`no candidates`, x, y);
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
//testing:
//let vacancyParams = {employeeType: employeeTypes.doctor, experience: 11, education: 8, salary: 10000};
//game.players[0].publishVacancy(vacancyParams.employeeType, vacancyParams.education, vacancyParams.experience, vacancyParams.salary);


