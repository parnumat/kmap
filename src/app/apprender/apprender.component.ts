import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-apprender',
  templateUrl: './apprender.component.html',
  styleUrls: ['./apprender.component.css']
})
export class ApprenderComponent implements OnInit {
   url = '';
  // url: string;
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    this.url = this.route.snapshot.paramMap.get('path') + `?token=${this.auth.getToken()}`;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  onClose() {
    this.router.navigate(['/layout']);
  }

}
