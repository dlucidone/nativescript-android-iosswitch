import * as observable from 'data/observable';
import * as pages from 'ui/page';
import {HelloWorldModel} from './main-view-model';
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { isAndroid, device } from "platform";
import { Color } from "color";
import { android } from "application";
// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel(page);

}
 