import { Locator, Page } from "@playwright/test"

export class CarsPlusTrucksPage {

    readonly page: Page

    readonly makeAndModelField = 'input[name="auto_make_model"]'
    readonly yearMinimumField = 'input[name="min_auto_year"]'
    readonly yearMaximumField = 'input[name="max_auto_year"]'
    readonly milesMinimumField = 'input[name="min_auto_miles"]'
    readonly milesMaximumField = 'input[name="max_auto_miles"]'
    readonly priceMinimumField = 'input[type="text"][placeholder="min"]'
    readonly priceMaximumField = 'input[type="text"][placeholder="max"]'

    constructor(page: Page) {
        this.page = page

        enum filters {
            'MakeAndModel',
            'Year',
            'Odometer',
            'Price',
            'SellerType'
        }
    }

    /**
     * 
     * @param makeAndModel Fills in the "Make and Model" textbox with the provided parameter.
     */
    filterByMakeAndModel = async (makeAndModel: string) => await this.page.locator(this.makeAndModelField).fill(makeAndModel)
        .then(async () => await this.page.keyboard.press('ENTER'))

    /**
     * Fills in the "Model Year: minimum, maximum" fields with the provided parameters.
     * @param yearMin @param yearMax
     * @returns 
     */
    filterByYear = async (yearMin: string) => async (yearMax: string) =>
        await this.page.locator(this.yearMinimumField).fill(yearMin)
            .then(async () => await this.page.locator(this.yearMaximumField).fill(yearMax))

    /**
     * Fills in the "Odometer: minimum, maximum" fields with the provided parameters.
     * @param milesMin @param milesMax
     * @returns 
     */
    filterByMiles = async (milesMin: string) => async (milesMax: string) =>
        await this.page.locator(this.milesMinimumField).fill(milesMin)
            .then(async () => this.page.locator(this.milesMaximumField).fill(milesMax))

    /**
     * Fills in the "Price: minimum, maximum" fields with the provided parameters.
     * @param priceMin @param priceMax
     * @returns 
     */
    filterByPrice = async (priceMin: string) => async (priceMax: string) =>
        await this.page.locator(this.priceMinimumField).fill(priceMin)
            .then(async () => await this.page.locator(this.priceMaximumField).fill(priceMax))

    /**
     * Clicks on the seller type button with the text provided in the parameter. Valid values are "all", "owner" and "dealer".
     * @param seller 
     * @returns 
     */
    filterBySeller = async (seller: string) => await this.page.locator('button').getByText(`${seller}`, { exact: true }).click()

    applyFilter = async () => await this.page.locator('button').getByText('apply').click().then(async () => await this.page.waitForLoadState())

}