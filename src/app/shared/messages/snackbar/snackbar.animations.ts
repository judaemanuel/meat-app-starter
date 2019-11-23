import { trigger, state, style, transition, animate } from '@angular/animations';

export const SnackbarAnimations: any = {
    snackVisibility: trigger('snack-visibility', [
        state('hidden', style({
            opacity: 0,
            bottom: '0px'
        })),
        state('visible', style({
            opacity: 1,
            bottom: '30px'
        })),
        transition('hidden => visible', animate('100ms 0s ease-in')),
        transition('visible => hidden', animate('1000ms 0s ease-out'))
    ])
};
