import home from '../pages/testCafeHome';

fixture('getting started').page("https://devexpress.github.io/testcafe/");

test('first test', async t => {
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
})
