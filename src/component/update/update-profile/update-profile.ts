import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../../../profile-service';
import { Profile } from '../../../Model/profile';

@Component({
  selector: 'app-update-profile',
  imports: [FormsModule],
  templateUrl: './update-profile.html',
  styleUrls: ['./update-profile.css'],
})
export class UpdateProfile {
  profile: Profile;

  constructor(private profileService: ProfileService, private router: Router) {
    debugger;
    console.log("calling from profile service");
    this.profile = { ...this.profileService.getProfile() };
  }

  onSubmit(): void {
    debugger;
    this.profileService.updateProfile(this.profile);
    this.router.navigate(['/profile']);
  }
}
