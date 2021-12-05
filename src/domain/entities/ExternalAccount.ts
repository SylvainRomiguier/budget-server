import { IAccount } from "../aggregates/Account";
import { DomainObject } from "../Types/DomainObject";
import { Label } from "../valueObjects/Label";

export class ExternalAccount implements DomainObject<IAccount> {
  private _value: IAccount;
  constructor(newValue?: string) {
    this._value = {
        label : new Label(newValue),
        kind: "External"
    }
  }
  get value() {
    return this._value;
  }
  isEqual = (someOtherDomainObject: DomainObject<IAccount>): boolean =>
    someOtherDomainObject instanceof ExternalAccount &&
    someOtherDomainObject.value.label.isEqual(this.value.label);
}
