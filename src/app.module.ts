import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './app.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Path to SQLite file
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Auto-load entities
      synchronize: true, // Auto-sync schema (disable in production)
    }),
    TypeOrmModule.forFeature([CatEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
