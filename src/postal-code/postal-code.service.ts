import { Injectable } from '@nestjs/common';
import { CreatePostalCodeDto } from './dto/create-postal-code.dto';
import { UpdatePostalCodeDto } from './dto/update-postal-code.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostalCodeService {
  constructor(private prisma: PrismaService) { }

  async findAll(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
    const postalCodes = await this.prisma.$queryRaw`
      SELECT id, code, country_code, ST_AsGeoJSON(geom) as geom 
      FROM postal_code 
      ORDER BY id
      LIMIT ${limit} OFFSET ${offset}`;

    const totalPostalCodes = await this.prisma.$queryRaw`
      SELECT COUNT(*) as count FROM postal_code`;

    return {
      data: postalCodes,
      total: Number(totalPostalCodes?.[0]?.count),
      page,
      limit,
    };
  }

  async findOne(code: string) {
    return this.prisma.$queryRaw`
      SELECT id, code, country_code, ST_AsGeoJSON(geom) as geom 
      FROM postal_code 
      WHERE code = ${code}`;
  }

  async create(data: CreatePostalCodeDto) {
    return this.prisma.$queryRaw`
      INSERT INTO postal_code (code, country_code, geom) 
      VALUES (${data.code}, ${data.country_code}, ST_GeomFromGeoJSON(${data.geom})) 
      RETURNING id, code, country_code, ST_AsGeoJSON(geom) as geom`;
  }

  async update(code: string, data: UpdatePostalCodeDto) {
    return this.prisma.$queryRaw`
      UPDATE postal_code 
      SET country_code = ${data.country_code}, geom = ST_GeomFromGeoJSON(${data.geom})
      WHERE code = ${code}
      RETURNING id, code, country_code, ST_AsGeoJSON(geom) as geom`;
  }

  async delete(id: number) {
    return this.prisma.postalCode.delete({ where: { id } });
  }
}
