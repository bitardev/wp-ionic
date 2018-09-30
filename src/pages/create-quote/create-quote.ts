import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuotesProvider } from '../../providers/quotes/quotes';

/**
 * Generated class for the CreateQuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-quote',
  templateUrl: 'create-quote.html',
})
export class CreateQuotePage {
  content;
  auteur;
  constructor(public navCtrl: NavController, public navParams: NavParams, private quoteProvider: QuotesProvider) {
    
  }

  onAddQuote() {
    this.quoteProvider.postQuote(this.content,this.auteur).subscribe(data => {
      console.log(data);
      this.navCtrl.setRoot("TabsPage");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateQuotePage');
  }

}
