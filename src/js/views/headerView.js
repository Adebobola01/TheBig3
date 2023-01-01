import View from "./view.js";

class headerView extends View {
    toggleBtn = document.querySelector(".toggle-button");
    sidebar = document.querySelector(".sidebar")
    exploreLink = document.querySelector(".explore-link")

    exploreHandler(handler) {
        this.exploreLink.addEventListener("click", handler);
    }

    sidebarHandler(handler) {
        this.toggleBtn.addEventListener('click', handler)
    }

    opensidebar() {
        this.sidebar.classList.toggle("open-sidebar")
    }

}

export default new headerView();