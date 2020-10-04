import home from '../pages/testCafeHome';

fixture('getting started').page("https://devexpress.github.io/testcafe/");

test('first test', async t => {
    await t
        .maximizeWindow();
})
