import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdService } from '../prod.service';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  productForm!: FormGroup;
  email!: string;
  products: any;
  constructor(
    private fb: FormBuilder,
    private productService: ProdService, private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      nom: ['', Validators.required],
      description: [''],
      prix: [0, Validators.min(0)],
      image: [''],
      email: ['', Validators.required] // changed to a regular text input
    });
  }

  onSubmit() {
    // read the value of clientId from the form
    this.email = this.productForm.value.email;

    this.productService.createbyEmailProduct(this.productForm.value, this.email)
      .subscribe(
        (data) => {
          console.log(data);
          alert('Product created successfully');
        },
        (error) => {
          console.log(error);
          alert('Product creation failed');
        }
      );
  }

  getImageUrl(image: string): any {
    return this.sanitizer.bypassSecurityTrustUrl(`data:image/png;base64, ${image}`);
  }
}
