import { ExternalAccount } from "../entities/ExternalAccount";
import { InternalAccount } from "../entities/InternalAccount";
import { DomainObject } from "../Types/DomainObject";
import { Label } from "../valueObjects/Label";

export interface IAccount {
  kind: "Internal" | "External";
  label: Label;
}

export class Account
  implements DomainObject<InternalAccount | ExternalAccount>
{
  private _value: InternalAccount | ExternalAccount;
  constructor(account?: InternalAccount | ExternalAccount) {
    if (!account) throw new Error("Account is mandatory.");
    this._value = account;
  }
  get value() {
    return this._value;
  }
  isEqual = (
    someOtherDomainObject: DomainObject<InternalAccount | ExternalAccount>
  ): boolean =>
    someOtherDomainObject instanceof Account &&
    someOtherDomainObject.value.value.label.isEqual(this.value.value.label) &&
    ((someOtherDomainObject.value.value.kind === "Internal" &&
      this.value.value.kind === "Internal") ||
      (someOtherDomainObject.value.value.kind === "External" &&
        this.value.value.kind === "External"));
}
