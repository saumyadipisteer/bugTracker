import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Report } from '../interface/report';
import { Recipe } from '../interface/user';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  reportSubject$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  useReportSubject: Observable<Report[]> =
    this.reportSubject$.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Sets recipe's report in localstorage and updates subject
   * @param data Ingreident[]
   * @returns void
   */
  setReports(data: Report[]): void {
    this.reportSubject$.next(data);
    localStorage.setItem('reports', JSON.stringify(data));
  }

  /**
   * @description Fetches all the report list from the localstorage
   * and refreshes the subject
   * @param none
   * @returns Observable<Report[]>
   */
  getReports(): Observable<Report[]> {
    this.reportSubject$.next(
      JSON.parse(localStorage.getItem('reports') || '[]')
    );
    return this.useReportSubject;
  }

  /**
   * Deletes report from localstorage and the report subject
   * @param index number
   * @returns void
   */
  deleteReport(index: number): void {
    localStorage.setItem(
      'reports',
      JSON.stringify(
        this.rewriteArray(
          JSON.parse(localStorage.getItem('reports') || '{}'),
          index
        )
      )
    );

    this.reportSubject$.next(
      JSON.parse(localStorage.getItem('reports') || '{}')
    );
  }

  /**
   * Removes item from array and rewrites the array
   * @param localStorageItem Report[]
   * @param index number - will remove the item from array
   * @returns Report[]
   */
  private rewriteArray(
    localStorageItem: Report[],
    index: number
  ): Report[] {
    let splicedItem = localStorageItem.splice(index).splice(1);
    return [...localStorageItem, ...splicedItem];
  }

  updateReport(index: number) {
    console.log(localStorage.getItem('reports'));
  }

  /**
   * Fetches all recipe
   * @returns `Recipe`
   */
  getAllRecipes(): Recipe[] {
    return JSON.parse(localStorage.getItem('recipes') || '[]');
  }
}
