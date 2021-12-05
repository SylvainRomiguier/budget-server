import {binding, given, then, when} from "cucumber-tsflow";
import {assert} from "chai";
import { Account } from "../src/domain/aggregates/Account";
import { InternalAccount } from "../src/domain/entities/InternalAccount";

@binding()
export class AccountSteps {
    private internalAccount?: InternalAccount;
    private account?:Account;

    @given(/an internal account/)
    public givenInternalAccount(internalAccountName: string) {
        this.internalAccount = new InternalAccount(internalAccountName);
    }

    @when(/internal account is linked to the account/)
    public linkInternalAccountToAccount() {
        this.account = new Account(this.internalAccount);
    }

    @then(/the account is created/)
    public accountShouldExixt() {
        assert.isDefined(this.account);
    }
}