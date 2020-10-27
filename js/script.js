let tasks = []

function idGenerator() {
  let timestamp = new Date()

  let id =
    timestamp.getHours().toString() +
    timestamp.getMinutes().toString() +
    timestamp.getSeconds().toString() +
    timestamp.getMilliseconds().toString()

  return id
}

function createTask() {
  // Cria a descrição da tarefa

  let taskDescription = document.getElementById("newTask").value

  let task = {
    id: idGenerator(),
    data: {
      description: taskDescription
    }
  }

  tasks.push(task)

  updateScreen()
}

function updateScreen() {
  let list = "<ul>"

  tasks.forEach(task => {
    list += `<li id-data="${task.id}"> 
    <button onclick="deleteTask(this)" id-data="${task.id}">X</button> ${task.data.description}
    </li>`
  })

  list += "</ul>"

  document.getElementById("list").innerHTML = list
  document.getElementById("newTask").value = ""
}

function deleteTask(element) {
  console.log(element)

  tasks = tasks.filter(task => task.id != element.getAttribute("id-data"))

  updateScreen()
}