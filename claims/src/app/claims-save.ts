import { Hospital } from "./hospital";
import { Patient } from "./patient";
import { Policy } from "./policy";
import { Specialist } from "./specialist";
import { Treatment } from "./treatment";

export class ClaimsSave {
    claimsId:number;
    patient:Patient;
    hospital:Hospital;
    policy:Policy;
    treatment:Treatment;
    specialist:Specialist;
    capableAmount:number;
}
