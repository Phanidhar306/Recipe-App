import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RecipecardComponent } from './recipecard/recipecard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RecipeOverviewComponent } from "./recipe-overview/recipe-overview.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipecardComponent, DashboardComponent, LandingPageComponent, RouterLink, RecipeOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
