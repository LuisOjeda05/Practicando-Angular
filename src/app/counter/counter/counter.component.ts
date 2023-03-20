import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h1> {{ title }} </h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>

        <button (click)="acumulate( base );">Add + {{ base }} </button>

        <span> {{ number }} </span>

        <button (click)="acumulate( -base );">Subtract - {{ base }} </button>
    `
})
export class CounterComponent {
    public title: string = 'Counter App';
    public number: number = 0;
    public base: number = 5;

    acumulate(value: number): void {
        this.number += value;
    }
}