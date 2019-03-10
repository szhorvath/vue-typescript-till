import { TaxRates } from "./TaxRates";

export interface TaxGroup {
  Id: number;
  Name: string;
  TaxRates: TaxRates[];
}
