import { DomainObject } from "../Types/DomainObject";

export class Amount implements DomainObject<number> {
  private _value: number;
  constructor(newValue?: number) {
    this._value = newValue || 0;
  }
  get value() {
    return this._value;
  }
  isEqual = (someOtherDomainObject: DomainObject<string>): boolean =>
    someOtherDomainObject instanceof Amount &&
    someOtherDomainObject.value === this.value;
}
