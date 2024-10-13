import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [],
	template: `
		<!-- This is as well, SRP as this module is responsible only for rendering the footer -->
		<footer
			style="
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: #f8f9fa;
		padding: 1rem;
		margin-top: 1rem;
		border-top: 1px solid #e9ecef;
	">
			<p>&copy; 2020 - All Rights Reserved</p>
			<p>
				Developed by
				<a href="https://froilan.vercel.app"> Froilan (uaena) </a>
			</p>
		</footer>
	`,
	styleUrl: './footer.component.css',
})
export class FooterComponent {}
