import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nouveau-fiche-vierge',
  templateUrl: './nouveau-fiche-vierge.component.html',
  styleUrls: ['./nouveau-fiche-vierge.component.css'],
})
export class NouveauFicheViergeComponent {
  constructor(private router: Router) {}

  uploadFile() {
    $('#file-input').trigger('click');
  }

  cancel() {
    this.router.navigateByUrl('/fiches-vierges');
  }

  async add() {
    await Swal.fire({
      text: 'La fiche a été ajoutée avec succès.',
      icon: 'success',
      showConfirmButton: true,
    });

    this.cancel();
  }
}
