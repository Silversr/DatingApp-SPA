import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesDaComponent } from './messages-da/messages-da.component';
import { ListsComponent } from './lists/lists.component';

export const appRoutes: Routes =  [
    { path: 'home', component: HomeComponent }, // type Route
    { path: 'members', component: MemberListComponent },
    { path: 'messages', component: MessagesDaComponent },
    { path: 'lists', component: ListsComponent },
    { path: '**', redirectTo: 'home',pathMatch: 'full' },
];
