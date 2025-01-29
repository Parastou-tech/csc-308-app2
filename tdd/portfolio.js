class StockPortfolio{
    constructor() {
        this.portfolio = {};
    }

    isEmpty() {
        return Object.keys(this.portfolio).length === 0;
    }
}

module.exports = StockPortfolio;