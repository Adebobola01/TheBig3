import View from "./view.js";

class headerView extends View {
    toggleBtn = document.querySelector(".toggle-button");

    sidebarHandler(handler) {
        this.toggleBtn.addEventListener('click', handler)
    }
}

export default new headerView();