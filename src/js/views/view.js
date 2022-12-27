export default class View {
    _data;
    errorContainer = document.querySelector(".wallet__container");
    
    render(data, render = true) {
        if (data) {
            this._data = data;
        }
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }

    _clear() {
        this._parentElement.innerHTML = "";
    }

    renderError(msg) {
        this.errorContainer.classList.add("")
        this.errorContainer.textContent = msg;
    }
}
