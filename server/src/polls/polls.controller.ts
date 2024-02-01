import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos';

@Controller('polls')
export class PollsController {
    @Post()
    async create(@Body() CreatePollDto: CreatePollDto) {
        Logger.log('Creating a poll...');
    }

    @Post('/join')
    async join(@Body() JoinPollDto: JoinPollDto) {
        Logger.log('Joining a poll...');
    }

    @Post('/vote')
    async vote() {
        Logger.log('Voting on a poll...');
    }

}