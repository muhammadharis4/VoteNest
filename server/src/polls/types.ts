export type CreatePollDto = {
    topic: string;
    votesPerVoter: number;
    voterName: string;
};

export type JoinPollDto = {
    pollID: string;
    voterName: string;
};

export type RejoinPollDto = {
    pollID: string;
    userID: string;
    name: string;
};
