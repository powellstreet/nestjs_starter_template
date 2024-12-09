import { Module } from '@nestjs/common';

// modules
import { ConfigureModule } from './config/config.module';
import { TemplateModule } from './modules/template/template.module';

@Module({
  imports: [
    ConfigureModule,
    TemplateModule
  ],
})
export class AppModule {}
