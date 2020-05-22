import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [ItemsModule,
  MongooseModule.forRoot(
    'mongodb+srv://EventApp:BcVBPFRwIXrd9bfT@cluster123-ouzra.mongodb.net/items?retryWrites=true&w=majority'
  ),
  GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
  }),
  // MongooseModule.forRoot('mongodb://localhost/nestgraphql'),
 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
