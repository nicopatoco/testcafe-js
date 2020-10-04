import { Selector, t } from 'testcafe';

class HomePage {
    constructor() {
        this.url = "https://devexpress.github.io/testcafe/";
        // All cards by Xpath
        this.listCards = Selector("//*[@class = 'feature-container'] /div /p");
        // Cards by cssSelector
        this.firstCard = Selector('.feature.feature-1 > p');
        this.secondCard = Selector('.feature.feature-2 > p');
        this.thirdCard = Selector('.feature.feature-3 > p');
        this.fourthCard = Selector('.feature.feature-4 > p');
        this.fivethCardContainer = Selector('.feature.feature-5');
        this.sixthfiCard = Selector('.feature.feature-6 > p');
        this.buttonGetStarted = Selector('.get-started-button');
    }

    async clickOnGetStartedButton () {
        await t
            .click(this.buttonGetStarted)
            .wait(3000);
    }
}

export default new HomePage;
