const teamleads = [
	"Олег Михайлович",
	"Арина Егоровна",
	"Дарья Александровна",
]

const students = [
	"Круглик Максим Сергеевич",
	"Радюк Евгений Александрович",
	"Мацкевич Марк Николаевич",
	"Янукович Евгений Дмитриевич",
	"Кляшторный Вячеслав Андреевич",
	"Батук Денис Сергеевич",
	"Тарасенко Давид Игоревич",
	"Койфман Давид Александрович",
	"Ложечка Артём Александрович",
	"Слинка Егор Игоревич",
]





function insertTeamleadCards() {
	for (let i = 0; i < teamleads.length; i++) {
		let card = `
<div class="teamlead_card">
	<li>
		<div class="img_container">
			<img src="images/teamlead${i+1}.jpg">
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
		let card = `
<div class="student_card">
	<li>
		<div class="img_container">
			<img src="images/student${i+1}.jpg">
		</div>
		<h3 class="student_name">${students[i]}</h3>
	</li>
</div>		
		`
		document.querySelector(".student_list").insertAdjacentHTML("beforeEnd", card);
	}
}

insertTeamleadCards();
insertStudentCards();