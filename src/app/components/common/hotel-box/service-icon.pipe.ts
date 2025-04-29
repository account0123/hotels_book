import { Pipe, PipeTransform } from "@angular/core";

// My first pipe ;D

@Pipe({
    name: 'icon'
})
export class ServiceIconPipe implements PipeTransform {
    transform(id: number | string) {
        id = parseInt(id.toString());
        switch (id) {
            case 1:
                return 'ri-wifi-line';
            case 2:
                return 'ri-roadster-line';
            case 3:
                return 'ri-wheelchair-line';
            case 4:
                return 'ri-restaurant-2-line';
            case 5:
                return 'ri-riding-line';
            default:
                return 'ri-check-line';
        }
    }

}