import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-industry-detail',
  templateUrl: './industry-detail.component.html',
  styleUrls: ['./industry-detail.component.scss']
})
export class IndustryDetailComponent implements OnInit {
  industryId: string | null = null;
item: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.industryId = this.route.snapshot.paramMap.get('id');
    // You can load industry data based on the `industryId` here
  }
}
