import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { LoggingService } from '../../logging.service';
import { AlertLoggingService } from '../../alert-logging.service';
import { ConsoleLoggingService } from '../../console-logging.service';
import { EmailNotificationService } from '../../email-notification.service';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [RouterLink],
	template: `
		<!-- This demonstrates the SRP (Single Responsibility Principle) as this component only cares about the rendering and the logic of rendering the Navigation Bar as well as redirection -->
		<nav
			style="
		display: flex;
		justify-content: center;
		flex-direction: row;
		width: 100%;
	">
			<ul
				style="
			display: flex;
			justify-content: center;
			flex-direction: row;
			gap: 20px;
			list-style: none;
		">
				<li><a routerLink="#">Home</a></li>
				<li><a routerLink="#">About</a></li>
				<li><a routerLink="#">Contact</a></li>
			</ul>
		</nav>
	`,
	styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
	constructor(
		private loggingService: LoggingService,
		private alertLoggingService: AlertLoggingService,
		private consoleLoggingService: ConsoleLoggingService,
		private emailNotificationService: EmailNotificationService,
	) {}

	ngOnInit(): void {
		this.loggingService.log('NavbarComponent initialized');
		this.alertLoggingService.logAlert('NavbarComponent initialized');
		this.consoleLoggingService.logConsole('NavbarComponent initialized');
		this.emailNotificationService.send('Some kind of message');
	}
}
