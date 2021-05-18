import BaseHelper from './../../helper/BaseHelper';

class CartHelper extends BaseHelper {
    getTotalPrice(products) {
        const productArr = [ ...[].concat(products)];
        const totalPrice = productArr.reduce(
            (acc, curr) => acc + parseInt(curr.price, 10)* parseInt(curr.quantity, 10), 0);
            
        /* assuming every price will be in same currency */
        const currencyType = productArr[0].currency;
        const currencyPrice = this.getPrice(currencyType, totalPrice);
        return currencyPrice;
    }
}

export default new CartHelper();