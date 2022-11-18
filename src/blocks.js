function chooseLevelBlock(container) {
    chooseLevelBlockArray = [];
    const chooseLevelDiv = document.createElement("div");
    chooseLevelDiv.classList.add("choose_level-div");
    chooseLevelBlockArray.push(chooseLevelDiv);
    const chooseLevelTitle = document.createElement("p");
    chooseLevelTitle.classList.add("choose_level-title");
    chooseLevelDiv.appendChild(chooseLevelTitle);
    chooseLevelTitle.textContent = "Выбери сложность";
    const chooseLevelForm = document.createElement("div");
    chooseLevelForm.classList.add("choose_level_form");
    chooseLevelDiv.appendChild(chooseLevelForm);
    const chooseLevelButtonEasy = document.createElement("button");
    chooseLevelButtonEasy.classList.add(
        "choose_level-button_easy",
        "level-button"
    );
    chooseLevelForm.appendChild(chooseLevelButtonEasy);
    chooseLevelButtonEasy.textContent = "1";
    const chooseLevelButtonMedium = document.createElement("button");
    chooseLevelButtonMedium.classList.add(
        "choose_level-button_medium",
        "level-button"
    );
    chooseLevelForm.appendChild(chooseLevelButtonMedium);
    chooseLevelButtonMedium.textContent = "2";
    const chooseLevelButtonHard = document.createElement("button");
    chooseLevelButtonHard.classList.add(
        "choose_level-button_hard",
        "level-button"
    );
    chooseLevelForm.appendChild(chooseLevelButtonHard);
    chooseLevelButtonHard.textContent = "3";
    const chooseLevelButton = document.createElement("button");
    chooseLevelButton.classList.add("choose_level-button");
    chooseLevelDiv.appendChild(chooseLevelButton);
    chooseLevelButton.textContent = "Старт";

    chooseLevelBlockArray.forEach((element) => {
        container.appendChild(element);
    });

    chooseLevelButtonEasy.addEventListener("click", (event) => {
        window.application.level = "easy";
        chooseLevelButtonEasy.classList.add("level-button_click");
        chooseLevelButtonMedium.classList.remove("level-button_click");
        chooseLevelButtonHard.classList.remove("level-button_click");
    });
    chooseLevelButtonMedium.addEventListener("click", (event) => {
        window.application.level = "medium";
        chooseLevelButtonMedium.classList.add("level-button_click");
        chooseLevelButtonEasy.classList.remove("level-button_click");
        chooseLevelButtonHard.classList.remove("level-button_click");
    });
    chooseLevelButtonHard.addEventListener("click", (event) => {
        window.application.level = "hard";
        chooseLevelButtonHard.classList.add("level-button_click");
        chooseLevelButtonEasy.classList.remove("level-button_click");
        chooseLevelButtonMedium.classList.remove("level-button_click");
    });

    chooseLevelButton.addEventListener("click", (event) => {
        event.preventDefault();
        window.application.screens["game"] = gameScreen;
        window.application.renderScreen("game");
    });
}

function gameBlock(container) {
    const gameMenu = document.createElement("div");
    gameMenu.classList.add("game_menu");
    const gameTimerMenu = document.createElement("div");
    gameTimerMenu.classList.add("game_timer_menu");
    const gameTimerMin = document.createElement("p");
    gameTimerMin.classList.add("game_time");
    gameTimerMin.textContent = "min";
    gameTimerMenu.appendChild(gameTimerMin);
    const gameTimerSek = document.createElement("p");
    gameTimerSek.classList.add("game_time");
    gameTimerSek.textContent = "sek";
    gameTimerMenu.appendChild(gameTimerSek);
    const gameTimer = document.createElement("p");
    gameTimer.classList.add("game_timer");
    gameTimer.textContent = "00.00";
    gameMenu.appendChild(gameTimer);
    const gameMenuButton = document.createElement("button");
    gameMenuButton.classList.add("game_button");
    gameMenuButton.textContent = "Начать заново";
    gameMenu.appendChild(gameMenuButton);
    container.appendChild(gameTimerMenu);
    container.appendChild(gameMenu);
}

function cardBlock(container) {
    const cardField = document.createElement("div");
    cardField.classList.add("card_field");
    const newHalfRandomCardArray = [];
    cardArray.forEach((element) => {
        const card = document.createElement("img");
        card.setAttribute("src", element);
        card.classList.add("card");
        newHalfRandomCardArray.push(card);
    });

    newHalfRandomCardArray.forEach((element) => {
        cardField.appendChild(element);
        element.addEventListener("click", () => {
            element.classList.add("card_animation", "card_hidden");
        });
    });
    // for (let i = 0; i < 36; i++) {
    //         const cardUpside = document.createElement('img');
    //         cardUpside.setAttribute('src', './src/img/Upside.png');
    //         cardUpside.classList.add('card_upside');
    //         cardField.appendChild(cardUpside);
    //     };
    // if (window.application.level == 'easy') {
    //     for (let i = 0; i < 6; i++) {
    //         const cardUpside = document.createElement('img');
    //         cardUpside.setAttribute('src', './src/img/Upside.png');
    //         cardUpside.classList.add('card_upside');
    //         cardField.appendChild(cardUpside);
    //     };
    // } else if (window.application.level == 'medium') {
    //     for (let i = 0; i < 12; i++) {
    //         const cardUpside = document.createElement('img');
    //         cardUpside.setAttribute('src', './src/img/Upside.png');
    //         cardUpside.classList.add('card_upside');
    //         cardField.classList.add('card_field_medium');
    //         cardField.appendChild(cardUpside);
    //     };
    // } else if (window.application.level == 'hard') {
    //     for (let i = 0; i < 18; i++) {
    //         const cardUpside = document.createElement('img');
    //         cardUpside.setAttribute('src', './src/img/Upside.png');
    //         cardUpside.classList.add('card_upside');
    //         cardField.classList.add('card_field_hard');
    //         cardField.appendChild(cardUpside);
    //     };
    // } else {
    //     return;
    // }
    container.appendChild(cardField);
}
