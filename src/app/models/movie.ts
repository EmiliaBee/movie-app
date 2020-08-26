export interface Movie {

    title: string;
    director: string;
    year: number;
    id: number;
    cast: string;
    runningTimes: RunningTime;
}

export interface RunningTime {
    mon: string[];
    tue: string[];
    wed: string[];
    thu: string[];
    fri: string[];
    sat: string[];
    sun: string[];
}

export interface Seat {

    row: number;
    col: number;
    selected: boolean;
    reserved: boolean;

}

// git add .
// git commit -am "make it better"
// git push heroku master

