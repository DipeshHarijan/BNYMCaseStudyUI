import { Account } from './account';

export class Transaction {
    constructor(
        public mutualFundId: number,
        public amount: number,
        public account: Account) { }

}
