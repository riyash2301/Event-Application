import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemInput } from './inputs/items.input';
import { ItemType } from './dto/create_items.dto';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private itemModel: Model<Item>) {}

    async findAll(): Promise<Item[]> {
        return  await this.itemModel.find().exec();
    }

    async create(input:Item){
        const createdItem = await new this.itemModel(input);
        return   createdItem.save();
      }
}
