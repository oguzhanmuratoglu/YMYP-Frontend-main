const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", click)

function click(){
    {
        allInput.forEach(input => {
            if(input.value != ""){
                form.classList.add('secActive');
            }else{
                form.classList.remove('secActive');
            }
        })
    }
}

backBtn.addEventListener("click", () => form.classList.remove('secActive'));


const firstForm = document.querySelector('.container');

const addButton = document.querySelector('.add-form');
const removeButton = document.querySelector('.remove-form');

addButton.addEventListener('click', function () {
    const newForm = firstForm.cloneNode(true);

    removeButton.style.display = 'block';

    removeButton.addEventListener('click', function () {
        newForm.remove();

        removeButton.style.display = 'none';
    });

    document.body.appendChild(newForm);
});
