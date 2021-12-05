import { DomainObject } from "../Types/DomainObject";

export class Label implements DomainObject<string> {
  private _value: string;
  constructor(newValue?: string) {
    if (!newValue || (newValue && newValue.length<5)) throw new Error("Label is mandatory and should have at least 5 characters.");
    this._value = newValue;
  }
  get value() {
    return this._value;
  }
  isEqual = (someOtherDomainObject: DomainObject<string>): boolean =>
    someOtherDomainObject instanceof Label &&
    someOtherDomainObject.value === this.value;
}
