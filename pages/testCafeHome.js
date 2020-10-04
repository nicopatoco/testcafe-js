import { Selector } from 'testcafe';

class HomePage {
    constructor() {
        // All cards by Xpath
        this.listCards = Selector("//*[@class = 'feature-container'] /div /p");
        // Cards by cssSelector
        this.firstCard = Selector('.feature.feature-1 > p');
        this.secondCard = Selector('.feature.feature-2 > p');
        this.thirdCard = Selector('.feature.feature-3 > p');
        this.fourthCard = Selector('.feature.feature-4 > p');
        this.fivethCard = Selector('.feature.feature-5 > p');
        this.sixthfiCard = Selector('.feature.feature-6 > p');
        this.buttonGetStarted = Selector('.get-started-button');
    }
}

export default new HomePage;
