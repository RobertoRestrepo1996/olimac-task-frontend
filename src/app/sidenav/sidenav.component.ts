import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router
    ) { }

    logOut() {
      Swal.fire({
        title: 'Are you sure?',
        text: "are you wan't to log out?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Log out!'
      }).then((result) => {
        if (result.value) {
          localStorage.removeItem('Authorization');
          localStorage.removeItem('id');
          localStorage.removeItem('user');
          this.router.navigate(['']);
        }
      })
  
    }

























  public menu = [
    {
      title: 'User',
      icon: '',
      show: false,
      child: [

        {
          title: 'All users',
          icon: '',
          link: 'user/user-list',
          state: true
        },
        {
          title: 'Create user',
          icon: '',
          link: 'user/create-user',
          state: true
        },

      ]
    }, {
      title: 'Task',
      icon: '',
      show: false,
      child: [

        {
          title: 'All task',
          icon: '',
          link: 'task/task-list',
          state: true
        },
        {
          title: 'Create task',
          icon: '',
          link: 'task/create-task',
          state: true
        },
        {
          title: 'Find by state',
          icon: '',
          link: 'task/find-task',
          state: true
        },
        {
          title: 'Archive task',
          icon: '',
          link: 'task/archive-task',
          state: true
        }

      ]
    }, {

      title: 'State of task',
      icon: '',
      show: false,
      child: [
        {
          title: 'my tasks',
          icon: '',
          link: 'task/mytasks',
          state: true
        }
      ]

    }
  ]
}
