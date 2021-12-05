import { DomainObject } from "../Types/DomainObject";

export class Description implements DomainObject<string> {
  private _value: string;
  constructor(newValue?: string) {
    this._value = newValue || "";
  }
  get value() {
    return this._value;
  }
  isEqual = (someOtherDomainObject: DomainObject<string>): boolean =>
    someOtherDomainObject instanceof Description &&
    someOtherDomainObject.value === this.value;
}
