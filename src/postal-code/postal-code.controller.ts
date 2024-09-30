import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CreatePostalCodeDto } from './dto/create-postal-code.dto';
import { UpdatePostalCodeDto } from './dto/update-postal-code.dto';
import { PostalCodeService } from './postal-code.service';

@Controller('postal-codes')
export class PostalCodeController {
  constructor(private readonly postalCodeService: PostalCodeService) {}

  @Get()
  async findAll(
    @Query('page') page: number = 1, // Default to page 1
    @Query('limit') limit: number = 10 // Default to limit 10
  ) {
    return this.postalCodeService.findAll(page, limit);
  }

  @Get(':code') // Use code instead of id
  async findOne(@Param('code') code: string) {
    return this.postalCodeService.findOne(code); // Pass code to service
  }

  @Post()
  async create(@Body() createPostalCodeDto: CreatePostalCodeDto) {
    return this.postalCodeService.create(createPostalCodeDto); // Use DTO
  }

  @Patch(':code') // Use code instead of id
  async update(@Param('code') code: string, @Body() updatePostalCodeDto: UpdatePostalCodeDto) {
    return this.postalCodeService.update(code, updatePostalCodeDto); // Use DTO
  }

  @Delete(':id') // Use code instead of id
  async delete(@Param('id') id: string) {
    return this.postalCodeService.delete(+id); // Pass code to service
  }
}
