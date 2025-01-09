import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Demo_CRUD';

  // Temporary user object for input
  temp = { firstName: '', lastName: '', address: '' };

  searchText = ''; 
  arr: any[] = [
    { firstName: 'Maithil', lastName: 'Sanagni', address: 'Rajkot' },   
    { firstName: 'Ramesh', lastName: 'Kumar', address: 'Mumbai' },
    { firstName: 'Jayesh', lastName: 'Patel', address: 'Surat' },
    { firstName: 'Kishor', lastName: 'Joshi', address: 'Ahmedabad' },
    { firstName: 'Manoj', lastName: 'Sharma', address: 'Delhi' },
    { firstName: 'Dinesh', lastName: 'Mehta', address: 'Bangalore' },
    { firstName: 'Vijay', lastName: 'Singh', address: 'Jaipur' },
  ];

  isEditable = -1;
  changevalue = 'Add';

  adddata() {
    if (this.isEditable === -1) {
      if (
        this.temp.firstName.trim() &&
        this.temp.lastName.trim() &&
        this.temp.address.trim()
      ) {
        this.arr.push({ ...this.temp });
        this.temp = { firstName: '', lastName: '', address: '' };
      }
    } else {
      this.changevalue = 'Add';
      this.arr[this.isEditable] = { ...this.temp };
      this.temp = { firstName: '', lastName: '', address: '' };
      this.isEditable = -1;
    }
  }

  deleteData(index: any) {
    this.arr.splice(index, 1);
  }

  EditData(index: any) {
    this.changevalue = 'Update';
    this.temp = { ...this.arr[index] };
    this.isEditable = index;
  }

  // Filter user data
  filteredList() {
    return this.arr.filter((user) =>
      Object.values(user)
        .join(' ')
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    );
  }
}

























// import { NgFor } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,FormsModule,NgFor],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'Demo_CRUD';

//   temp= ""
//   searchText = ''; 
//   arr:any[]=["Maithil","Ramesh","jayesh","kishor","Manoj","Dinesh","vijay"]
//   isEditable = -1;
//   changevalue ="Add"
  
//   adddata(){
//     if(this.isEditable==-1){
//       if(this.temp.length!=0){
//         this.arr.push(this.temp)
//        this.temp=""
//      }
//      else{
//      }
//     }
//     else{
//        this.changevalue="Add"
//        this.arr[this.isEditable] = this.temp.trim()
//        this.temp=""
//        this.isEditable=-1
//     } 
//   }

//   deleteData(index:any) {
//     this.arr.splice(index, 1); 
//   }

//   EditData(index: any) {
//     this.changevalue="Update"
//     this.temp=this.arr[index]
//     this.isEditable=index;
//   }

//   //serch user data
//   filteredList() {
//     return this.arr.filter((temp) =>
//       temp.toLowerCase().includes(this.searchText.toLowerCase())
//     );
//   }
// }
