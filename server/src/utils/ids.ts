import { customAlphabet, nanoid } from "nanoid";

export const generatePollId = () => {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nanoid = customAlphabet(alphabet, 6);
    return nanoid();
}

export const generateUserId = () => {
    return nanoid();
}

export const generateNominationId = () => {
    return nanoid(8);
}