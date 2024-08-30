import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';
import { InterestPointModule } from './interest-points/interest-point.module';

import { UserModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SharedModule,
    UserModule,
    InterestPointModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
