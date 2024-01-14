export interface IRule{
    name: string;
    apply(cell: any): void;
    getRandomNumber(): number;
}