import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { QuotesProvider } from '../../providers/quotes/quotes';

/**
 * Generated class for the QuotesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes-detail',
  templateUrl: 'quotes-detail.html',
})
export class QuotesDetailPage {
  quote;
  constructor(public navCtrl: NavController,private toastCtrl: ToastController, public navParams: NavParams, private quoteProvider: QuotesProvider) {
    this.quote = this.navParams.get("quote");
    console.log(this.quote);
  }

  onGoToEditQuote() {
    this.navCtrl.push("EditQuotePage",{
      quote:this.quote
    });
  }
  onDelete(id) {
    this.quoteProvider.deleteQuote(id).subscribe(data => {
      console.log(data);
      let toast = this.toastCtrl.create({
        message:'Quote delete successfully !',
        duration:1500,
        position:'bottom'
      });
      toast.present();
      toast.onDidDismiss(()=>{
        this.navCtrl.setRoot("TabsPage");
      });
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesDetailPage');
  }

}
