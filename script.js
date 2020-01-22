let list_items = document.querySelectorAll('.list-item');
let lists = document.querySelectorAll('.list');
let myText = document.querySelector('.myText');
let myButton = document.querySelector('.myButton'); 

let draggedItem = null;

function AddNewElement(text) {
	let newDiv = document.createElement('div');
       
		newDiv.className = "list-item";
		newDiv.draggable = "true";
		newDiv.innerText = text;

        let cont = document.querySelector(".list");
		cont.appendChild(newDiv);
}

function UpdateList(){
    list_items = document.querySelectorAll('.list-item');
    lists = document.querySelectorAll('.list');
}

function IsValidText(){
	if(myText.value == ''){
		return false;
	}
	else{
		return true;
	}
}

myButton.addEventListener('click', function(event) {
	if(IsValidText()){
		AddNewElement(myText.value);
		UpdateList();
	}
	else{
		event.preventDefault();
	}

});

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];
	
	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0);
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}