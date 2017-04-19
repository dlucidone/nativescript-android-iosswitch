import {Observable} from 'data/observable';
import {AndroidIosSwitch} from 'nativescript-android-iosswitch';
import { Page } from 'ui/page';
export class HelloWorldModel extends Observable {

  public message: string;
  private npb: AndroidIosSwitch;
  constructor(mainPage: Page) {
    super();
    // this.npb = new NumberProgressBar();
    this.npb = <AndroidIosSwitch>mainPage.getViewById('sb');

  }
     public onTrue() {
        this.npb.toggleSwitch(true);
    }
  public onFalse() {
        this.npb.setChecked(false);
    }
}

