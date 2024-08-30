import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateInterestPoint } from 'src/interest-points/application/create-interest-point';
import { InterestPointProvider } from 'src/interest-points/infra/ioc/interest-point.provider';
import {
  CreateInterestPointDto,
  GetNearbyInterestPointsDto,
} from '../dtos/inputs';
import {
  ResponseCreateInterestPointCategoryDto,
  ResponseGetNearbyInterestPointsDto,
} from '../dtos/outputs';
import { GetNearbyInterestPoints } from 'src/interest-points/application/get-nearby-interest-points';

@ApiTags('interest-points')
@Controller('interest-points')
export class InterestPointController {
  constructor(
    @Inject(InterestPointProvider.CREATE_INTEREST_POINT)
    private createInterestPoint: CreateInterestPoint.Contract,
    @Inject(InterestPointProvider.GET_NEARBY_INTEREST_POINTS)
    private getNearbyInterestPoints: GetNearbyInterestPoints.Contract,
  ) {}

  @ApiCreatedResponse({ type: ResponseCreateInterestPointCategoryDto })
  @Post()
  async handleCreateInterestPointCategory(
    @Body() input: CreateInterestPointDto,
  ): Promise<ResponseCreateInterestPointCategoryDto> {
    return this.createInterestPoint.execute({
      ...input,
      description: input.description || null,
    });
  }

  @ApiOkResponse({ type: ResponseGetNearbyInterestPointsDto })
  @Get('nearby')
  async handleGetNearbyInterestPoints(
    @Query() input: GetNearbyInterestPointsDto,
  ): Promise<ResponseGetNearbyInterestPointsDto[]> {
    return this.getNearbyInterestPoints.execute({
      latitude: Number(input.latitude),
      longitude: Number(input.longitude),
      distance: input.distance,
    });
  }
}
