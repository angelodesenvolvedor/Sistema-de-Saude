$(document).ready(function() {
  // Função para exibir o quadro de notificação
  function showNotification(message, type) {
    $("#notificationBox").html(`<div class="alert alert-${type}" role="alert">${message}</div>`);

    // Desaparece após 3 segundos
    setTimeout(function() {
      $("#notificationBox").html("");
    }, 3000);
  }

  // Função para salvar perfil do paciente
  $("#patientForm").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var dob = $("#dob").val();
    var gender = $("#gender").val();
    
    // Validar entrada
    if (name === '' || dob === '' || gender === 'selecione') {
      showNotification("Por favor, preencha todos os campos do formulário.", "danger");
      return;
    }
    
    // Aqui você pode enviar os dados para o servidor ou armazená-los localmente
    showNotification("Perfil do paciente salvo com sucesso!", "success");

    // Limpa o formulário após salvar
    $("#name").val("");
    $("#dob").val("");
    $("#gender").val("");
  });

  // Função para agendar consulta online
  $("#consultationForm").submit(function(event) {
    event.preventDefault();
    var patientName = $("#patientName").val();
    var doctorSpecialty = $("#doctorSpecialty").val();
    var consultationDate = $("#consultationDate").val();
    
    // Validar entrada
    if (patientName === '' || doctorSpecialty === '' || consultationDate === '') {
      showNotification("Por favor, preencha todos os campos do formulário.", "danger");
      return;
    }
    
    // Aqui você pode enviar os dados para o servidor ou armazená-los localmente
    showNotification("Consulta online agendada com sucesso!", "success");

    // Limpa o formulário após agendar
    $("#patientName").val("");
    $("#doctorSpecialty").val("");
    $("#consultationDate").val("");
  });

  // Função para adicionar medicamento
  $("#medicationForm").submit(function(event) {
    event.preventDefault();
    var medicationName = $("#medicationName").val();
    var medicationDosage = $("#medicationDosage").val();
    var medicationFrequency = $("#medicationFrequency").val();
    
    // Validar entrada
    if (medicationName === '' || medicationDosage === '' || medicationFrequency === '') {
      showNotification("Por favor, preencha todos os campos do formulário.", "danger");
      return;
    }
    
    // Aqui você pode enviar os dados para o servidor ou armazená-los localmente
    showNotification("Medicamento adicionado com sucesso!", "success");

    // Limpa o formulário após adicionar
    $("#medicationName").val("");
    $("#medicationDosage").val("");
    $("#medicationFrequency").val("");
  });

  // Função para gerar relatório
  $("#reportsForm").submit(function(event) {
    event.preventDefault();
    var reportType = $("#reportType").val();
    
    // Validar entrada
    if (reportType === 'selecione') {
      showNotification("Por favor, selecione um tipo de relatório.", "danger");
      return;
    }
    
    // Aqui você pode gerar o relatório conforme o tipo selecionado
    showNotification("Relatório gerado com sucesso!", "success");
  });

  // Função para visualizar perfil do paciente
  $("#viewProfile").click(function() {
    // Aqui você pode recuperar os dados do paciente e preencher o perfil
    var name = "João da Silva";
    var dob = "01/01/1980";
    var gender = "Masculino";
    $("#profileName").val(name);
    $("#profileDOB").val(dob);
    $("#profileGender").val(gender);
  });

  // Função para registrar pacientes
  $('#patientForm').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var dob = $('#dob').val();
    var gender = $('#gender').val();
    
    // Validar entrada
    if (name === '' || dob === '' || gender === 'selecione') {
      showNotification("Por favor, preencha todos os campos do formulário.", "danger");
      return;
    }
    
    // Aqui você pode enviar os dados para o servidor para salvar no banco de dados
    
    // Exibir notificação
    showNotification(`Paciente ${name} registrado com sucesso!`, "success");
    
    // Limpar campos do formulário
    $('#name').val('');
    $('#dob').val('');
    $('#gender').val('');
  });

  // Função para agendar consultas
  $('#appointmentForm').submit(function(e) {
    e.preventDefault();
    var patient = $('#patient').val();
    var date = $('#date').val();
    var time = $('#time').val();
    
    // Validar entrada
    if (date === '' || time === '') {
      showNotification("Por favor, selecione uma data e horário para a consulta.", "danger");
      return;
    }
    
    // Aqui você pode enviar os dados para o servidor para salvar no banco de dados
    
    // Exibir notificação
    showNotification(`Consulta agendada para o paciente ID: ${patient} no dia ${date} às ${time}`, "success");
    
    // Limpar campos do formulário
    $('#date').val('');
    $('#time').val('');
  });

  // Função para registrar exames e resultados
  $('#examForm').submit(function(e) {
    e.preventDefault();
    var patient = $('#patient').val();
    var examType = $('#examType').val();
    var result = $('#result').val();
    
    // Validar entrada
    if (examType === '' || result === '') {
      showNotification("Por favor, preencha todos os campos do formulário.", "danger");
      return;
    }
    
    // Aqui você pode enviar os dados para o servidor para salvar no banco de dados
    
    // Exibir notificação
    showNotification(`Exame registrado para o paciente ID: ${patient} - Tipo: ${examType} - Resultado: ${result}`, "success");
    
    // Limpar campos do formulário
    $('#examType').val('');
    $('#result').val('');
  });

  // Função para configurar alertas e lembretes
  $('#alertReminderForm').submit(function(e) {
    e.preventDefault();
    var patient = $('#patient').val();
    var alertType = $('#alertType').val();
    var alertDate = $('#alertDate').val();
    
    // Validar entrada
    if (alertDate === '') {
      showNotification("Por favor, selecione uma data para o alerta/lembrete.", "danger");
      return;
    }
    
    // Aqui você pode enviar os dados para o servidor para salvar no banco de dados
    
    // Exibir notificação
    showNotification(`Alerta configurado para o paciente ID: ${patient} - Tipo: ${alertType} - Data: ${alertDate}`, "success");
    
    // Limpar campos do formulário
    $('#alertDate').val('');
  });

  // Função para preencher o histórico de consultas
  function fillAppointmentHistory() {
    // Array de exemplos de consultas agendadas (substitua isso com os dados do seu sistema)
    var appointments = [
      { patient: "João da Silva", date: "2024-05-10", time: "15:30", doctor: "Dr. Carlos", specialty: "Cardiologia" },
      { patient: "Maria Oliveira", date: "2024-04-15", time: "10:00", doctor: "Dra. Ana", specialty: "Pediatria" },
      { patient: "Pedro Souza", date: "2024-04-20", time: "14:00", doctor: "Dr. Miguel", specialty: "Ortopedia" }
    ];

    // Limpa a lista de consultas antes de preencher
    $("#appointmentList").empty();

    // Preenche a lista de consultas com os agendamentos
    appointments.forEach(function(appointment) {
      var listItem = `
        <li class="list-group-item">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Consulta com ${appointment.doctor}</h5>
            <small>${appointment.date}, ${appointment.time}</small>
          </div>
          <p class="mb-1">Paciente: ${appointment.patient}</p>
          <small>Especialidade: ${appointment.specialty}</small>
        </li>
      `;
      $("#appointmentList").append(listItem);
    });
  }

  // Chama a função para preencher o histórico de consultas ao carregar a página
  fillAppointmentHistory();

  // Função para enviar comentário
  $("#commentForm").submit(function(event) {
    event.preventDefault();
    var comment = $("#comment").val();
    
    // Aqui você pode enviar o comentário para o servidor ou armazená-lo localmente
    
    // Adiciona o comentário à lista de comentários
    var commentItem = `
      <div class="card mb-2">
        <div class="card-body">
          <p class="card-text">${comment}</p>
        </div>
      </div>
    `;
    $("#commentsList").prepend(commentItem);
    
    // Limpa o formulário após enviar o comentário
    $("#comment").val("");
  });
});
