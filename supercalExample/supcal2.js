const { browser, element, by, $ } = require("protractor")


describe('SuperCalculator test', ()=> {


//unit testing framework


beforeAll(function(){


    browser.get('https://juliemr.github.io/protractor-demo/')

})


afterAll(function(){


    browser.sleep(4000)

})


    it('add test first', function(){


        element(by.model('first')).sendKeys("11011")
        element(by.css('[ng-model="second"]')).sendKeys("88088")
        element(by.buttonText('Go!')).click()

        //validation step
        let actualResult = $('h2.ng-binding').getText()
        expect(actualResult).toEqual('99099')

    })


    it('add test second', function(){


        element(by.model('first')).sendKeys("11011")
        element(by.css('[ng-model="second"]')).sendKeys("77077")
        element(by.buttonText('Go!')).click()

        //validation step
        let actualResult = $('h2.ng-binding').getText()
        expect(actualResult).toEqual('88088')

    })

    it('add test third', function(){


        element(by.model('first')).sendKeys("22022")
        element(by.css('[ng-model="second"]')).sendKeys("77077")
        element(by.buttonText('Go!')).click()

        //validation step
        let actualResult = $('h2.ng-binding').getText()
        expect(actualResult).toEqual('99099')

    })

    it('add test fourth', function(){


        element(by.model('first')).sendKeys("33033")
        element(by.css('[ng-model="second"]')).sendKeys("66066")
        element(by.buttonText('Go!')).click()

        //validation step
        let actualResult = $('h2.ng-binding').getText()
        expect(actualResult).toEqual('99099')

    })
})