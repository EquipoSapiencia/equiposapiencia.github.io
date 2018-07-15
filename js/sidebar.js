function openSidebar() {
    var icon = document.getElementById("menu");
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    
    if(icon.innerHTML === "menu") {
	icon.innerHTML = "close";
	sidebar.style.width = "200px";
	main.style.marginRight = "200px";
	main.style.marginLeft = "-200px";
    } else {
	icon.innerHTML = "menu"
	sidebar.style.width = "0";
	main.style.marginRight= "0";
	main.style.marginLeft = "0";
    }
}

function closeSidebar() {
    var icon = document.getElementById("menu");
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    icon.innerHTML = "menu"
    sidebar.style.width = "0";
    main.style.marginRight = "0";
    main.style.marginLeft = "0";
}
