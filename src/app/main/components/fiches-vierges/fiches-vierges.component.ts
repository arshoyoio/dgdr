import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FicheVierge } from '../../models/fiches-vierges';
import { FICHES_VIERGES } from '../../services/fake-data/fiches-vierges';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fiches-vierges',
  templateUrl: './fiches-vierges.component.html',
  styleUrls: ['./fiches-vierges.component.css'],
})
export class FichesViergesComponent {
  openRef: string;
  data: FicheVierge[] = FICHES_VIERGES;
  isList: boolean = true;
  displayedColumns: string[] = [
    'ref',
    'frequence',
    'responsable',
    'theme',
    'risque',
  ];
  dataSource = new MatTableDataSource<FicheVierge>(FICHES_VIERGES);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private readonly dialog: MatDialog) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async createFiche() {
    await Swal.fire({
      text: 'Une instance a été ajoutée dans le planning de contrôle.',
      icon: 'success',
      showConfirmButton: true,
    });
  }
}
