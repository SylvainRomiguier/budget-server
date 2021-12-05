export interface DomainObject<T> {
    isEqual: (someOtherDomainObject: DomainObject<T>) => boolean;
}