import { Controller, Get } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './companies.schema';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Companies')
@Controller('api/companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @ApiOperation({ summary: 'Get list of companies' })
  @ApiResponse({
    status: 200,
    description: 'You get a list of companies',
  })
  @Get()
  async getAllCompanies(): Promise<Company[]> {
    const companies = await this.companiesService.getAllCompanies();

    return companies;
  }
}
