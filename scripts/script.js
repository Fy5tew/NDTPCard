const teamleads = [
	"Олег Михайлович",
	"Арина Егоровна",
	"Дарья Александровна",
]

const students = [
	{
        name: "Круглик Максим Сергеевич",
        photo: "student1.jpg",
        links: [
        	"https://instagram.com/kruglik.max",
        ],
	},
	{
        name: "Радюк Евгений Александрович",
        photo: "student2.jpg",
        links: [
        	"https://instagram.com/_zh_rad_",
        ],
	},
	{
        name: "Мацкевич Марк Николаевич",
        photo: "student3.jpg",
        links: [
        	"https://vk.com/m.waphtuos",
        ],
	},
	{
        name: "Янукович Евгений Дмитриевич",
        photo: "student4.jpg",
        links: [
        	"https://vk.com/evyanukovich",
        ],
	},
	{
        name: "Кляшторный Вячеслав Андреевич",
        photo: "student5.jpg",
        links: [
        	"https://instagram.com/shtornyy",
        ],
	},
	{
        name: "Батук Денис Сергеевич",
        photo: "student6.jpg",
        links: [
        	"https://instagram.com/_diu_410_",
        ],
	},
	{
        name: "Тарасенко Давид Игоревич",
        photo: "student7.jpg",
        links: [
        	"https://vk.com/d_15_david_15",
        ],
	},
	{
        name: "Койфман Давид Александрович",
        photo: "student8.jpg",
        links: [],
	},
	{
        name: "Ложечка Артём Александрович",
        photo: "student9.jpg",
        links: [
        	"https://vk.com/janclodvangog",
        ],
	},
	{
        name: "Слинка Егор Игоревич",
        photo: "student10.jpg",
        links: [
        	"https://vk.com/id685742225",
        ],
	},
]





function insertTeamleadCards() {
	for (let i = 0; i < teamleads.length; i++) {
		let card = `
<div class="teamlead_card">
	<li>
		<div class="img_container">
			<img src="images/teamleads/teamlead${i+1}.jpg">
		</div>
		<h3 class="teamlead_name">${teamleads[i]}</h3>
	</li>
</div>
		`;
		document.querySelector(".teamlead_list").insertAdjacentHTML("beforeEnd", card);
	}
}

function insertStudentCards() {
	for (let i = 0; i < students.length; i++) {
		let student = students[i];

		let links = "";
		for (let j in student.links) {
			let link = student.links[j];
			let type;

			if (/vk/.test(link)) {
				type = "VK";
			} else if (/instagram/.test(link)) {
				type = "Instagram";
			} else {
				continue;
			}

			links += `<a class="link" href="${link}" target="_blank"><img src="images/logo/${type}.png"></a>`;
		}

		let card = `
<div class="student_card">
	<li>
		<div class="img_container">
			<img src="images/students/${student.photo}">
		</div>
		<h3 class="student_name">${student.name}</h3>
		${links}
	</li>
</div>		
		`
		document.querySelector(".student_list").insertAdjacentHTML("beforeEnd", card);
	}
}

insertTeamleadCards();
insertStudentCards();