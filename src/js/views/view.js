export default class View {
    render(data) {
        if (!data) {
            return this.renderError();
        }
        const markup = this._generateMarkup();
        this._clear();
        this.parentElement.insertAdjacentHTMl("afterbegin", markup);
    }

    _clear() {
        this.parentElement.innerHTML = "";
    }
}
