import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Fiches } from '../../models/fiches';
import { FICHES } from '../../services/fake-data/fiches';

@Component({
  selector: 'app-fiches',
  templateUrl: './fiches.component.html',
  styleUrls: ['./fiches.component.css']
})
export class FichesComponent {
  openRef: string;
  data: Fiches[] = FICHES;
  isList: boolean = true;
  displayedColumns: string[] = [
    'ref',
    'responsable',
    'finalisation_date',
    'theme',
    'fiche_vierge'
  ];
  dataSource = new MatTableDataSource<Fiches>(FICHES);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
