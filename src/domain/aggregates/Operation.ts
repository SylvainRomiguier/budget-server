import { Category } from "../entities/Category";
import { InternalAccount } from "../entities/InternalAccount";
import { DomainObject } from "../Types/DomainObject";
import { Amount } from "../valueObjects/Amount";
import { Description } from "../valueObjects/Description";
import { Label } from "../valueObjects/Label";
import { UniqueId } from "../valueObjects/UniqueId";
import { Account } from "./Account";

interface IOperation {
  id: UniqueId;
  date: Date;
  valueDate: Date;
  label: Label;
  description: Description;
  amount: Amount;
  category: Category;
  account: InternalAccount;
  relatedAccount: Account;
}

export class Operation implements DomainObject<IOperation> {
  private _value: IOperation;
  constructor(
    id?: string,
    date?: Date,
    valueDate?: Date,
    label?: string,
    description?: string,
    amount?: number,
    category?: Category,
    account?: InternalAccount,
    relatedAccount?: Account
  ) {
    if (!id || !date || !category || !account || !relatedAccount)
      throw new Error(
        "Id, date, category, account, related account are mandatory."
      );
    this._value = {
      id: new UniqueId(id),
      date,
      valueDate: valueDate || date,
      label: new Label(label),
      description: new Description(description),
      amount: new Amount(amount),
      category,
      account,
      relatedAccount,
    };
  }
  get value() {
    return this._value;
  }
  isEqual = (someOtherDomainObject: DomainObject<IOperation>):boolean =>
    someOtherDomainObject instanceof Operation &&
    someOtherDomainObject.value.id.isEqual(this.value.id);
}
