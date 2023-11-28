const doctorNames = ["Dr. Johnson", "Dr. Lee", "Dr. Patel", "Dr. Nguyen", "Dr. Garcia", "Dr. Wang", "Dr. Hernandez", "Dr. Smith", "Dr. Kim", "Dr. Jones"];
const nurseNames = ["Nurse Brown", "Nurse Davis", "Nurse Martinez", "Nurse Wilson", "Nurse Anderson", "Nurse Thomas", "Nurse Jackson", "Nurse White", "Nurse Harris", "Nurse Martin"];
const Locations = {
	OFFICE: 'office',
	STREET: 'street',
	HR: 'hr',
	ADMINISTRATION: 'administration',
	REALTOR: 'realtor'
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
class Location {
	constructor(name) {
		this.name = name;
	}
}
class Office extends Location {
	constructor(image, pauseImage) {
		super("Офис");
		this.image = image;
		this.pauseImage = pauseImage;
		this.interactObjects = {
			WINDOW: 'window',
			HR: 'hr',
			ADMIN: 'administration',
			REALTOR: 'realtor',
			PAUSE: 'pause'
		};
		this.windowCoors = this.setObjectsCoors(this.interactObjects.WINDOW);
		this.hrDoorCoors = this.setObjectsCoors(this.interactObjects.HR);
		this.adminDoorCoors = this.setObjectsCoors(this.interactObjects.ADMIN);
		this.realtorDoorCoors = this.setObjectsCoors(this.interactObjects.REALTOR);
		this.pauseBtnCoors = this.setObjectsCoors(this.interactObjects.PAUSE);
	}
	setObjectsCoors(obj) {
		if ((this.image.width === 800 && this.image.height === 600)
			|| (this.image.width === 1024 && this.image.height === 600)) {
			switch (obj) {
				case this.interactObjects.WINDOW:
					return this.setWindowCoors();
				case this.interactObjects.HR:
					return this.setHRCoors();
				case this.interactObjects.ADMIN:
					return this.setAdminCoors();
				case this.interactObjects.REALTOR:
					return this.setRealtorCoors();
				case this.interactObjects.PAUSE:
					return this.setPauseCoors();
				default:
					console.error(`${this.name}: cannot set coordinates for unknown object '${obj}'!`);
					return {x1: 0, x2: 0, y1: 0, y2: 0};
			}
		}
		else {
			console.error(`${this.name}: incorrect image size! Cannot set coordinates for object '${obj}'!`);
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setWindowCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			this.windowCoors =  {x1: 5, x2: 170, y1: 60, y2: 245};
		} else if (this.image.width === 1024 && this.image.height === 600) {
			this.windowCoors =  {x1: 7, x2: 220, y1: 55, y2: 250};
		} else {
			this.windowCoors =  {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setHRCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 703, x2: 785, y1: 15, y2: 145};
		} else if (this.image.width === 1024 && this.image.height === 600) {
			return {x1: 898, x2: 1010, y1: 13, y2: 142};
		} else {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setAdminCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 695, x2: 790, y1: 193, y2: 300};
		} else if (this.image.width === 1024 && this.image.height === 600) {
			return {x1: 890, x2: 1013, y1: 190, y2: 300};
		} else {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setRealtorCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 694, x2: 785, y1: 348, y2: 455};
		} else if (this.image.width === 1024 && this.image.height === 600) {
			return {x1: 890, x2: 1005, y1: 348, y2: 453};
		} else {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
	setPauseCoors() {
		if (this.image.width === 800 && this.image.height === 600) {
			return {x1: 440, x2: 510, y1: 170, y2: 270};
		} else if (this.image.width === 1024 && this.image.height === 600) {
			return {x1: 560, x2: 655, y1: 170, y2: 275};
		} else {
			return {x1: 0, x2: 0, y1: 0, y2: 0};
		}
	}
}
class HR extends Location {
	constructor(image) {
		super("Отдел кадров");
		this.image = image;
	}
}
class Administration extends Location {
	constructor(image) {
		super("Администрация");
		this.image = image;
	}
}
class Realtor extends Location {
	constructor(image) {
		super("Риелтор");
		this.image = image;
	}
}
class Street extends Location {
	constructor(image, office, hr, administration, realtor) {
		super("Улица");
		this.image = image;
		this.office = office;
		this.hr = hr;
		this.administration = administration;
		this.realtor = realtor;
		this.hospital = null;
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
		super("Ресепшен", 5, 4);
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
		super("Зал ожидания", 8, 7);
		this.interiorItems = [new PlasticChair(0, 9, 35), new WoodenChair(0, 12, 85), new PersianRug(0, 115, 37)];
		this.supplies = [new Magazine('автомобильный журнал', 0, 3, 46)];
		this.clients = [];
	}
}
class TherapistOffice extends Room {
	constructor() {
		super("Кабинет терапевта", 7, 6);
	}
}
class Vacancy {
	constructor(employeeType, age, experience, education, salary) {
		this.employeeType = employeeType;
		this.age = age;
		this.experience = experience;
		this.education = education;
		this.publishTime = new Date();
		this.durationByMinutes = 120;
		this.candidates = [];
	}
	calculateChance() {
		// Calculate the chance of generating a candidate based on the parameter values
		let chance = 0.5; // default chance
		switch (this.employeeType) {
			case "doctor":
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
			case "nurse":
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
				const age = this.age + Math.floor(Math.random() * 10) - 5;
				const experience = this.experience + Math.floor(Math.random() * 5) - 2;
				const education = this.education + Math.floor(Math.random() * 3) - 1;
				const minSalary = this.salary * 0.8; // 80% of vacancy's salary
				const maxSalary = this.salary * 1.2; // 120% of vacancy's salary
				const salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
				let candidate;
				if (this.employeeType === "doctor") {
					const name = doctorNames[Math.floor(Math.random() * doctorNames.length)];
					const iq = this.education * 10 + Math.floor(Math.random() * 50) - 25;
					const certificates = Math.floor(Math.random() * 5);
					candidate = new Doctor(name, age, experience, education, iq, certificates, salary);
				} else if (this.employeeType === "nurse") {
					const name = nurseNames[Math.floor(Math.random() * nurseNames.length)];
					const chest = this.education * 2 + Math.floor(Math.random() * 10) - 5;
					const hips = this.education * 2 + Math.floor(Math.random() * 10) - 5;
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
		this.currentLocation = Locations.OFFICE;
		//this.currentLocation = this.locations.find(loc => loc instanceof Office);
		let limitsOfRentingRooms = {
			maxReceptions: 1,
			maxWaitingRooms: 5,
			maxTherapistOffices: 10,
		};
		this.setLimitsForRooms(limitsOfRentingRooms);
	}
	setLimitsForRooms(limitsOfRooms) {
		this.maxReceptions = limitsOfRooms.maxReceptions;
		this.maxWaitingRooms = limitsOfRooms.maxWaitingRooms;
		this.maxTherapistOffices = limitsOfRooms.maxTherapistOffices;
	}
	publishVacancy(employeeType, age, experience, education, salary) {
		const vacancy = new Vacancy(employeeType, age, experience, education, salary);
		this.vacancies.push(vacancy);
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
		this.canvas = canvasElement;
		this.ctx = this.canvas.getContext("2d");
		this.imageFolder = imageFolder;
        this.initializeStartImage();
		this.fps = 60;
		this.interval = 1000 / this.fps;
		this.startTime = new Date(2000, 0, 1, 0, 0, 0);
		this.clearParams();
		this.minuteDuration = minuteDuration || 5000;
		this.players = [];
		this.locations = [];
		this.clients = [];
		this.gameStarted = false;
		this.isPaused = false;
		this.resourceManager = new ResourceManager();
		this.canvas.addEventListener("click", (event) => this.handleCanvasClick(event));
		window.addEventListener("keydown", (event) => this.handleKeyDown(event));
		requestAnimationFrame(this.loop.bind(this));
	}
	initializeStartImage() {
        const startImage = new Image();
        startImage.src = `./${this.imageFolder}/title.jpg`;
        startImage.onload = () => {
			this.canvas.width = startImage.width;
			this.canvas.height = startImage.height;
            this.ctx.drawImage(startImage, 0, 0, this.canvas.width, this.canvas.height);
			this.loadImages();
			this.setPauseImageParams();
			let office = new Office(this.officeImage, this.pauseImage);
			let hr = new HR(this.hrImage);
			let administration = new Administration(this.administationImage);
			let realtor = new Realtor(this.realtorImage);
			this.locations.push(office);
			this.locations.push(hr);
			this.locations.push(administration);
			this.locations.push(realtor);
			this.locations.push(new Street(this.streetImage, office, hr, administration, realtor));
			this.addPlayer(new Player('human1', this.locations));
			console.log('player[0].currentLocation',this.players[0].currentLocation);
        };
    }
	loadImages() {
		this.officeImage = this.resourceManager.loadImage(`./${this.imageFolder}/office.jpg`);
		this.streetImage = this.resourceManager.loadImage(`./${this.imageFolder}/street.jpg`);
		this.hrImage = this.resourceManager.loadImage(`./${this.imageFolder}/hr.jpg`);
		this.administationImage = this.resourceManager.loadImage(`./${this.imageFolder}/administation.jpg`);
		this.realtorImage = this.resourceManager.loadImage(`./${this.imageFolder}/realtor.jpg`);
		this.pauseImage = this.resourceManager.loadImage(`./${this.imageFolder}/paused.jpg`);
	}
	setPauseImageParams() {
		this.pauseImgX1 = this.canvas.width/2 - this.pauseImage.width/2;
		this.pauseImgX2 = this.pauseImgX1 + this.pauseImage.width;
		this.pauseImgY1 = this.canvas.height/2 - this.pauseImage.height/2;
		this.pauseImgY2 = this.pauseImgY1 + this.pauseImage.height;
	}
	handleCanvasClick(event) {
		//TODO: when pictures will be ready it need to change x and y for every clicking places
		//TODO: add key press to quick move
		if (this.gameStarted) {
			const x = event.clientX - this.canvas.getBoundingClientRect().left;
			const y = event.clientY - this.canvas.getBoundingClientRect().top;
			console.log('x',x,'y',y);
			if (this.isPaused) {
				if (x >= this.pauseImgX1 && x <= this.pauseImgX2 && y >= this.pauseImgY1 && y <= this.pauseImgY2) {
					this.isPaused = false;
				}
			} else {
				let currentLocation = this.players[0].currentLocation;
				switch (currentLocation) {
					case Locations.OFFICE:
						if (this.canvas.width === 800 && this.canvas.height === 600) {
							if (x >= 440 && x <= 510 && y >= 170 && y <= 270) {
								this.isPaused = true;
							} else if (x >= 5 && x <= 170 && y >= 60 && y <= 245) {
								currentLocation = Locations.STREET;
							} else if (x >= 703 && x <= 785 && y >= 15 && y <= 145) {
								currentLocation = Locations.HR;
							} else if (x >= 695 && x <= 790 && y >= 193 && y <= 300) {
								currentLocation = Locations.ADMINISTRATION;
							} else if (x >= 694 && x <= 785 && y >= 348 && y <= 455) {
								currentLocation = Locations.REALTOR;
							}
						} else if (this.canvas.width === 1024 && this.canvas.height === 600) {
							if (x >= 560 && x <= 655 && y >= 170 && y <= 275) {
								this.isPaused = true;
							} else if (x >= 7 && x <= 220 && y >= 55 && y <= 250) {
								currentLocation = Locations.STREET;
							} else if (x >= 898 && x <= 1010 && y >= 13 && y <= 142) {
								currentLocation = Locations.HR;
							} else if (x >= 890 && x <= 1013 && y >= 190 && y <= 300) {
								currentLocation = Locations.ADMINISTRATION;
							} else if (x >= 890 && x <= 1005 && y >= 348 && y <= 453) {
								currentLocation = Locations.REALTOR;
							}
						}
						break;
					case Locations.STREET:
						if (this.canvas.width === 800 && this.canvas.height === 600) {
							if (x >= 35 && x <= 180 && y >= 60 && y <= 158) {
								currentLocation = Locations.OFFICE;
							} else if (x >= 35 && x <= 189 && y >= 185 && y <= 279) {
								currentLocation = Locations.HR;
							} else if (x >= 30 && x <= 185 && y >= 310 && y <= 375) {
								currentLocation = Locations.ADMINISTRATION;
							} else if (x >= 30 && x <= 180 && y >= 412 && y <= 505) {
								currentLocation = Locations.REALTOR;
							}
						} else if (this.canvas.width === 1024 && this.canvas.height === 600) {
							if (x >= 47 && x <= 235 && y >= 60 && y <= 160) {
								currentLocation = Locations.OFFICE;
							} else if (x >= 44 && x <= 240 && y >= 188 && y <= 278) {
								currentLocation = Locations.HR;
							} else if (x >= 41 && x <= 237 && y >= 310 && y <= 376) {
								currentLocation = Locations.ADMINISTRATION;
							} else if (x >= 30 && x <= 235 && y >= 410 && y <= 500) {
								currentLocation = Locations.REALTOR;
							}
						}
						break;
					case Locations.HR:
						if (this.canvas.width === 800 && this.canvas.height === 600) {
							if (x >= 8 && x <= 80 && y >= 140 && y <= 300) {
								currentLocation = Locations.OFFICE;
							} else if (x >= 10 && x <= 178 && y >= 20 && y <= 115) {
								currentLocation = Locations.STREET;
							}
						} else if (this.canvas.width === 1024 && this.canvas.height === 600) {
							if (x >= 10 && x <= 105 && y >= 140 && y <= 295) {
								currentLocation = Locations.OFFICE;
							} else if (x >= 15 && x <= 230 && y >= 20 && y <= 120) {
								currentLocation = Locations.STREET;
							}
						}
						break;
					case Locations.ADMINISTRATION:
						if (this.canvas.width === 800 && this.canvas.height === 600) {
							if (x >= 10 && x <= 100 && y >= 10 && y <= 115) {
								currentLocation = Locations.OFFICE;
							} else if (x >= 130 && x <= 290 && y >= 15 && y <= 90) {
								currentLocation = Locations.STREET;
							}
						} else if (this.canvas.width === 1024 && this.canvas.height === 600) {
							if (x >= 10 && x <= 130 && y >= 10 && y <= 115) {
								currentLocation = Locations.OFFICE;
							} else if (x >= 165 && x <= 375 && y >= 15 && y <= 95) {
								currentLocation = Locations.STREET;
							}
						}
						break;
					case Locations.REALTOR:
						if (this.canvas.width === 800 && this.canvas.height === 600) {
							if (x >= 10 && x <= 120 && y >= 10 && y <= 150) {
								currentLocation = Locations.OFFICE;
							} else if (x >= 140 && x <= 310 && y >= 15 && y <= 105) {
								currentLocation = Locations.STREET;
							}
						} else if (this.canvas.width === 1024 && this.canvas.height === 600) {
							if (x >= 15 && x <= 155 && y >= 10 && y <= 150) {
								currentLocation = Locations.OFFICE;
							} else if (x >= 180 && x <= 400 && y >= 20 && y <= 110) {
								currentLocation = Locations.STREET;
							}
						}
						break;
					default:
						break;
				}
				this.players[0].currentLocation = currentLocation;
			}
			this.draw();
		} else {
			this.start();
		}
	}
	handleKeyDown(event) {
		if (this.gameStarted) {
			if (this.isPaused) {
				if (event.altKey && event.key === 'p') {
					this.isPaused = false;
				}
			} else {
				let currentLocation = this.players[0].currentLocation;
				if (event.altKey && event.key === 'p') {
					currentLocation = Locations.OFFICE;
					this.isPaused = !this.isPaused;
				} else {
					switch (event.key) {
						case 'p':
							currentLocation = Locations.OFFICE;
							this.isPaused = !this.isPaused;
							break;
						case 'o':
							currentLocation = Locations.OFFICE;
							break;
						case 's':
							currentLocation = Locations.STREET;
							break;
						case 'h':
							currentLocation = Locations.HR;
							break;
						case 'a':
							currentLocation = Locations.ADMINISTRATION;
							break;
						case 'r':
							currentLocation = Locations.REALTOR;
							break;
						default:
							break;
					}
				}
				this.players[0].currentLocation = currentLocation;
			}
			this.draw();
		} else {
			if (event.code === 'Enter' || event.code === 'Space' || event.code === 'Escape') {
				this.start();
			}
		}
	}
	start() {
		if (this.gameStarted) {
			return;
		}
		this.addPlayer(new Player('bot1', this.locations));
		this.addPlayer(new Player('bot2', this.locations));
		this.addPlayer(new Player('bot3', this.locations));
		console.log('players',this.players);
		this.gameStarted = true;
		this.startTime = new Date(2000, 0, 0, 23, 59, 59);
		this.clearParams();
		this.clients = [];
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
		if (this.gameStarted) {
			this.currentTime = currentTime;
			const elapsedTime = this.currentTime - this.lastTime;
			if (elapsedTime > this.interval) {
				this.update(elapsedTime);
				this.draw();
				this.lastTime = this.currentTime - (elapsedTime % this.interval);
			} else {
				const chechingTime = new Date(2000, 0, 0, 23, 59, 59);
				if (this.startTime.toLocaleDateString() === chechingTime.toLocaleDateString()) {
					this.startTime = new Date(2000, 0, 1, 0, 0, 0);
					this.clearParams();
				}
			}
        }
		requestAnimationFrame(this.loop.bind(this));
	}
	update(elapsedTime) {
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
			});
			this.generateNewClients();
			//console.log(`${this.time}`);
		}
	}
	draw() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		switch (this.players[0].currentLocation) {
			case Locations.OFFICE:
				this.ctx.drawImage(this.officeImage, 0, 0, this.canvas.width, this.canvas.height);
				this.drawTime();
				if (this.isPaused) {
					this.ctx.drawImage(this.pauseImage, this.pauseImgX1, this.pauseImgY1, this.pauseImage.width, this.pauseImage.height);
				}
				break;
			case Locations.STREET:
				this.ctx.drawImage(this.streetImage, 0, 0, this.canvas.width, this.canvas.height);
				break;
			case Locations.HR:
				this.ctx.drawImage(this.hrImage, 0, 0, this.canvas.width, this.canvas.height);
				break;
			case Locations.ADMINISTRATION:
				this.ctx.drawImage(this.administationImage, 0, 0, this.canvas.width, this.canvas.height);
				break;
			case Locations.REALTOR:
				this.ctx.drawImage(this.realtorImage, 0, 0, this.canvas.width, this.canvas.height);
				break;
			default:
				break;
		}
	}
	drawTime() {
		this.ctx.font = "20px Arial";
		this.ctx.fillStyle = "white";
		let x = 0;
		let y = 0;
		if (this.canvas.width === 800 && this.canvas.height === 600) {
			x = 230;
			y = 50;
		} else if (this.canvas.width === 1024 && this.canvas.height === 600) {
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
}
let urlParams;
let selectedResolution;
try {
	urlParams = new URLSearchParams(window.location.search);
	selectedResolution = urlParams.get("resolution");
} catch {
	localStorage.getItem("selectedResolution", selectedResolution);
}
try {
	const imageFolder = selectedResolution ? `./${selectedResolution}/` : './1024-600/';
	const gameMinuteDuration = 5000;
	const gameCanvas = document.getElementById("canvas");
	const game = new Game(gameCanvas, gameMinuteDuration, imageFolder);
} catch(e) {
	console.error(e);
}
//testing:
//let vacancyParams = {employeeType: 'doctor', age: 45, experience: 11, education: 8, salary: 10000};
//game.players[0].publishVacancy(vacancyParams.employeeType, vacancyParams.age, vacancyParams.experience, vacancyParams.education, vacancyParams.salary);


