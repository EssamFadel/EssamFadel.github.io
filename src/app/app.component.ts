import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

interface Publication { title: string; venue: string; year: string; note: string; }
interface Experience { organisation: string; role: string; location: string; period: string; summary: string; url: string; }
interface Project { name: string; context: string; period: string; summary: string; url: string; }
interface Education { award: string; institution: string; location: string; year: string; }
interface Profile {
  name: string; role: string; institution: string; chair: string; company: string;
  companyRole: string; emailAcademic: string;
  emailCompany: string; orcid: string; researchGate: string; github: string; siteUrl: string; publications: Publication[];
  experience: Experience[]; projects: Project[]; education: Education[]; expertise: string[];
}

@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss'] })
export class AppComponent implements OnInit, OnDestroy {
  profile: Profile | null = null;
  private sectionObserver: IntersectionObserver | null = null;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<Profile>('assets/profile-data.json').subscribe(data => {
      this.profile = data;
      requestAnimationFrame(() => this.observeSections());
    });
  }
  ngOnDestroy(): void { this.sectionObserver?.disconnect(); }
  scrollTo(target: string): void { document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }); }

  private observeSections(): void {
    const sections = document.querySelectorAll<HTMLElement>('.section-reveal');
    if (!('IntersectionObserver' in window)) {
      sections.forEach(section => section.classList.add('section-visible'));
      return;
    }

    this.sectionObserver?.disconnect();
    this.sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          this.sectionObserver?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    sections.forEach(section => this.sectionObserver?.observe(section));
  }
}
