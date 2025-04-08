const menuBtn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


let submit = document.getElementById("order-done");
submit.addEventListener("click", function (event) {
    event.preventDefault()
    let email = document.getElementById("email").value;
    let password = document.getElementById("add").value;
    let mess = document.getElementById("message").value;
   


            swal({
                title: "Order Done ",
              
                icon: "success",
            });
        })