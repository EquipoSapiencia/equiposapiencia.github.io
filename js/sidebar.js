function openSidebar() {
    var icon = document.getElementById("menu");
    var sidebar = document.getElementById("sidebar");
    var header = document.getElementById("header");
    var main = document.getElementById("main");
    var footer = document.getElementById("footer");
    
    if(icon.innerHTML === "menu") {
	icon.innerHTML = "close";
	sidebar.style.width = "200px";
	header.style.marginRight = "200px";
	header.style.marginLeft = "-200px";
	main.style.marginRight = "200px";
	main.style.marginLeft = "-200px";
	footer.style.marginRight = "200px";
	footer.style.marginLeft = "-200px";
    } else {
	icon.innerHTML = "menu"
	sidebar.style.width = "0";
	header.style.marginRight = "0px";
	header.style.marginLeft = "0px";
	main.style.marginRight = "0";
	main.style.marginLeft = "0";
	footer.style.marginRight = "0px";
	footer.style.marginLeft = "0px";
    }
}

function closeSidebar() {
    var icon = document.getElementById("menu");
    var sidebar = document.getElementById("sidebar");
    var header = document.getElementById("header");
    var main = document.getElementById("main");
    var footer = document.getElementById("footer");
    
    icon.innerHTML = "menu"
    sidebar.style.width = "0";
    header.style.marginRight = "200px";
    header.style.marginLeft = "-200px";
    main.style.marginRight = "0";
    main.style.marginLeft = "0";
    footer.style.marginRight = "0px";
    footer.style.marginLeft = "0px";
}
