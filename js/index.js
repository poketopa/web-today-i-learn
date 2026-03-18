const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

if (tilForm && tilList) {
  tilForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(tilForm);
    const dateValue = String(formData.get("date") || "").trim();
    const titleValue = String(formData.get("title") || "").trim();
    const contentValue = String(formData.get("content") || "").trim();

    if (!dateValue || !titleValue || !contentValue) {
      return;
    }

    const tilItem = document.createElement("article");
    tilItem.className = "til-item";

    const dateEl = document.createElement("time");
    dateEl.textContent = dateValue;

    const titleEl = document.createElement("h3");
    titleEl.textContent = titleValue;

    const contentEl = document.createElement("p");
    contentEl.textContent = contentValue;

    tilItem.append(dateEl, titleEl, contentEl);
    tilList.prepend(tilItem);

    tilForm.reset();
  });
}
