const entryForm = document.forms.newEntry;
const entriesContainer = document.querySelector('.entriesContainer');

//событие нажатия кнопки
postButton.onclick = function (event) {
    //отмена действий браузера по умолчанию
    event.preventDefault();

    //создание объекта
    const entry = {
        title: document.getElementById('entryTitle').value,
        body: document.getElementById('entryText').value,
    }

    //POST-запрос
    fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify(entry),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        .then((response) => response.json())
        .then((entry) => {
            const entryContent =
                `<section>
                    <h2 class="entryTitle">${entry.title}</h2>
                    <p class="entryText">${entry.body}</p>
                </section>`
            entriesContainer.insertAdjacentHTML('beforeend', entryContent);
        })

    //очистка полей формы
    entryForm.reset();
}