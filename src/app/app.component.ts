import { Component, OnInit } from '@angular/core';
import { MyWorker, MyWorkerType } from './shared/worker.model';
import { HttpWorkerService } from './shared/services/http-worker.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Список сотрудников';
  workers: MyWorker[];
  myWorkerType = MyWorkerType;
  searchStr='';

  constructor(private httpWorkerService: HttpWorkerService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    try {
      this.workers = await this.httpWorkerService.getWorkers();
    } catch (err) {
      console.log(err);
    }
  }

  getByType(type: number) {
    if (this.workers) {
      return this.workers.filter(worker => worker.type === type);
    }
    else return [];
  }

  async onDeleteById(id: number) {
    try {
      await this.httpWorkerService.deleteWorker(id);
    } catch (err) {
      console.log(err);
    } finally {
      this.getData();
    }
  }

  async onEditById(worker: MyWorker) {
    try {
      await this.httpWorkerService.editWorker(worker);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }


  async onAddWorker(worker: MyWorker) {
    let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
    worker.id = id;
    try {
      await this.httpWorkerService.postWorker(worker);
    } catch (err) {
      console.error(err);
    } finally {
      this.getData();
    }
  }

}
