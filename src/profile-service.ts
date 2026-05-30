import { Injectable } from '@angular/core';
import { Profile } from './Model/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profile: Profile = {
    id: 1,
    name: 'John Doe',
    email: 'panasa@gmail.com',
    role: 'User',
    score: 85,
    isActive: true,
  };

  getProfile(): Profile {
    return this.profile;
  }

  updateProfile(profile: Profile): void {
    debugger;
    this.profile = { ...profile };
  }
}
