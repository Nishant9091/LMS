document.addEventListener("DOMContentLoaded", function () {
    fetch("includes/header.html")
        .then(response => response.text())
        .then(header => {
            document.querySelector("header").innerHTML = header;
            const activePage = window.location.pathname;
            // console.log(activePage)
            const navLinks = document.querySelectorAll('.menu-links a').forEach(link => {
                // console.log(link)
                if (link.href.includes(`${activePage}`)) {
                    link.classList.add('active');
                }
            })
        });

    fetch("includes/siderbar.html")
        .then(response => response.text())
        .then(footer => {
            document.querySelector("footer").innerHTML = footer;
            const activePage = window.location.pathname;
            // console.log(activePage)
            const navLinks = document.querySelectorAll('.menu-links a').forEach(link => {
                // console.log(link)
                if (link.href.includes(`${activePage}`)) {
                    link.classList.add('active');
                }
            })

            const body = document.querySelector("body"),
                sidebar = document.querySelector(".sidebar"),
                toggle = document.querySelector(".toggle"),
                // modeSwitch = document.querySelector(".toggle-switch"),
                // modeText = document.querySelector(".mode-text"),
                searchBtn = document.querySelector(".search-bar");
            mainconttent = document.querySelector(".mainconttent");


            // modeSwitch.addEventListener("click", () => {
            // body.classList.toggle("dark");
            //   document.querySelector(".mode-text").innertext=""

            // if (body.classList.contains("dark")) {
            // modeText.innerText = " Light Mode ";
            // } else modeText.innerText = " Dark Mode ";
            // });

            toggle.addEventListener("click", () => {
                sidebar.classList.toggle("close");
                mainconttent.classList.toggle("close1");
            });

            searchBtn.addEventListener("click", () => {
                sidebar.classList.remove("close");
            });


        });
});