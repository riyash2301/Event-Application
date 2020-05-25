import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { ItemInput } from './inputs/items.input';
import { ItemsService } from './items.service';
import { ItemType } from './dto/create_items.dto';
import { InputType } from 'zlib';
import { Item } from './interfaces/items.interface';

@Resolver()
export class ItemsResolver {

    constructor( private readonly itemservice: ItemsService) {}

    @Query(() => String)
    async hello() {
        return 'hello'
    }

    @Query(() => [ItemType])
    async items() : Promise<Item[]>{
        return await this.itemservice.findAll();
    }

    @Mutation(() => ItemType)
    async createItem(@Args('input') input: ItemType):Promise<Item> {
      return await this.itemservice.create(input);
    }
}
