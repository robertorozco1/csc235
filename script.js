let blankbox = document.getElementById("bikeinfo");
let showdate = document.getElementById("datetime");
let pullList = document.getElementById('todoList');
let newToDo = document.getElementById("newTodo");
function loadTodos() {
            // Add the GET request logic here
			fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
			  .then(response => response.json())
			  .then(data => {
			  console.log(data);
			  pullList.innerHTML = "";
			    for (let i = 0; i < data.length; i++) {
					let node = document.createElement("li");
				    let listtitle = document.createTextNode(data[i].title);
					node.appendChild(listtitle);
					pullList.appendChild(node);
				}}
			);
        }

function addTodo() {
	// Add the POST request logic here
	let postdata = {
	title: document.getElementById('title').value,
	completed: document.getElementById('completed').value,
	userId: 1
};
 fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(postdata)
	})
	.then(response => response.json())
	.then(data => {
		let node = document.createElement("li");
		let newTask = document.createTextNode(
			'Task: ' + data.title + '\n' +
			'Completed: ' + data.body);
		node.appendChild(newTask);
		newToDo.appendChild(node);
		
	})
	.catch(error => console.error('Error sending data:', error));

	
        }

function pushtext () {
	console.log(blankbox);
	blankbox.style.display = "inline-block";
}

function showDT () {
	const date = new Date();
	if (date.getHours()<= 12) {
		showdate.textContent = "Good Morning";
		console.log("Does this work?");
	} else if (date.getHours() <= 18) {
	    showdate.innerHTML = "Good Afternoon";
	    console.log("help");
	}  else {
	    showdate.innerHTML = "Good Evening";
  }
}
showDT ();
