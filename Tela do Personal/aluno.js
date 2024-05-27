$('#menu-btn').click(function(){
    $('#menu').toggleClass("active");
})

// JavaScript para o Modal
// Obtém o modal
var modal = document.getElementById("myModal");

// Obtém o botão que abre o modal
var btn = document.getElementById("openModalBtn");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão, abre o modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clica em <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Quando o botão "Adicionar Treino" for clicado
document.getElementById("addWorkoutBtn").onclick = function() {
    // Exibe o formulário
    document.getElementById("addWorkoutForm").style.display = "block";
}
// Função para salvar o treino
function saveWorkout() {
    // Lógica para salvar o treino aqui
    alert("Treino salvo com sucesso!");
    $('#addWorkoutModal').modal('hide');
}

$('#menu-btn').click(function(){
    $('#menu').toggleClass("active");
});
// Quando o botão "Editar Treino" for clicado
document.getElementById("editWorkoutBtn").onclick = function() {
    // Exibe o formulário de edição
    document.getElementById("editWorkoutForm").style.display = "block";
    // Preenche o formulário com os dados do treino a ser editado
    // Você precisará implementar a lógica para preencher os campos do formulário com os dados do treino
}
// Função para listar os treinos
function listWorkouts() {
// Supondo que você tenha uma lista de treinos em formato de array chamada "treinos"
var treinos = [
    { nome: "Treino 1", id: 1 },
    { nome: "Treino 2", id: 2 },
    // Adicione mais treinos conforme necessário
];

// Seleciona o elemento onde os treinos serão listados
var workoutList = document.getElementById("workoutList");

// Limpa qualquer conteúdo existente na lista
workoutList.innerHTML = "";

// Para cada treino na lista, cria um item na lista
treinos.forEach(function(treino) {
    // Cria um elemento de div para representar o treino na lista
    var treinoItem = document.createElement("div");
    treinoItem.classList.add("workout-item");

    // Cria um elemento de span para exibir o nome do treino
    var nomeTreinoSpan = document.createElement("span");
    nomeTreinoSpan.textContent = treino.nome;

    // Cria um botão de editar para o treino
    var editarBtn = document.createElement("button");
    editarBtn.textContent = "Editar";
    editarBtn.classList.add("btn");
    // Adiciona um evento de clique para chamar a função de edição
    editarBtn.addEventListener("click", function() {
        editWorkout(treino.id); // Chama a função de edição com o ID do treino
    });

    // Cria um botão de excluir para o treino
    var excluirBtn = document.createElement("button");
    excluirBtn.textContent = "Excluir";
    excluirBtn.classList.add("btn");
    // Adiciona um evento de clique para chamar a função de exclusão
    excluirBtn.addEventListener("click", function() {
        deleteWorkout(treino.id); // Chama a função de exclusão com o ID do treino
    });

    // Adiciona os elementos criados ao elemento de treinoItem
    treinoItem.appendChild(nomeTreinoSpan);
    treinoItem.appendChild(editarBtn);
    treinoItem.appendChild(excluirBtn);

    // Adiciona o treinoItem à lista de treinos
    workoutList.appendChild(treinoItem);
});
    }

    // Função para editar um treino
    function editWorkout(treinoId) {
        // Implemente a lógica para editar o treino com o ID fornecido
        console.log("Editar treino com ID:", treinoId);
    }

    // Função para excluir um treino
    function deleteWorkout(treinoId) {
        // Implemente a lógica para excluir o treino com o ID fornecido
        console.log("Excluir treino com ID:", treinoId);
    }

    // Quando o botão "Listar Treinos" for clicado
    document.getElementById("listWorkoutsBtn").onclick = function() {
        // Chama a função para listar os treinos
        listWorkouts();
    }
    function populateModal(nome, titulo, descricao) {
    document.getElementById('editNomeTreino').value = nome;
    document.getElementById('editDescricaoTreino').value = titulo;
    document.getElementById('editOrdemExecucao').value = descricao;
    }
    function saveEdit() {
    // Lógica para salvar o treino aqui
    alert("Alterações salvas com sucesso!");
    $('#editWorkoutModal').modal('hide');
    }
    // Função para adicionar um aluno à lista
    function addStudentToList(nome, email, idade, peso, altura, tipoTreino) {
        // Seleciona a lista de alunos
        var studentList = document.getElementById('studentList');
        
        // Cria um novo item de aluno
        var studentItem = document.createElement('li');
        studentItem.classList.add('list-group-item');
        studentItem.innerHTML = `
            <div class="student-info">
                <h5>${nome}</h5>
                <p>Email: ${email}</p>
                <p>Idade: ${idade}</p>
                <p>Peso: ${peso} kg</p>
                <p>Altura: ${altura} m</p>
                <p>Tipo de Treino: ${tipoTreino}</p>
            </div>
        `;
        
        // Adiciona o novo item à lista
        studentList.appendChild(studentItem);
    }

    // Quando o formulário de adicionar aluno for enviado
    document.getElementById('addStudentForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        // Captura os valores dos campos do formulário
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var idade = document.getElementById('idade').value;
        var peso = document.getElementById('peso').value;
        var altura = document.getElementById('altura').value;
        var tipoTreino = document.getElementById('tipoTreino').value;
        
        // Adiciona o aluno à lista
        addStudentToList(nome, email, idade, peso, altura, tipoTreino);
        
        // Fecha o modal
        $('#addStudentModal').modal('hide');
    });



    //aparecer os dados do aluno
    document.addEventListener("DOMContentLoaded", function() {
        // Captura o formulário
        const form = document.getElementById('addStudentFormContainer');

        // Captura a lista onde os dados serão exibidos
        const dataList = document.getElementById('studentDataList');

        // Adiciona um evento de envio ao formulário
        form.addEventListener('submit', function(event) {
            // Evita que a página seja recarregada
            event.preventDefault();

            // Captura os valores dos campos do formulário
            const nome = form.nome.value;
            const email = form.email.value;
            const idade = form.idade.value;
            const peso = form.peso.value;
            const altura = form.altura.value;
            const tipoTreino = form.tipoTreino.value;

            // Cria um item de lista para exibir os dados do aluno
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = `
                <strong>Nome:</strong> ${nome}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>Idade:</strong> ${idade}<br>
                <strong>Peso:</strong> ${peso}<br>
                <strong>Altura:</strong> ${altura}<br>
                <strong>Tipo de Treino:</strong> ${tipoTreino}
            `;

            // Adiciona o item de lista à lista de dados
            dataList.appendChild(listItem);

            // Limpa os campos do formulário após adicionar o aluno
            form.reset();
        });
    });