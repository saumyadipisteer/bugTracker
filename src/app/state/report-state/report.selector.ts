import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Report } from "src/app/interface/report";

export const reportFeatureSelector = createFeatureSelector<Report[]>("reports");

export const reportSelector = createSelector(
    reportFeatureSelector,
    (report)=> report
)