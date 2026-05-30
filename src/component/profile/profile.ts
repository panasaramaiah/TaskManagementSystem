import { Component } from '@angular/core';
import { ProfileService } from '../../profile-service';
import { Router } from '@angular/router';
import { Profile as ProfileModel } from '../../Model/profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile {
  profile: ProfileModel;

  constructor(private profileService: ProfileService, private router: Router) {
    this.profile = this.profileService.getProfile();
  }

  editProfile(id: number) {
    debugger;
    this.router.navigate(['/update-profile', id]);
  }
}
