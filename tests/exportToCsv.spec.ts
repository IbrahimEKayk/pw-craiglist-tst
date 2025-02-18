import { test, expect, Page } from '@playwright/test'
import { LandingPage } from '../page-objects/landingPage'
import {CarsPlusTrucksPage} from '../page-objects/carsPlusTrucksPage'



test.beforeEach(async({page}) => {
    await page.goto('/')
})

test('export matching cars to csv and save', async({page}) => {
    const landingPage = new LandingPage(page)
    await landingPage.gotoCarsPlusTrucks()
    const carsPlusTrucksPage = new CarsPlusTrucksPage(page)
    expect(carsPlusTrucksPage.page.title).toBe('chicago  cars & trucks for sale    - craigslist')
    await carsPlusTrucksPage.filterByMakeAndModel('Toyota Camry')
})