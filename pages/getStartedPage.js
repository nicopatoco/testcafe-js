import {Selector} from 'testcafe';

class GetSartedPage {
    constructor() {
        this.navBar = Selector(".doc-top-nav-tab")
        this.activeTab = Selector(".doc-top-nav-tab.active")
        this.activeTabTitle = Selector(".post-content > h1")
    }
}

export default new GetSartedPage();
