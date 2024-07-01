import { $ } from '@wdio/globals'
import Page from './page.js';

class DashboardPage extends Page {

    get cartIcon(){
        return $("#shopping_cart_container");
    }

    async validateOnPage() {
        expect(this.cartIcon).toBeDisplayed();
    }
}

export default new DashboardPage();