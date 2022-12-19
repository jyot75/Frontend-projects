document.querySelector("#burger").addEventListener("click",() => {
    document.querySelector("#mobile-menu").classList.toggle("hidden");
    document.querySelectorAll("#burger svg")[1].classList.toggle("hidden");
    document.querySelectorAll("#burger svg")[0].classList.toggle("hidden");
})

document