import { DomainObject } from "../Types/DomainObject";

export class UniqueId implements DomainObject<string> {
  private _value: string;
  constructor(newValue?: string) {
    if (!newValue) throw new Error("Unique id is mandatory.");
    this._value = newValue;
  }
  get value() {
    return this._value;
  }
  isEqual = (someOtherDomainObject: DomainObject<string>): boolean =>
    someOtherDomainObject instanceof UniqueId &&
    someOtherDomainObject.value === this.value;
}
