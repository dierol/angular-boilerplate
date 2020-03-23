import { Component, OnInit } from '@angular/core';
import { Mock } from '../mock';
import { MocksService } from '../mocks.service';
import { LocalStorageService } from 'ngx-localstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
      private mocksService: MocksService,
      private storageService: LocalStorageService
  ) {};

  isLoading = false;
  mocks = [];
  name = '';

  ngOnInit(): void {
  };

  getMocks() {
    this.isLoading = true;
    setTimeout(() => {
      this.mocksService.getMocks().subscribe(response => {
        this.mocks = response;
        this.isLoading = false;
      });
    }, 1000);
  };

  store() {
      this.storageService.asPromisable().count()
        .then(count =>
            this.storageService.set((count+1)+'', this.name)
        )
        .catch(error => console.error(error));
  };

  clear() {
      this.storageService.asPromisable().clear()
        .then(result => {
            if (result) {
                alert('all clear! go! go!')
            }
        })
        .catch(error => console.error(error));
  }
}
