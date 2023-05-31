const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;

    list.innerHTML += html;    //append html in the list
}

addForm.addEventListener('submit', e => {

   e.preventDefault();
   const todo = addForm.add.value.trim();    //trim for spaces

   //if user add empty value of length zero don't add it 
   if(todo.length){
    generateTemplate(todo);
    addForm.reset();     //delete form input after adding
   }

});

//delete todos (event delegation) , event will be in all list and detect the trashcan
list.addEventListener('click' , e =>{
    //trashcan is the class 'delete'
    if(e.target.classList.contains('delete')){
        //delete the parent li tag
        e.target.parentElement.remove();
    }

});

//search todos
const filterTodos = (term) => {
    // console.log(term);
    //filter the list
    //convert the list to array
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    //remove the filtered class
    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));

}
//filter form
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
