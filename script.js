window.addEventListener('DOMContentLoaded',()=>{
    const todoList = {
        todo: [
            'Get up at 7:00',
            'Fall asleep again...'
        ]
    };

    const list = document.querySelector('.list'),
        input = document.querySelector('.input-in'),
        formAdd = document.querySelector('.addItem');



    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();
        let newItem = input.value;

        if (newItem) {
            todoList.todo.push(newItem);
        }
        createTodoList();
        event.target.reset();
    });

    function createTodoList() {
        list.innerHTML = "";
        todoList.todo.forEach((item, index)=>{
            list.innerHTML +=`
            <li class="list-item">
                <input type="checkbox">
                ${index+1}. ${item}
                 <input type="checkbox">
                    <div class="erase">x</div>
                </li>
                <hr/>`;
        });
        document.querySelectorAll('.erase').forEach((item, index) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                todoList.todo.splice(index,1);
                
                createTodoList();
            
            
            })
        })
    }
    createTodoList();
});
