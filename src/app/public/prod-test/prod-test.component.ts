import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-prod-test',
  templateUrl: './prod-test.component.html',
  styleUrls: ['./prod-test.component.css']
})
export class ProdTestComponent implements OnInit {
  productForm!: FormGroup;
  selectedFile: File = new File([], '');

  constructor(private http: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      nom: '',
      description: '',
      prix: '',
      clientId: '',
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
      .subscribe(response => console.log(response));
  }
}

