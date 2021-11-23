// When user select an option, the background color of the option will change
function selectPriority() {
    let select = document.getElementById('select');

    if (select.value == "BAJA") {
        select.classList.remove('bg-warning');
        select.classList.remove('bg-danger');
        select.classList.add('bg-success');
        select.classList.add('border-success');
        select.classList.add('text-white');
    } else if (select.value == "MEDIA") {
        select.classList.remove('bg-success');
        select.classList.remove('bg-danger');
        select.classList.add('bg-warning');
        select.classList.add('border-warning');
        select.classList.add('text-white');
    } else if (select.value == "ALTA") {
        select.classList.remove('bg-success');
        select.classList.remove('bg-warning');
        select.classList.add('bg-danger');
        select.classList.add('border-danger');
        select.classList.add('text-white');
    } else if (select.value == "0") {
        select.classList.remove('bg-success');
        select.classList.remove('bg-warning');
        select.classList.remove('bg-danger');
        select.classList.remove('border-danger');
        select.classList.remove('border-warning');
        select.classList.remove('border-success');
        select.classList.remove('text-white');
        select.classList.add('text-dark');
    }

    return select.classList;
}

function inputColor() {
    let select = document.getElementById('select');

    if (select.value === 'BAJA') {
        select.classList.remove('bg-warning');
        select.classList.remove('bg-danger');
        select.classList.remove('border-danger');
        select.classList.remove('border-warning');
        select.classList.add('bg-success');
        select.classList.add('border-success');
        select.classList.add('text-white');

    } else if (select.value === 'MEDIA') {
        select.classList.remove('bg-success');
        select.classList.remove('bg-danger');
        select.classList.remove('border-danger');
        select.classList.remove('border-success');
        select.classList.add('bg-warning');
        select.classList.add('border-warning');
        select.classList.add('text-black');

    } else if (select.value === 'ALTA') {
        select.classList.remove('bg-success');
        select.classList.remove('bg-warning');
        select.classList.remove('border-danger');
        select.classList.remove('border-warning');
        select.classList.add('bg-danger');
        select.classList.add('border-danger');
        select.classList.add('text-black')

    }

    return select.classList;
}


function checkTask() {
    let check = document.getElementsByClassName('list-group-item');
    for (let i = 0; i < check.length; i++) {
        check[i].addEventListener('click', function () {
            check[i].classList.add('checked');
            check[i].classList.remove('bg-success');
            check[i].classList.remove('bg-warning');
            check[i].classList.remove('bg-danger');
            check[i].classList.remove('border-danger');
            check[i].classList.remove('border-warning');
            check[i].classList.remove('border-success');
        }
    )};
}

const removeElement = () => {
    let btn = document.getElementsByClassName('button');
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            let a = this.parentNode.parentNode.parentNode;
            a.remove();

        });
    }
}

// Add element to the list
function addElement() {
    let a = document.createElement('a');
    let inputValue = document.getElementById('input').value;
    let date = document.getElementById('date').value;
    let priority = document.getElementById('select').value;
    let color = inputColor();

    if (inputValue === '') {
        alert('Please enter a task');
    } else if (date === '') {
        alert('Please enter a date');
    } else {
        let task =
            `
        <a href="#" class="list-group-item ${color} bg-opacity-75" id="text-block">
            <div class="d-flex w-100 justify-content-between">
                <h6 class="mb-1">${date}</h6>
                <button class="button">
                    <div class="button__line button__line--first"></div>
                    <div class="button__line button__line--second"></div>
                </button>
            </div>

            <div class="d-flex w-100 justify-content-between" id="todo-item">
                <p class="mb-2 text-uppercase">${inputValue}</p>
                <small>${priority}<small> 
            </div>
        </a>
        `

        a.innerHTML = task;
        document.getElementById('list').appendChild(a);
        document.getElementById('input').value = "";
        document.getElementById('date').value = "";
        document.getElementById('select').value = "0";
        selectPriority();
        removeElement();
        checkTask();
    }
}