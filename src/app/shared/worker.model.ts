export interface MyWorker {
    name: string;
    surname: string;
    type: number;
    phone?: string;
    id?: number;
}

 export enum MyWorkerType {
     programmer,
     designer,
     copywriter,
     manager,
 }

 export let MyWorkersDatabase: MyWorker[] = [
    // { id: 1, name: 'Иван', surname: 'Иванов', type: 0, phone:'-' },
    // { id: 2, name: 'Петр', surname: 'Петров', type: 1, phone:'-' },
    // { id: 3, name: 'Сидор', surname: 'Сидоров', type: 2, phone:'-' },
    // { id: 4, name: 'Василий', surname: 'Васильев', type: 3, phone:'-' },
  ];