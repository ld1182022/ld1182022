let documents = {
	biology: [
		{
			name: "undefined",
			url: "#"		
		},
		{
			name: "undefined",
			url: "#"		
		}
	],
	phystrain: [

	],
	anatomy: [
		{
			name: "Синельников 1 том",
			url: "documents/anatomy/sinelnikovT1.pdf"		
		},
		{
			name: "Синельников 2 том",
			url: "documents/anatomy/sinelnikovT2.pdf"		
		},
		{
			name: "Синельников 3 том",
			url: "documents/anatomy/sinelnikovT3.pdf"		
		},
		{
			name: "Синельников 4 том",
			url: "documents/anatomy/sinelnikovT4.pdf"		
		},
		{
			name: "Сапин 1 том",
			url: "documents/anatomy/Сапин1.pdf"		
		},
		{
			name: "Сапин 2 том",
			url: "documents/anatomy/Сапин2.pdf"		
		},
		{
			name: "Анатомия зубов Гайворонский",
			url: "documents/anatomy/Анатомия_зубов.pdf"		
		},
		{
			name: "Дыхательная система Гайворонский",
			url: "documents/anatomy/Дыхательная_система.pdf"		
		},
		{
			name: "Пищеварительная система Гайворонский",
			url: "documents/anatomy/Пищеварит_система.pdf"		
		},
		{
			name: "Мышцы Гайворонский",
			url: "documents/anatomy/Мышцы.pdf"		
		},
		{
			name: "Остеология Гайворонский",
			url: "documents/anatomy/Остеология.pdf"		
		},
		{
			name: "Синдесмология Гайворонский",
			url: "documents/anatomy/Синдесмология.pdf"		
		},
		{
			name: "Череп Гайворонский",
			url: "documents/anatomy/Череп.pdf"		
		},
	],
	economy: [
		{
			name: "Все лекции",
			url: "documents/economy/economy.pdf"		
		}
	],
	latin: [
		{
			name: "Латинский язык и основы медицинской терминологии",
			url: "documents/latin/latinsckiy_yazik_i_osnovi_medicinskoy_terminologii.pdf"		
		}
	],
	bioorgany: [
		{ 
			name: "undefined",
			url: "#"		
		}
	],
	bioetika: [
		{
			name: "undefined",
			url: "#"		
		}
	],
	gistology: [
		{
			name: "undefined",
			url: "#"		
		}
	],
	kurator: [
		{
			name: "undefined",
			url: "#"		
		}
	],
	informatica: [
		{
			name: "undefined",
			url: "#"		
		}
	],
	english: [
		{
			name: "undefined",
			url: "#"		
		}
	]
}

function viewDocsFunc() {
	document.getElementById("docs_view").innerHTML = ""
	for (var i = 0; i < documents[selectDisc(openedDiscipline)].length; i++) {
		document.getElementById("docs_view").innerHTML += "<div class='doc'>" + "<div class='doc_name'>" + documents[selectDisc(openedDiscipline)][i].name + "</div>" + "<a href=" + documents[selectDisc(openedDiscipline)][i].url +" download class='doc_download'><img src='img/download.png'>" + "</a></div>"
	}
}
