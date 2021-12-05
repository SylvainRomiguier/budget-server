import { Category } from "../entities/Category";
import { DomainObject } from "../Types/DomainObject";
import { Label } from "../valueObjects/Label";

interface IFamily {
    label: Label;
    categories: Category[];
}

export class Family implements DomainObject<IFamily> {
  private _value: IFamily;
  constructor(newValue?: string) {
    this._value = {
        label: new Label(newValue),
        categories: []
    }
  }
  get value() {
    return this._value;
  }
  add = (category:Category) => {
      const alreadyExisting = this._value.categories.find(c => c.isEqual(category));
      if(!!alreadyExisting) throw new Error(`${category.value} already exists in ${this.value.label}.`);
      this._value.categories.push(category);
  }
  remove = (category:Category) => {
    const alreadyExisting = this._value.categories.find(c => c.isEqual(category));
    if(!alreadyExisting) throw new Error(`${category.value} does not exist in ${this.value.label}.`);
      this._value.categories = this._value.categories.filter(c => !c.isEqual(category));
  }
  isEqual = (someOtherDomainObject: DomainObject<IFamily>):boolean =>
    someOtherDomainObject instanceof Family && someOtherDomainObject.value.label.isEqual(this.value.label);
}
