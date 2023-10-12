// var sidenav = document.getElementById("mySidenav");
// var openBtn = document.getElementById("openBtn");
// var closeBtn = document.getElementById("closeBtn");

// openBtn.onclick = openNav;
// closeBtn.onclick = closeNav;

// /* Set the width of the side navigation to 250px */
// function openNav() {
//     sidenav.classList.add("active");
// }

// /* Set the width of the side navigation to 0 */
// function closeNav() {
//     sidenav.classList.remove("active");
// }





function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}