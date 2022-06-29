let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});

document.getElementById("nanoclick").addEventListener("click", function() {
  Swal.fire({
    title: 'Join our discord?',
    text: "Get updates/stats and more!",
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Join!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'You have been invited!',
        'https://discord.com/invite/dy4uZbGsWm/',
        'success'
      )
    }
  })
});


document.getElementsByClassName("button1").addEventListener("click", function() {
});
document.getElementsByClassName("button2").addEventListener("click", function() {
});
document.getElementsByClassName("button3").addEventListener("click", function() {
});