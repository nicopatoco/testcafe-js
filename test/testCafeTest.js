import home from '../pages/testCafeHome';
import getStartedPage from '../pages/getStartedPage';
import { ClientFunction } from 'testcafe';

const getStartedUrl = 'https://devexpress.github.io/testcafe/documentation/getting-started/';

fixture('getting started').page(home.url);

test('In this test should check all the white titles from the cards, ' +
    'then navigate to get started page in order to validate my current url and navBar', async t => {
    await t
        .maximizeWindow()
        .expect(home.firstCard.innerText).eql('Create stable tests\n(and no manual timeouts)', { timeout: 500 })
        .expect(home.secondCard.innerText).eql('Write in latest JS\nor TypeScript', { timeout: 500 })
        .expect(home.thirdCard.innerText).contains('Detect JS errors', { timeout: 500 })
        .expect(home.fourthCard.innerText).contains('Launch', { timeout: 500 })
        .expect(home.fivethCardContainer.find('.feature.feature-5 > p').innerText).contains('Build readable tests', { timeout: 500 })
        .expect(home.fivethCardContainer.find('.feature-5-code').innerText).contains("const el = Selector('.column').find('label')", { timeout: 500 })
        .expect(home.sixthfiCard.innerText).contains('Include tests in continuous', { timeout: 500 });

    home.clickOnGetStartedButton();

    await t
        .expect(getStartedPage.navBar.exists).eql(true)
        .expect(getStartedPage.activeTab.exists).eql(true);

    const getLocation = ClientFunction(() => document.location.href);

    await t
        .expect(getLocation()).eql(getStartedUrl);
})

test('In This test should navigate to get started page, then check my current url, ' +
    'navigate through all the navBar menus and check the titles.', async t => {
    await t
        .maximizeWindow();

    home.clickOnGetStartedButton();

    const getLocation = ClientFunction(() => document.location.href);

    await t
        .expect(getLocation()).eql(getStartedUrl);

    const data = ['Getting Started', 'Guides', 'Reference', 'Recipes', 'How It Works', 'Examples'];

    for (let i = 0; i < 6; i++) {
        if (i == 0) {
            await t
                .expect(getStartedPage.activeTabTitle.innerText).contains(data[i], { timeout: 500 });
        } else {
            await t
                .click(getStartedPage.navBar.nth(i))
                .expect(getStartedPage.activeTabTitle.innerText).contains(data[i], { timeout: 500 });
        }
    }
});
