let employees = [];
let employeeId = 1;

document.getElementById('addEmployeeBtn').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const profession = document.getElementById('profession').value;
  const age = document.getElementById('age').value;

  if (name === '' || profession === '' || age === '') {
    showMessage('Please fill in all fields', 'error');
  } else {
    const newEmployee = {
      id: employeeId++,
      name: name,
      profession: profession,
      age: age
    };
    employees.push(newEmployee);
    displayEmployees();
    showMessage('Employee added successfully', 'success');
    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
  }
});

function displayEmployees() {
  const employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = '';
  employees.forEach(function(employee) {
    const li = document.createElement('li');
    li.textContent = `ID: ${employee.id}, Name: ${employee.name}, Profession: ${employee.profession}, Age: ${employee.age}`;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
      const index = employees.indexOf(employee);
      employees.splice(index, 1);
      displayEmployees();
    });
    li.appendChild(deleteBtn);
    employeeList.appendChild(li);
  });
}

function showMessage(message, type) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = message;
  messageDiv.className = type === 'error' ? 'error' : 'success';
  setTimeout(function() {
    messageDiv.textContent = '';
  }, 3000);
}
