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
    test('Portfolio shows # of shares for a given company after purchase.', () => {
        portfolio.purchase('AMZN', 5);
        expect(portfolio.getShares('AMZN')).toBe(5);
        portfolio.purchase('AMZN', 3);
        expect(portfolio.getShares('AMZN')).toBe(8);
    })

    //2.4
    test('Porfolio shows # of shares for for a given company after sale.', () => {
        portfolio.purchase('AMZN', 5);
        expect(portfolio.getShares('AMZN')).toBe(5);
        portfolio.sell('AMZN', 4);
        expect(portfolio.getShares('AMZN')).toBe(1);
    })

    //2.5
    test('Porfolio shows # of unique ticker symbols.', () => {
        portfolio.purchase('AMZN', 5);
        portfolio.purchase('GOOGL', 4);
        expect(portfolio.getCompanyCount()).toBe(2);
    })

    //2.6
    test('Porfolio contains ticker only if 1 or more shares are owned.', () => {
        portfolio.purchase('AMZN', 5);
        portfolio.sell('AMZN', 4);
        expect(portfolio.getCompanyCount()).toBe(1);
        expect(portfolio.getShares('AMZN')).toBe(1);
    })

    //2.7 
    test('The portfolio answers how many shares exist for a given ticker.', () => {
        portfolio.purchase('AMZN', 5);
        portfolio.sell('AMZN', 5);
        expect(portfolio.getCompanyCount()).toBe(0);
        expect(portfolio.getShares('AMZN')).toBe(0);
    })

    //2.8
    test('The portfolio should not allow more shares than owned to be sold.', () => {
        portfolio.purchase('AMZN', 5);
        expect(() => {
            portfolio.sell('AMZN', 6);
        }).toThrow('Not possible to sell this number of shares')
    });

});

/*
Reflection on TDD:
I was able to follow the test-first approach going over the red-green-refactor cycle.
Although it was annoying at first, I was able to see why it is the way to go for 
problems you haven't quite figured out how you're going to solve yet. It also made
sense to definitevly have a way of testing your code before you even write it, 
because if you can't test it you won't know if its completely correct. On the other
hand I also see why people don't commonly follow this structurure because seeing the
tests fail first before even writing the code for it was annoying. 
*/