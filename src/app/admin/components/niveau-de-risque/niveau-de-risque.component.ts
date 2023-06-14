import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RISQUES } from '../../constants/risque';

@Component({
  selector: 'app-niveau-de-risque',
  templateUrl: './niveau-de-risque.component.html',
  styleUrls: ['./niveau-de-risque.component.css']
})
export class NiveauDeRisqueComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<any>(RISQUES);
  displayedColumns: string[] = [
    'label',
    'couleur'
  ];
  isList: boolean = true;
  data: any[] = RISQUES;
  openRef: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
