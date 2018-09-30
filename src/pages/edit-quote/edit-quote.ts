import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { QuotesProvider } from '../../providers/quotes/quotes';

/**
 * Generated class for the EditQuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-quote',
  templateUrl: 'edit-quote.html',
})
export class EditQuotePage {
  quote;
  content;
  auteur;
  id;
  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public navParams: NavParams, private quoteProvider: QuotesProvider) {
    this.quote = this.navParams.get("quote");
    console.log(this.quote);
    this.content = this.quote.quote;
    this.auteur = this.quote.auteur;
    this.id = this.quote.id;
  }
  onUpdateQuote(){
    this.quoteProvider.putQuote(this.id,this.content,this.auteur).subscribe(data => {
      console.log(data);
      this.navCtrl.setRoot("TabsPage");
      let toast = this.toastCtrl.create({
        message:"Quote updated successfully !",
        duration:1500,
        position:"bottom"
      });
      toast.present();
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditQuotePage');
  }

}
