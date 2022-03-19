const tabsButtons = document.querySelectorAll('.design-list__item');
const descriptions = document.querySelectorAll('.design__descr');
const designs = document.querySelectorAll('.design-images');
const designImages = document.querySelectorAll('.design-block__img');
const titles = document.querySelectorAll('.design__title');

for(let i = 0; i <= tabsButtons.length; i++) {
    const button = tabsButtons[i];
    const active = button.classList.contains('design-list__item_active');
    if (active) {
        document.title = button.innerText;
        break;
    }
}

const updateTabFieldsVisibility = (fieldsArray, data) => {
    let currentlyVisible;
    fieldsArray.forEach(field => {
        const fieldData = field.dataset.tabsField;
        if (fieldData === data) {
            field.classList.remove('hidden');
            currentlyVisible = field;
        } else {
            field.classList.add('hidden');
        }
    })
    return currentlyVisible;
}

const updateButtonsActiveState = (data) => {
    tabsButtons.forEach(button => {
        if (button.dataset.tabsHandler !== data) {
            button.classList.remove('design-list__item_active');
        } else {
            button.classList.add('design-list__item_active');
        }
    })
}

tabsButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const buttonData = btn.dataset.tabsHandler;
        updateButtonsActiveState(buttonData);
        updateTabFieldsVisibility(descriptions, buttonData);
        updateTabFieldsVisibility(designs, buttonData);
        updateTabFieldsVisibility(designImages, buttonData);
        const currentTitle = updateTabFieldsVisibility(titles, buttonData);
        document.title = currentTitle.innerText;
    })
})