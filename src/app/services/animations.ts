import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('layoutAll => layoutDocument', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'relative',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ right: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ right: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ right: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('layoutDocument => layoutRepair', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'relative',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ right: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ right: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ right: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('layoutRepair => layoutSales', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'relative',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ right: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ right: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ right: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('layoutSales => layoutRepair', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('layoutRepair => layoutDocument', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('layoutDocument => layoutAll', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),

    transition('* => layoutSales', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'relative',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ right: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ right: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ right: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* => layoutRepair', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'relative',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ right: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ right: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ right: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* => layoutDocument', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> layout', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);
