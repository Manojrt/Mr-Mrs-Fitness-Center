const toggle_button = document.querySelector(".toggle-btn")
const dropdown = document.querySelector(".dropdown-menu")

toggle_button.addEventListener('click',()=>{
    dropdown.classList.toggle('top-[54px]')
})
