import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../interface/user';
import { Report } from '../interface/report';
import { ReportService } from './report.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private reports: Report[] = [];
  private reportSubject$: BehaviorSubject<Report[]> = new BehaviorSubject<
    Report[]
  >([
    {
      subject: '',
      severity: '',
      status: '',
      describeTheBug: '',
      user: '',
      createdOn: '',
    },
  ]);

  getRecipe$ = this.reportSubject$.asObservable();

  constructor(private reportService: ReportService) {}

  /**
   * Initializes reports to the subject
   */
  initializeRecipes(): void {
    this.reportSubject$.next(
      JSON.parse(localStorage.getItem('reports') || '[]')
    );
  }

  postRecipes(report: Report) {
    // if localstorage already has existing reports then assign it reports array
    if (JSON.parse(localStorage.getItem('reports') || '[]').length) {
      this.reports = JSON.parse(localStorage.getItem('reports') || '[]');
    }
    // push new report
    this.reports.push(report);
    this.reportSubject$.next(this.reports);
    localStorage.setItem('reports', JSON.stringify(this.reports));
    localStorage.removeItem('reports');

    this.reportService.reportSubject$.next([]);
  }
}
