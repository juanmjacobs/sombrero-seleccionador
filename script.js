const questions = [
    {
        text: "¿Qué prefieres hacer en tu tiempo libre?",
        options: [
            { text: "Leer un buen libro", team: "gasti" },
            { text: "Juntada con amigos", team: "juano" }
        ]
    },
    {
        text: "¿Tocas algun instrumento?",
        options: [
            { text: "Si", team: "juano" },
            { text: "No", team: "gasti" }
        ]
    },
    {
        text: "¿Cuál es tu approach para resolver problemas?",
        options: [
            { text: "Analizar cuidadosamente todas las opciones", team: "gasti" },
            { text: "Seguir tu instinto y actuar rápidamente", team: "juano" }
        ]
    },
    {
        text: "¿Que sistema operativo preferis?",
        options: [
            { text: "Linux", team: "juano" },
            { text: "macOS", team: "Gasti" },
        ]
    },
    {
        text: "Si fueras lider de un equipo de desarrollo hace mas de 6 años y tuvieras que meter hotfix siendo las 6 de las tarde de un lunes. ¿Que harias?",
        options: [
            { text: "Espero que alguien revise mi código para poder mergear", team: "gasti" },
            { text: "Merge sin ningun tipo de temor al RSI", team: "juano" },
        ]
    },
    {
        text: "Si tuvieras que elegir un IDE por el resto de tu vida ¿Cual seria?",
        options: [
            { text: "Sublime", team: "juano" },
            { text: "VS Code", team: "gasti" },
        ]
    },
    {
        text: "¿Que sistema operativo preferis?",
        options: [
            { text: "Android", team: "juano" },
            { text: "iOS", team: "gasti" },
        ]
    },
    {
        text: "¿Cómo te describes a ti mismo?",
        options: [
            { text: "Reflexivo y calmado", team: "gasti" },
            { text: "Extrovertido y enérgico", team: "juano" }
        ]
    },
    {
        text: "¿Qué prefieres para tus vacaciones?",
        options: [
            { text: "Un viaje cultural a museos y sitios históricos", team: "gasti" },
            { text: "Una aventura llena de naturaleza", team: "juano" }
        ]
    },
    {
        text: "¿Cuál es tu relación con el café?",
        options: [
            { text: "Lo necesito para sobrevivir cada día", team: "gasti" },
            { text: "Sólo lo tomo en ocasiones", team: "juano" }
        ]
    },
    {
        text: "¿Ves anime?",
        options: [
            { text: "No, veía de chico", team: "juano" },
            { text: "Sí, me encanta", team: "gasti" }
        ]
    },
    {
        text: "¿Cuál es tu actitud ante las reuniones diarias de equipo?",
        options: [
            { text: "Prefiero reuniones cortas y al grano", team: "juano" },
            { text: "Me gusta compartir ideas y socializar", team: "gasti" }
        ]
    },
    {
        text: "¿Cuál es tu estilo de playlist favorita para trabajar?",
        options: [
            { text: "Lo-fi o música instrumental", team: "gasti" },
            { text: "Rock o algo movido para motivarme", team: "juano" }
        ]
    }
];

const quizContainer = document.getElementById('quiz');

questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    if (index === 0) questionDiv.classList.add('active');
    questionDiv.innerHTML = `<p>${index + 1}. ${question.text}</p>`;

    question.options.forEach(option => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="question${index}" value="${option.team}">
            ${option.text}
        `;
        questionDiv.appendChild(label);
    });

    const nextButton = document.createElement('button');
    nextButton.textContent = "Siguiente";
    nextButton.addEventListener('click', () => {
        const selectedOption = questionDiv.querySelector('input[type=radio]:checked');
        if (!selectedOption) {
            alert('Por favor, selecciona una opción.');
            return;
        }

        questionDiv.classList.remove('active');
        if (index + 1 < questions.length) {
            document.querySelectorAll('.question')[index + 1].classList.add('active');
        } else {
            document.getElementById('submit-container').style.display = 'block';
        }
    });

    questionDiv.appendChild(nextButton);
    quizContainer.appendChild(questionDiv);
});

document.getElementById('submit').addEventListener('click', () => {
    const answers = Array.from(document.querySelectorAll('input[type=radio]:checked'));
    const teamCounts = { gasti: 0, juano: 0 };
    answers.forEach(answer => {
        teamCounts[answer.value]++;
    });

    const result = teamCounts.gasti > teamCounts.juano ? '¡Perteneces al Team Gasti!' : '¡Perteneces al Team Juano!';
    document.getElementById('result').textContent = result;
});
