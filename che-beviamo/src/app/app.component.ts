import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES } from 'src/shared/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    const browserLang = translate.getBrowserLang();
    const tempLang : any[] = [];
    for (const [key, value] of Object.entries(LANGUAGES)) {
      tempLang.push(value);
    }
    const languages = tempLang.map(x => x.code);
    translate.addLangs(languages);
    translate.setDefaultLang(LANGUAGES.IT.code);
    translate.use(browserLang?.match(/it|en/) ? browserLang : LANGUAGES.IT.code);
  }
}
