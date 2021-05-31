import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UploadService } from './upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private upload: UploadService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  title = 'frontend';
  errorRes = '';
  successRes = '';
  fileDetails: any;

  // selectedFile: File = <File>

  ngOnInit(): void {
    this.upload.getFiles().subscribe(
      (response: any) => {
        this.fileDetails = response;

        // var thumb = new Buffer(response[0].image.data).toString('base64');
        // console.log(thumb);
        // this.fileDetails.data = response;

        // console.log(this.fileDetails[0]['image'].data);
      },
      (error) => {}
    );
  }

  getBase64(binary: any) {
    return new Buffer(binary).toString('base64');
  }

  onFileSelected(event: any) {
    let selectedFile = <File>event.target.files[0];
    var formData = new FormData();
    formData.append('avatar', selectedFile);
    this.upload.uploadFile(formData).subscribe((response) => {
      let currentUrl = this.router.url;
      // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      // this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([currentUrl]);
    });
  }

  onFormSubmit(event: any) {
    // console.log(event.target);
    // let selectedFile = event.target.file;
    // console.log(selectedFile);
  }
}
