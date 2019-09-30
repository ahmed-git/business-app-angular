import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {

  form: FormGroup;
  manager: any;
  submitted: boolean;
  companies: Observable<any>;
  
  constructor(
    private companyService: CompanyService,
    private managerService: ManagerService,
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
    this.managerService.get(id).subscribe(
      manager =>  {
        this.manager = manager;
        this.setForm();
      });
  }

  save() {
    if(this.form.valid) {
      this.manager.firstName = this.form.controls.firstName.value;
      this.manager.lastName = this.form.controls.lastName.value;
      this.manager.active = this.form.controls.active.value;
      this.manager.phone = this.form.controls.phone.value;
      this.manager.email = this.form.controls.email.value;
      this.manager.company = this.form.controls.company.value;
      
      this.managerService.save(this.manager).subscribe(() => this.close());
     
    }
    this.submitted = true;
  }

  cancel() {
    this.form.reset();
    this.close();
  }

  close() {
    this.router.navigate(['/managers']);
  }

  private setForm() {
    this.form.controls.firstName.setValue(this.manager.firstName);
    this.form.controls.lastName.setValue(this.manager.lastName);
    this.form.controls.active.setValue(this.manager.active);
    this.form.controls.phone.setValue(this.manager.phone);
    this.form.controls.email.setValue(this.manager.email);
    this.form.controls.company.setValue(this.manager.company);
  }

  // Used in select options
  compareCompany(company1: any, company2: any) {
    return company1 && company2 ? company1.id === company2.id : company1 === company2;
  }

}
