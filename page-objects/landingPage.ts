import { Page } from "@playwright/test"

export class LandingPage{

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    /**
     * navigates to the landing page.
     */
    async navigate(){
        await this.page.goto('/')
    }

    /**
     * navigates to the "cars+trucks" link under the "for sale" section.
     */
    async gotoCarsPlusTrucks(){
        await this.page.getByText('cars+trucks').click()
    }
}