import { Component } from '@angular/core';
import { HttpService} from './http.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1>My Example </h1>
        <app-userdata></app-userdata>
        <hr>
      </div>
    </div>
  
</div>`,
 providers: [HttpService]
})
export class AppComponent {
  title = 'app works!';

//     <div class="container">
//     <div class="row">
//       <div class="col-md-6 col-md-offset-3">
//         <h1>Template Driven Form</h1>
//         <template-driven></template-driven>
//         <hr>
//       </div>
//     </div>
//     <div class="row">
//     <div class="col-md-6 col-md-offset-3">
//       <h1>Data Driven Form</h1>
//       <data-driven></data-driven>
//       <hr>
//     </div>
//   </div>
// </div>`
}
