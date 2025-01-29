class StockPortfolio{
    constructor() {
        this.portfolio = {};
    }

    isEmpty() {
        return Object.keys(this.portfolio).length === 0;
    }

    purchase(ticker, shares){
        if (!ticker || shares <= 0){
            throw new Error('Invalid ticker symbol or number of shares.');
        }
        if (this.portfolio[ticker]){
            this.portfolio[ticker] += shares;
        } else{
            this.portfolio[ticker] = shares;
        }
    }

    getShares(ticker){
        if(!ticker){
            throw new Error('Invalid ticker symbol.');
        }
        if(this.portfolio[ticker]){
            return this.portfolio[ticker];
        } else {
            return 0;
        }
    }

    
}

module.exports = StockPortfolio;