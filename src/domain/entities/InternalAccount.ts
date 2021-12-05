import { IAccount } from "../aggregates/Account";
import { DomainObject } from "../Types/DomainObject";
import { Label } from "../valueObjects/Label";

export class InternalAccount implements DomainObject<IAccount> {
  private _value: IAccount;
  constructor(newValue?: string) {
    this._value = {
        label : new Label(newValue),
        kind: "Internal"
    }
  }
  get value() {
    return this._value;
  }
  isEqual = (someOtherDomainObject: DomainObject<IAccount>): boolean =>
    someOtherDomainObject instanceof InternalAccount &&
    someOtherDomainObject.value.label.isEqual(this.value.label);
}
