import { DomainObject } from "../Types/DomainObject";
import { Label } from "../valueObjects/Label";

export class Category implements DomainObject<Label> {
  private _value: Label;
  constructor(newLabel?: string) {
   this._value = new Label(newLabel);
  }
  get value() {
    return this._value;
  }
  isEqual = (someOtherDomainObject: DomainObject<Label>): boolean =>
    someOtherDomainObject instanceof Category &&
    someOtherDomainObject.value.isEqual(this.value);
}
