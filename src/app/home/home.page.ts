import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '@ionic-native/calendar/ngx';
import { NavController, Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  calenders = [];

  constructor(private calender: Calendar,
    private plt: Platform,
    private router:Router,
    private navCtrl: NavController) {
    this.plt.ready().then(() => {
      this.calender.listCalendars().then(data => {
        this.calender = data
      });
    });
  }

  addEvent(cal) {
    let date = new Date();
    let options = { calendarId: cal.id, calendarName: cal.name, url: 'https://ionicacademy.com', firstReminderMinutes: 15 }

    this.calender.createEventInteractivelyWithOptions('My new Event', 'Münster', 'Special Notes', date, date, options).then(res => {
    }, err => {
      console.log('err: ', err);
    });

  }

  openCal(cal) {
    return this.router.navigateByUrl('CalDetailsPage')
    // this.navCtrl.push('CalDetailsPage', { name: cal.name });
  }

}
