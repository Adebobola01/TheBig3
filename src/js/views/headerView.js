import View from "./view.js";

class headerView extends View {
    toggleBtn = document.querySelector(".toggle-button");
    sidebar = document.querySelector(".sidebar")
    exploreLink = document.querySelector(".explore-link")
    sidebarBackdrop = document.querySelector(".backdrop2")

    exploreHandler(handler) {
        this.exploreLink.addEventListener("click", handler);
    }

    sidebarBackdropHandler(handler) {
        this.sidebarBackdrop.addEventListener("click", handler)
    }

    sidebarHandler(handler) {
        this.toggleBtn.addEventListener('click', handler)
    }

    toggleSidebar() {
        this.sidebar.classList.toggle("open-sidebar")
        this.sidebarBackdrop.classList.toggle("open")
    }

}

export default new headerView();