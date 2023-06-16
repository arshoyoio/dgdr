import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PRIVILEGES } from '~/main/services/fake-data/privileges';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-privileges',
  templateUrl: './add-privileges.component.html',
  styleUrls: ['./add-privileges.component.css'],
})
export class AddPrivilegesComponent {
  constructor(private dialogRef: MatDialogRef<AddPrivilegesComponent>) {}

  async close(success: boolean = false) {
    if (success) {
      await Swal.fire({
        icon: 'success',
        text: 'Succès',
      });
    }

    this.dialogRef.close();
  }
  privileges: any = PRIVILEGES;
}
