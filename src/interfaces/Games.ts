/*Evren Yaman
This is our interface and the data that we are extracting from the API.
These fields can be used in our Game.tsx file to display visual information*/
export interface Games {
    id: number;
    title: string;
    worth: string;
    image: string;
    description: string;
    published_date: string;
    platforms: string;
    users: number;
    gamerpower_url: string;
}