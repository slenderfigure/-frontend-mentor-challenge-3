import { Component, OnInit } from '@angular/core';
import { EASYBANK_BENEFITS } from './config/easybank-benefits.config';
import { LATEST_ARTICLES } from './config/latest-articles.config';

@Component({
  selector: 'bank-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  benefits = EASYBANK_BENEFITS;
  articles = LATEST_ARTICLES;

  constructor() { }

  ngOnInit(): void {
  }

}
