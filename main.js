let btns = document.querySelectorAll(".rating");
let ratingtotal = "";
let ratingtext = document.querySelector(".rating-total");
let submitbtn = document.querySelector(".submit");
let maincontainer = document.querySelector(".container");
let secondcontainer = document.querySelector(".thankyou-container");

btns.forEach((b) => {
    b.addEventListener("click", (e) => {
        ratingtotal = b.innerHTML;
        ratingtext.innerHTML = `You selected ${ratingtotal} out of 5`
        btns.forEach((i) => { i.classList.remove("active") })
        b.classList.add("active")
    })
})

submitbtn.onclick = () => {
    maincontainer.classList.add("hidden");
    secondcontainer.classList.remove("hidden");
}