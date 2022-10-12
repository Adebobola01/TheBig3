export default class View {
    _data;
    render(data, render = true) {
        if (data) {
            this._data = data;
        }
        const markup = this._generateMarkup();
        this._clear();
        console.log(this._parentElement);
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }

    _clear() {
        this._parentElement.innerHTML = "";
    }
}
