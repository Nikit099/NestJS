import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(`mongodb://uxvcrw2h9vqpd742bfnx:yeLQv5KFUtuuqH0N0JBk@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/brnz12te6obimpk?replicaSet=rs0`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
