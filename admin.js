function toggleSidebar(){
    const sidebar = document.getElementById("sidebar");

    if(window.innerWidth <= 768){
        sidebar.classList.toggle("show");
    } else {
        sidebar.classList.toggle("hidden");
    }
}