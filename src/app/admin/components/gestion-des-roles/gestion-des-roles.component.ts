import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, } from '@angular/material/sort';
import { MatTableDataSource,  } from '@angular/material/table';
import Swal from 'sweetalert2';
import { AddPrivilegesComponent } from '../../directives/add-privileges/add-privileges.component';
import { ROLES } from '~/main/services/fake-data/roles';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-gestion-des-roles',
  templateUrl: './gestion-des-roles.component.html',
  styleUrls: ['./gestion-des-roles.component.css'],
})
export class GestionDesRolesComponent implements AfterViewInit {
  displayedColumns: string[] = ['label', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private readonly dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(ROLES);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async rename(val: string) {
    const { value: email } = await Swal.fire({
      title: 'Renommer un rôle',
      input: 'text',
      inputLabel: 'Nom du rôle',
      inputValue: val,
      inputPlaceholder: 'Label du rôle',
      confirmButtonText: 'Enregistrer',
      showLoaderOnConfirm: true
    })

    await Swal.fire({
      icon: 'success',
      text: 'Succès'
    })
  }

  addPrivileges() {
    this.dialog.open(AddPrivilegesComponent)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}