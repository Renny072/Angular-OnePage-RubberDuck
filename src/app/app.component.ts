import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [HttpClientModule, CommonModule]
})
export class AppComponent {
  title = 'RentaroKinoshita';
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://raw.githubusercontent.com/argallel/INFO3067/main/RubberDucks').subscribe(data => {
        this.data = data;
    })
}
}
