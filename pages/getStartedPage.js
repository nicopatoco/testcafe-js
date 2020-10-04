import {Selector} from 'testcafe';

class GetSartedPage {
    constructor() {
        this.navBar = Selector(".doc-top-nav-tab")
        this.activeTab = Selector(".doc-top-nav-tab.active")
    }
}

export default new GetSartedPage();
