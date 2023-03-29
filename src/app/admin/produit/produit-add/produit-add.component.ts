import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produit-add',
  templateUrl: './produit-add.component.html',
  styleUrls: ['./produit-add.component.css']
})
export class ProduitAddComponent implements OnInit {
  productForm!: FormGroup;
  selectedFile: File = new File([], '');
  showAlert = false;
  alertType = '';
  alertMessage = '';

  constructor(private http: HttpClient,
              private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      nom: '',
      description: '',
      prix: '',
      clientId: 1,
      file: ''
    });
  }

  onFileSelected(event: Event) {
    const element = event.target as HTMLInputElement;
    if (element && element.files && element.files.length > 0) {
      this.selectedFile = element.files[0];
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('nom', this.productForm.value.nom);
    formData.append('description', this.productForm.value.description);
    formData.append('prix', this.productForm.value.prix);
    formData.append('clientId', this.productForm.value.clientId);
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:8181/api/produits/image', formData)
      .subscribe(response => {
        console.log(response);
        this.showAlert = true;
        this.alertType = 'success';
        this.alertMessage = 'Produit créé avec succès';
      }, error => {
        console.error(error);
        this.showAlert = true;
        this.alertType = 'danger';
        this.alertMessage = 'Une erreur est survenue lors de la création du produit';
      });
  }
}
