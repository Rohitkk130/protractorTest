const { browser, Browser, element, by, By, $ } = require("protractor")



describe('Super calculator testing',function(){

    it('Add two number',function(){
        browser.get("https://juliemr.github.io/protractor-demo/")

        element(by.css('.input-small')).sendKeys('111')
        element(by.model('second')).sendKeys('222')

        $('.btn').click()

        browser.sleep(5000)

        let result = $('.ng-binding').getText()
        expect(result).toEqual('333')




        browser.sleep(4000)





    })







})