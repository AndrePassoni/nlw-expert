const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;"
      ],
      correta: 2
    },
    {
      pergunta: "Qual dessas opções é uma maneira de comentar uma linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "<!-- Comentário -->"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      respostas: [
        "5",
        "23",
        "32"
      ],
      correta: 2
    },
    {
      pergunta: "Como você verifica se duas variáveis têm o mesmo valor em JavaScript?",
      respostas: [
        "x == y",
        "x === y",
        "x = y"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        "==="
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "add()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual desses métodos é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "remove()",
        "pop()",
        "delete()"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona o primeiro elemento que corresponde a um seletor CSS especificado",
        "Seleciona todos os elementos que correspondem a um seletor CSS não especificado",
        "Seleciona um elemento com base no ID especificado"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de iniciar um loop 'for' em JavaScript?",
      respostas: [
        "for (let i = 0; i < 5; i++)",
        "for (i = 0; i < 5; i++)",
        "for (i = 0; i <= 5; i++)"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'addEventListener()' faz em JavaScript?",
      respostas: [
        "Adiciona um evento a um elemento HTML",
        "Remove um evento de um elemento HTML",
        "Dispara um evento em um elemento HTML"
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
  
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  
  