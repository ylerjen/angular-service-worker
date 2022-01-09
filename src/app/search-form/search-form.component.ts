import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
    public id = 1;

    @Output()
    public search = new EventEmitter<number>();

    submit(evt: Event): void {
        evt.preventDefault();
        if (this.id > 0 && this.id < 100) {
            this.search.emit(this.id);
        } else {
            alert('id has to be a number between 0 and 100');
        }
    }
}
