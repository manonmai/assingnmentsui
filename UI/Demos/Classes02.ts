class BankAccount {
	protected accountNumber:number;
	protected bankName:string;
    constructor(accountNumber: number,bankName:string) {
        this.accountNumber = accountNumber;
		this.bankName = bankName;
    }
    deposit() {
        return "Cash Deposited in A/C No : " + this.accountNumber;
    }
	withdraw() {
        return "Cash Withdraw from A/C No : " + this.accountNumber;
    }
}

class SavingsAccount extends BankAccount{
	private _accountType: string;
    constructor(accountType:string, accountNumber: number,bankName:string) {
        super(accountNumber,bankName);
		this._accountType = accountType;
    }
    printInfo() {
        return "A/C No : " + this.accountNumber +" Bank Name : "+this.bankName+" Saving Type : "+this._accountType;
    }
}

var savingAccount = new SavingsAccount("SalaryAccount",53546,"AxisBank");
savingAccount.deposit();
savingAccount.withdraw();
savingAccount.printInfo();