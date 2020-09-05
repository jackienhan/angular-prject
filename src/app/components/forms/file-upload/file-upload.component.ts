import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, ValidatorFn, Validators} from "@angular/forms";
import {FileUploadService} from "../../../services/file-upload.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  percentCompleted: number = 0;
  isMultipleUploaded = false;
  isSingleUploaded = false;
  urlAfterUpload = '';
  percentUploaded = [0];
  acceptedExtensions = "jpg, jpeg, bmp, png, wav, mp3, mp4, csv";

  constructor(private formBuilder: FormBuilder, private fuService: FileUploadService) {

  }

  ngOnInit() {
  }

  upload(files: File[]){
    const file = files[0];
    console.log(file.name);
    this.isSingleUploaded = false;
    this.urlAfterUpload = '';
    const formData = new FormData();
    formData.append("file", file);

    this.fuService.uploadWithProgress(formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.percentCompleted = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.isSingleUploaded = true;
        this.urlAfterUpload = event.body.link;
      }
    });
  }
  uploadForm = this.formBuilder.group({
    title: ['', Validators.required],
    filesToUpload: this.formBuilder.array([
      this.formBuilder.control('', [Validators.required, this.fileExtensionValidator(this.acceptedExtensions)])
    ])
  });

  get title(): FormControl {
    return this.uploadForm.get('title') as FormControl;
  }
  get filesToUpload(): FormArray {
    return this.uploadForm.get('filesToUpload') as FormArray;
  }
  addMoreFiles() {
    this.filesToUpload.push(this.formBuilder.control('',
      [Validators.required, this.fileExtensionValidator(this.acceptedExtensions)]));
    this.percentUploaded.push(0);
  }
  deleteFile(index: number) {
    this.filesToUpload.removeAt(index);
    this.percentUploaded.splice(index, 1);
  }
  onFormSubmit() {
    console.log('---Uploading multiple file---');
    this.isMultipleUploaded = false;
    for (let i = 0; i < this.filesToUpload.length && this.uploadForm.valid; i++) {
      const selectedFileList = (<HTMLInputElement>document.getElementById('file' + i)).files;
      const file = selectedFileList.item(0);
      this.uploadFile(file, i);
    }
    console.log(this.title.value);
  }
  uploadFile(file: File, fileNum: number) {
    const formData = new FormData();
    formData.append("file", file);
    this.fuService.uploadWithProgress(formData)
      .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.percentUploaded[fileNum] = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            console.log(file.name + ', Size: ' + file.size + ', Uploaded URL: ' + event.body.link);
            this.fileUploadSuccess();
          }
        },
        err => console.log(err)
      );
  }

  fileUploadSuccess() {
    let flag = true;
    this.percentUploaded.forEach(n => {
      if (n !== 100) {
        flag = false;
      }
    });
    if (flag) {
      this.isMultipleUploaded = true;
    }
  }
  formReset() {
    this.uploadForm.reset();
    this.isMultipleUploaded = false;
    for (let i = 0; i < this.percentUploaded.length; i++) {
      this.percentUploaded[i] = 0;
    }
  }
  fileExtensionValidator(validExt: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let forbidden = true;
      if (control.value) {
        const fileExt = control.value.split('.').pop();
        validExt.split(',').forEach(ext => {
          if (ext.trim() == fileExt) {
            forbidden = false;
          }
        });
      }
      return forbidden ? { 'inValidExt': true } : null;
    };
  }
}
