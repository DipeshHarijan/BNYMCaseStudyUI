import { Bank } from './bank';

export class Account {
    public accountNumber: number;
    public bank: Bank;
    public pan: string;
    constructor(bank: Bank, pan: string) {
        this.bank = bank;
        this.pan = pan;
    }
}

