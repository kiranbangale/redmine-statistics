import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAZzmGaLAZ2PdRkl_O-Bom6n86My-WH-_I",
      authDomain: "redmine-statistics.firebaseapp.com"
    });
  }
}
