import { treatmentTypes } from "../ActionTypes/treatmentTypes";
import { runTypes } from '../ActionTypes/runTypes';
import { userTypes } from "../ActionTypes/userTypes";

export interface Treatment {
    id: number;
    category: string;
    procedure: string;
}
export interface Run {
    id: number,
    start_timestamp :string,
    end_timestamp?: string,
    user_id?: number
}

export interface Event {
    procedure: string,
    timestamp: string,
    id: number
}

export interface User {
    access: number[],
    airway: number[],
    chest: number[],
    medication: number[],
    clearance_level: number,
    id: number,
    username: string
}

export interface SetAllTreatments {
    type: typeof treatmentTypes.SET_ALL_TREATMENTS;
    payload: Treatment[];
}

export interface SetCurrentTreatments {
    type: typeof treatmentTypes.SET_CURRENT_TREATMENT;
    payload: Treatment;
}
export interface SetTreatments {
    type: typeof treatmentTypes.SET_TREATMENTS;
    payload: Treatment;
}

export interface SetCurrentRun {
    type: typeof runTypes.SET_CURRENT_RUN;
    payload: Run;
}

export interface ClearCurrentRun {
    type: typeof runTypes.CLEAR_CURRENT_RUN;
}

export interface SetRuns {
    type: typeof runTypes.SET_RUNS;
    payload: Run[];
}

export interface SetRunDetails {
    type: typeof runTypes.SET_RUN_DETAILS;
    payload: Event[];
}

export interface SetUser {
    type: typeof userTypes.SET_USER;
    payload: User;
}

export interface UnsetUser {
    type: typeof userTypes.UNSET_USER;
}

export type TreatmentsActions = 
    | SetAllTreatments
    | SetCurrentTreatments
    | SetTreatments; 

export type RunsActions = 
    | SetCurrentRun
    | ClearCurrentRun
    | SetRuns
    | SetRunDetails;

export type UserActions = 
    | SetUser
    | UnsetUser;
