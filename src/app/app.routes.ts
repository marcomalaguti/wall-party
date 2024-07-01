import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { LeadComponent } from './components/climbing-towers/lead/lead.component';
import { BoulderComponent } from './components/climbing-towers/boulder/boulder.component';
import { SlackLineComponent } from './components/lines/slack-line/slack-line.component';
import { ZipLineComponent } from './components/lines/zip-line/zip-line.component';
import { CertificazioniComponent } from './components/certificazioni/certificazioni.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

export const routes: Routes = [
    { path: '', component: ComingSoonComponent },
    { path: 'home', component: HomeComponent },
    { path: 'chi-siamo', component: ChiSiamoComponent },    
    { path: 'lead', component: LeadComponent },
    { path: 'boulder', component: BoulderComponent },
    { path: 'slack-line', component: SlackLineComponent },    
    { path: 'zip-line', component: ZipLineComponent },
    { path: 'certificazioni', component: CertificazioniComponent },
];
