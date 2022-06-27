import {
    state,
    style,
    animate,
    transition,
    group
} from '@angular/animations';

export const flyInOut = [
    state('in', style({
        transform: 'translateX(0)', opacity: 1
    })),
    transition('void => *', [
        style({ transform: 'translateY(200px)', opacity: 0 }),
        group([
            animate('0.5s ease', style({
                transform: 'translateY(0)',
            })),
            animate('0.3s ease', style({
                opacity: 1
            }))
        ])
    ]),
    transition('* => void', [
        group([
            animate('0.5s ease', style({
                transform: 'translateY(50px)',
                height: 10
            })),
            animate('0.1s ease', style({
                opacity: 0
            }))
        ])
    ])
];