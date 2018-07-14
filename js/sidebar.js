function openSidebar() {
    if (document.getElementById('sidebar').style.display === 'block') {
        document.getElementById('sidebar').style.display = 'none';
    } else {
        document.getElementById('sidebar').style.display = 'block';
    }
}

function closeSidebar() {
    document.getElementById('sidebar').style.display = 'none';
}
