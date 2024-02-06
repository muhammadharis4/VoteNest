import { Injectable } from "@nestjs/common";
import { CreatePollDto, JoinPollDto, RejoinPollDto } from "./types";
import { generatePollId, generateUserId } from "src/utils/ids";

@Injectable()
export class PollsService {
    async create(fields: CreatePollDto) {
        const pollID = generatePollId();
        const userID = generateUserId();

        return {
            ... fields,
            userID,
            pollID,
        }

    }

    async join(fields: JoinPollDto) {
        const userID = generateUserId();
        
        return {
            ... fields,
            userID,
        }
    }

    async rejoinPoll(fields: RejoinPollDto) {
       return fields; 
    }
}