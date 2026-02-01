import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly isDarkMode = signal(false);

  protected readonly navLinks = signal([
    { label: 'Home', path: '/', icon: 'heroHome' },
    { label: 'Projects', path: '/projects', icon: 'heroCodeBracket' },
    { label: 'Experience', path: '/experience', icon: 'heroBriefcase' },
    { label: 'About', path: '/about', icon: 'heroUser' },
  ]);


  protected toggleTheme(): void {
    this.isDarkMode.update((value) => !value);
    document.documentElement.setAttribute('data-theme', this.isDarkMode() ? 'dark' : 'light');
  }
}
