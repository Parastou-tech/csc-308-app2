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
});

