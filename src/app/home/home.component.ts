import { QuoteService, PdfInfo } from './quote.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private serv: QuoteService) {}
  onFileUpload(filesArr: any, info: PdfInfo) {
    const files = filesArr[0];
    const fileByteArray: any = [];
    const reader = new FileReader();
    reader.onload = processFile(files);
    reader.readAsArrayBuffer(files);
    reader.addEventListener('load', (loadEvent) => {
      const buffer = loadEvent.target.result;
      this.serv.generateEnhacedPDF(info, buffer).then((d) => console.log(d));
    });
    function processFile(file?: any) {
      return (e: any) => {
        const theBytes = e.target.result;
        fileByteArray.push(theBytes);
      };
    }
  }

  ngOnInit() {
    this.isLoading = true;
  }
}
