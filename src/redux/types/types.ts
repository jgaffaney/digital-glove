import { treatmentTypes } from "../ActionTypes/treatmentTypes";
import { runTypes } from '../ActionTypes/runTypes';

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

export type TreatmentsActions = 
    | SetAllTreatments
    | SetCurrentTreatments
    | SetTreatments; 

export type RunsActions = 
    | SetCurrentRun
    | ClearCurrentRun
