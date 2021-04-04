import { animate, animateChild, group, trigger, transition, style, query } from '@angular/animations';
export const routeTransitionAnimations = trigger('triggerName', [
	transition('home => settings, settings => login, home => login', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: '3rem',
				right: 0,
				width: '100%',
				transformOrigin: 'left center',
				transform: 'translateX(0)',
			}),
		]),
		query(':enter', [style({ transform: 'translateX(100%)', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))]),
			query(':enter', [animate('1s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))]),
		]),
		query(':enter', animateChild()),
	]),
	transition('login => settings, settings => home, login => home', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: '3rem',
				left: 0,
				width: '100%',
				transformOrigin: 'right center',
				transform: 'translateX(0)',
			}),
		]),
		query(':enter', [style({ transform: 'translateX(-100%)', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))]),
			query(':enter', [animate('1s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))]),
		]),
		query(':enter', animateChild()),
	]),
]);
