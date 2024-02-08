const perguntas = [
  // seu array de perguntas
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl').appendChild(document.createElement('dt'));
    const input = dt.appendChild(document.createElement('input'));
    const span = dt.appendChild(document.createElement('span'));
    span.textContent = resposta;
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'pergunta-' + perguntas.indexOf(item));
    input.setAttribute('value', item.respostas.indexOf(resposta));
    input.addEventListener('change', (event) => {
      const estaCorreta = parseInt(event.target.value) === item.correta;

      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas;
    });
  }

  quiz.appendChild(quizItem)
}
