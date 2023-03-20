import { Component } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {
    public name: string = 'Flash';
    public age: number = 27;

    // Getter
    public get capitalizeName(): string {
        return this.name.toUpperCase();
    }

    //Methods
    public getName(): string {
        return `${ this.name } - ${ this.age }`;
    }

    public changeName(): void {
        this.name = "Aquaman";
    }

    public changeAge(): void {
        this.age = 45;
    }
}