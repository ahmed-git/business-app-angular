import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { Observable } from 'rxjs';
import { AccountantService } from 'src/app/services/accountant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accountant-details',
  templateUrl: './accountant-details.component.html',
  styleUrls: ['./accountant-details.component.css']
})
export class AccountantDetailsComponent implements OnInit {

  accountant: any;
  form: FormGroup;
  submitted: boolean;
  companies: Observable<any>;

  constructor(
    private companyService: CompanyService, 
    private accountantService: AccountantService,
    private route: ActivatedRoute,
    private router: Router
    ) { 
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      active: new FormControl(),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      company: new FormControl('', [Validators.required])
    });
    this.submitted = false;

    
    this.companies = this.companyService.getAll();
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.accountantService.getAccountant(id).subscribe(
      accountant =>  {
        this.accountant = accountant;
        this.setForm();
      });
  }

  save() {
    if(this.form.valid) {
      this.accountant.firstName = this.form.controls.firstName.value;
      this.accountant.lastName = this.form.controls.lastName.value;
      this.accountant.active = this.form.controls.active.value;
      this.accountant.phone = this.form.controls.phone.value;
      this.accountant.email = this.form.controls.email.value;
      this.accountant.company = this.form.controls.company.value;
      
      this.accountantService.save(this.accountant).subscribe(() => this.close());
     
    }
    this.submitted = true;
  }

  cancel() {
    this.form.reset();
    this.close();
  }

  close() {
    this.router.navigate(['/accountants']);
  }

  private setForm() {
    this.form.controls.firstName.setValue(this.accountant.firstName);
    this.form.controls.lastName.setValue(this.accountant.lastName);
    this.form.controls.active.setValue(this.accountant.active);
    this.form.controls.phone.setValue(this.accountant.phone);
    this.form.controls.email.setValue(this.accountant.email);
    this.form.controls.company.setValue(this.accountant.company);
  }

  // Used in select options
  compareCompany(company1: any, company2: any) {
    return company1 && company2 ? company1.id === company2.id : company1 === company2;
  }
}
