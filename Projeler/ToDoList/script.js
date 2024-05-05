
const addForm = document.querySelector(".addForm");
const todoList = document.querySelector(".list-TODO");

const generateTemplate = (text) => {
  const html = `
    <li style="list-style: none;">
      <section class="row justify-content-center to-do">
        <div class="col-lg-8 bg-white d-flex align-items-center text-to-do">
          <button type="button" class="btn btn-secondary control-button" style="width: 40px; height: 40px;">
            <i class="bi bi-check2-all d-none"></i>
          </button>
          <span class="mx-3 todo-text">${text}</span>
        </div>
        <div class="col-lg-4">
          <button type="button" class="btn btn-danger control-button delete-button my-1" style="width: 40px; height: 40px;">
            <i class="bi bi-x"></i>
          </button>
        </div>
      </section>
    </li>
  `;

  const newListItem = document.createElement('li');
  newListItem.innerHTML = html;
  todoList.appendChild(newListItem);

  
  const newControlButton = newListItem.querySelector('.col-lg-8 .control-button');
  newControlButton.addEventListener("click", (e) => {
    const check2 = e.target.querySelector(".bi-check2-all");
    if (check2) {
      check2.classList.toggle("d-none");
      const todoText = e.target.parentElement.querySelector(".todo-text");
      todoText.classList.toggle("text-draw");
    }
  });

  const newDeleteButton = newListItem.querySelector('.col-lg-4 .delete-button');
  newDeleteButton.addEventListener("click", (e) => {
    const divDelete = e.target.parentElement.parentElement.parentElement;
    divDelete.remove();
  });
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const textTODO = addForm.querySelector("input[name='add']").value.trim(); 

  if (textTODO.length) {
    generateTemplate(textTODO);
    addForm.reset(); 
  } 
});
const controlButtons = document.querySelectorAll(".col-lg-8 .control-button");

controlButtons.forEach(button => {
  button.addEventListener("click", e=> {
    const check2 = button.querySelector(".bi-check2-all"); 
    if (check2) {
      check2.classList.toggle("d-none");
      const todoText = button.parentElement.querySelector(".todo-text");
      todoText.parentElement.classList.toggle("text-draw"); //butona tıklandığı zaman yazının üstünü çiziyoruz
    } 
  });
});

const DeleteButtons=document.querySelectorAll(".col-lg-4 .delete-button");
DeleteButtons.forEach(button=>{
   button.addEventListener("click",e=>{
     const divDelete=button.parentElement.parentElement;
     divDelete.remove();
     
   });
});