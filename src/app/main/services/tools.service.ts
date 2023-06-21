import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  nombreJoursEntreDeuxDates(date1: string, date2: string) {
    const dateDebut = new Date(date1).getTime();
    const dateFin = new Date(date2).getTime();
    const differenceMs = dateFin - dateDebut;
    const differenceJours = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  
    return differenceJours;
  }

  generateFlatColor() {
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }
  
}
