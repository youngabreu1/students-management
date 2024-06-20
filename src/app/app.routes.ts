import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentFormComponent } from './components/student-form/student-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'students', component: StudentsListComponent },
    { path: 'students/create', component: StudentFormComponent },
    { path: 'students/edit/:id', component: StudentFormComponent },
    { path: 'students/details/:id', component: StudentsDetailsComponent },
    { path: 'details', component: StudentsDetailsComponent }
];
