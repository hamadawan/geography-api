import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostalCodeDto {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  country_code: string;

  @IsString() // Optional or required based on your needs
  geom: string; // GeoJSON representation as a string


  @IsString() // Optional or required based on your needs
  geom_simplified: string; // GeoJSON representation as a string
}
