document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;
    
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    taskDiv.innerHTML = `${title},
    ${description},  
    Due: ${dueDate},  
    Priority: ${priority}`;
    
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        taskDiv.remove();
    });
    
    let editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', function() {
        document.getElementById('title').value = title;
        document.getElementById('description').value = description;
        document.getElementById('dueDate').value = dueDate;
        document.getElementById('priority').value = priority;
        taskDiv.remove();
    });
    
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(taskDiv);
    
    document.getElementById('taskForm').reset();
});