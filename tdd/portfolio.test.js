const StockPortfolio = require('./portfolio');

describe('StockPortfolio Module - TDD Implementation', () => {
    let portfolio;
    beforeEach(() =>{
        portfolio = new StockPortfolio()
    });

    //2.1 
    test('Portfolio should initialize empty', ()=> {
        expect(portfolio.isEmpty()).toBe(true);
    });

    //2.2
    test('Portfolio reports does not report as empty when shares are bought', ()=> {
        expect(portfolio.isEmpty()).toBe(true);
        portfolio.purchase('AMZN', 5);
        expect(portfolio.isEmpty()).toBe(false);
    })

    //2.3
    test('Portfolio shows # of shares for a given company.', () => {
        portfolio.purchase('AMZN', 5);
        expect(portfolio.getShares('AMZN')).toBe(5);
        portfolio.purchase('AMZN', 3);
        expect(portfolio.getShares('AMZN')).toBe(8);
    })
});

