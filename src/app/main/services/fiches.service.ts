import { Injectable } from '@angular/core';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root',
})
export class FichesService {
  constructor(private readonly toolService: ToolsService) {}



  genetateColorByRole(role: string) {
    switch (role) {
      case 'Admin':
        return '#d35400';
      case 'RCCI':
        return '#f1c40f';
      case 'Manager':
        return '#16a085';
      case 'Junior':
        return '#8e44ad';
      case 'Chef de mission':
        return '#2c3e50';
      case 'Contributeur':
        return '#1abc9c';
      default:
        return this.toolService.generateFlatColor();
    }
  }
}
