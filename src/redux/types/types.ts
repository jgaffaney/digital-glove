import { treatmentTypes } from "../ActionTypes/treatmentTypes";

export interface Treatment {
    id: number;
    category: string;
    procedure: string;
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


export type TreatmentsActions = 
    | SetAllTreatments
    | SetCurrentTreatments
    | SetTreatments 
