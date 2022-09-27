import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Subscriber from "./subcriber.entity";
import { SubscribersService } from "./subcriber.service";

@Module({
    imports: [TypeOrmModule.forFeature([Subscriber])],
    controllers: [SubscribersService],
    providers: [SubscribersService],
    exports: [SubscribersService],
}
)
export class SubscribersMobule { }