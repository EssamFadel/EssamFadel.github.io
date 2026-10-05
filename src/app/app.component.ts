import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Publication { title: string; venue: string; year: string; note: string; }
interface Profile {
  name: string; role: string; institution: string; chair: string; company: string;
  companyRole: string; project: string; projectDescription: string; emailAcademic: string;
  emailCompany: string; orcid: string; github: string; siteUrl: string; publications: Publication[];
}

@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss'] })
export class AppComponent implements OnInit {
  profile: Profile | null = null;
  constructor(private http: HttpClient) {}
  ngOnInit(): void { this.http.get<Profile>('assets/profile-data.json').subscribe(data => this.profile = data); }
  scrollTo(target: string): void { document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }); }
}
