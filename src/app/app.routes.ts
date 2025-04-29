import { Routes } from '@angular/router';
import { HomeComponent } from './presentation/pages/home/home.component';
import { HeaderComponent } from './presentation/sub-components/header/header.component';
import { VideoComponent } from './presentation/sub-components/video/video.component';
import { CardHighComponent } from './presentation/sub-components/card-high/card-high.component';
import { CardMinComponent } from './presentation/sub-components/card-min/card-min.component';

export const routes: Routes = [

    {
        path:'home' , component: HomeComponent
    },
    {
        path:"", redirectTo:"home", pathMatch:"full"
    },
    {
        path:'header' , component: HeaderComponent

    },
    {
        path:'video' , component: VideoComponent

    },
    {
        path:'card' , component: CardMinComponent

    }


];
