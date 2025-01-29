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

    sell(ticker, shares){
        if (!ticker || shares <= 0){
            throw new Error('Invalid ticker symbol or number of shares.');
        }
        if (!this.portfolio[ticker] || shares > this.portfolio[ticker]){
            throw new Error('Not possible to sell this number of shares');

        } 
        this.portfolio[ticker] -= shares;
        if(this.portfolio[ticker] === 0){
            delete this.portfolio[ticker];
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

    getCompanyCount(){
        return Object.keys(this.portfolio).length;
    }
    

    
}

module.exports = StockPortfolio;