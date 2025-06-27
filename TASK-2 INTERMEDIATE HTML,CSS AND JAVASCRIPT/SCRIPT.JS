document.getElementById('loginform').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (!name || !email || !message) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please fill in all fields.';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    formMessage.style.color = 'red';
    formMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  formMessage.style.color = 'green';
  formMessage.textContent = 'Form submitted successfully!';
  this.reset();
});


function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Remove';
  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById('taskList').appendChild(li);

  input.value = '';
}
