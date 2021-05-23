import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MoviesModule } from './movies/movies.module';
import { CatsModule } from './cats/cats.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [UserModule, MoviesModule, CatsModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
