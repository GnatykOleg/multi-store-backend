import { Controller, Get } from '@nestjs/common';

import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { CompaniesService } from './companies.service';

import { Company } from './companies.schema';

import {
  API,
  ENDPOINTS,
  ERROR_MESSAGES,
} from 'src/helpers/constants/constants';

const { ISE } = ERROR_MESSAGES;

const { API_COMPANIES } = ENDPOINTS;

const { TAG_COMPANY, OPERATION_GET_ALL_COMPANIES } = API;

@ApiTags(TAG_COMPANY)
@Controller(API_COMPANIES)
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @ApiOperation({ summary: OPERATION_GET_ALL_COMPANIES })
  @ApiOkResponse({ type: [Company] })
  @ApiInternalServerErrorResponse({ description: ISE })
  @Get()
  async getAllCompanies(): Promise<Company[]> {
    const companies = await this.companiesService.getAllCompanies();

    return companies;
  }
}
