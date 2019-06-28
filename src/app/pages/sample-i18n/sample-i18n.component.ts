import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-sample-i18n',
  templateUrl: './sample-i18n.component.html',
  styleUrls: ['./sample-i18n.component.scss']
})
export class SampleI18nComponent implements OnInit {

  title = 'i18nDemo';

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'es', label: 'Espanol' }
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) { }
  ngOnInit() {}
}
