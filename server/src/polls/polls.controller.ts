import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos';
import { PollsService } from './polls.service';

@Controller('polls')
export class PollsController {
    constructor(private pollsService: PollsService) {}

    @Post()
    async create(@Body() createPollDto: CreatePollDto) {
        Logger.log('Creating a poll...');
        const result = await this.pollsService.create(createPollDto);
        
        return result;
    }

    @Post('/join')
    async join(@Body() JoinPollDto: JoinPollDto) {
        Logger.log('Joining a poll...');
        const result = await this.pollsService.join(JoinPollDto);

        return result;
    }

    @Post('/vote')
    async vote() {
        Logger.log('Voting on a poll...');
        const result = await this.pollsService.rejoinPoll({
            name: 'From Token',
            pollID: 'From Token',
            userID: 'From Token',
        })

        return result;
    }

} 