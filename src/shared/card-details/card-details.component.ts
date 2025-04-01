import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
  standalone: false,
})
export class CardDetailsComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() description!: string;
  @Input() footer!: string;
}
