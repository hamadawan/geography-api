import { IsString } from 'class-validator';

export class PostalCode {
  id: number;

  @IsString()
  code: string;

  @IsString()
  country_code: string;

  @IsString() // Ensures that geom is treated as a string
  geom: string; // GeoJSON representation as a string

  @IsString() // Ensures that geom is treated as a string
  geom_simplified: string; // GeoJSON representation as a string
}
