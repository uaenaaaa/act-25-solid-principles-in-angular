## S - Single Responsibility Principle:

What does this mean? According to [GeeksForGeeks](https://www.geeksforgeeks.org/single-responsibility-in-solid-design-principle/):

Two fundamental ideas are outlined in the Single Responsibility principle.

1. There should only be one cause for a modification in your class or method.
    
2. There should be just one thing that has to be done for your class or method.
    
    Now let’s look at the examples to see it in action. Here, we have two separate of components named, footer and navigation bar each of which has single responsibility—rendering the footer area and navigation bar of the page, respectively.
    
    So essentially, a method of a class should have one and only one responsibility it shouldn’t be bombarded with multiple responsibilities, imagine this Python class scenario. Here we can see that the class `UserManager` is bombarded with a lot of responsibility—adding users, authenticating user, and generating user reports.
    
    ```python
    class UserManager:
        def __init__(self):
            self.users = []
    
        def add_user(self, username, password):
            # Add user to the system
            self.users.append({'username': username, 'password': password})
    
        def authenticate_user(self, username, password):
            # Check if user exists and password matches
            for user in self.users:
                if user['username'] == username and user['password'] == password:
                    return True
            return False
    
        def generate_user_report(self):
            # Generate a report of all users in the system
            report = "User Report\n"
            report += "------------\n"
            for user in self.users:
                report += f"Username: {user['username']}\n"
            return report
    ```
    
    ```typescript
    // shared/navbar.component.ts
    import { Component } from '@angular/core';
    import { RouterLink } from '@angular/router';
    
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
    export class NavbarComponent {}
    ```
    
    ```typescript
    // shared/footer.component.ts
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
    ```
    
    This also, as well, adheres to the DRY Principle—Don’t Repeat Yourself Principle—as these components can be reused anywhere in the app, essentially creating a reusable component declared once, use it anywhere.
    

---

## Open/Closed Principle (OCP):

The second one in the group is OCP, according to [GeeksOfGeeks](https://www.geeksforgeeks.org/open-closed-design-principle-in-java/?ref=header_outind):

Software entities (classes, modules, and functions) should be closed to alterations and open to extensions, according to Robert C. Martin's principle. This means that a class must have enough flexibility to adapt to changes in business requirements without causing the code to break. The dependant classes don't need to alter as a result. This reduces the amount of testing required and limits our attention to fresh code modifications.

This means the class must be able to meet dynamic business requirements without causing breaking changes to the current implementation of the logic or code. Take this for example:

```python
class PaymentProcessor:
    """ This class handles different payment types in one method. """
    
    def process_payment(self, payment_type, amount):
        if payment_type == "credit_card":
            self.process_credit_card_payment(amount)
        elif payment_type == "paypal":
            self.process_paypal_payment(amount)
        elif payment_type == "bank_transfer":
            self.process_bank_transfer_payment(amount)
        else:
            raise ValueError("Invalid payment type")

    def process_credit_card_payment(self, amount):
        print(f"Processing credit card payment of {amount}")

    def process_paypal_payment(self, amount):
        print(f"Processing PayPal payment of {amount}")
    
    def process_bank_transfer_payment(self, amount):
        print(f"Processing bank transfer of {amount}")

# Usage:
payment_processor = PaymentProcessor()
payment_processor.process_payment("credit_card", 100)
payment_processor.process_payment("paypal", 200)
# We can see that every feature is inside the PaymentProcessor is has several features
# Adding new payment method will certainly modify the existing logic of other class' methods
# Which, in turn, might introduce inadvertently bugs and unintended side effects
```

```typescript
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';

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
	constructor() {}

	ngOnInit(): void {
        // Here we're able to extend our class and implement our own here from the
        // ngOnInit() abstracted function without changing other parts of the code
		console.log('NavbarComponent initialized');
	}
}
```

---

## Liskov Substitution Principle (LSP):

According to GeeksForGeeks: Barbara Liskov first proposed the principle in 1987. Derived or child classes have to be interchangeable with their base or parent classes. According to this concept, a class that is a child of a parent class should behave consistently when used in place of its parent class.

A rectangle with four corners is a well-known illustration of this idea. The width and height of a rectangle can both be any value. A rectangle with equal width and height is called a square. Therefore, we may argue that the square class's properties can be extended from those of the rectangle class.

Take this for example a bad code that demonstrate bad code for LSP:

```python
class Bird:
    def fly(self):
        return "Flying high!"

class Sparrow(Bird):
    def fly(self):
        return "Sparrow is flying!"

class Penguin(Bird):
    def fly(self):
        raise NotImplementedError("Penguins can't fly!")

def make_bird_fly(bird: Bird):
    return bird.fly()

# Using the classes
sparrow = Sparrow()
penguin = Penguin()

print(make_bird_fly(sparrow))  # Output: Sparrow is flying!

try:
    print(make_bird_fly(penguin))  # This will raise an error
except NotImplementedError as e:
    print(e)  # Output: Penguins can't fly!

# A better approach:
from abc import ABC, abstractmethod

# The Bird class now only handles sounds,
# while the FlyingBird class handles flying capabilities.
class Bird(ABC):
    @abstractmethod
    def make_sound(self):
        pass

class FlyingBird(Bird):
    @abstractmethod
    def fly(self):
        pass

class Sparrow(FlyingBird):
    def fly(self):
        return "Sparrow is flying!"

    def make_sound(self):
        return "Chirp!"

# Now Sparrow correctly implements both fly() and make_sound(),
# while Penguin only implements make_sound(). There’s no risk of raising
# an error related to flying.
class Penguin(Bird):
    def make_sound(self):
        return "Honk!"

def make_bird_fly(bird: FlyingBird):
    return bird.fly()

# Using the classes
sparrow = Sparrow()
penguin = Penguin()

print(make_bird_fly(sparrow))  # Output: Sparrow is flying!
print(penguin.make_sound())  # Output: Honk!
```

```typescript
// Base class logging.service.ts:
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LoggingService {
	constructor() {}
	log(message: string): void {
		console.log(`Log: ${message}`);
	}
}

// Child Class console-logging.service.ts:
import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
	providedIn: 'root',
})
export class ConsoleLoggingService extends LoggingService {
    override log(message: string): void {
		super.log(message);
	}
}

// Child Class alert-logging.service.ts:
import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
@Injectable({
	providedIn: 'root',
})
export class AlertLoggingService extends LoggingService {
	constructor() {
		super();
	}

	override log(message: string): void {
		alert(`Alert: ${message}`); // Provide different implementation
	}
}

// navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { LoggingService } from '../../logging.service';
import { AlertLoggingService } from '../../alert-logging.service';
import { ConsoleLoggingService } from '../../console-logging.service';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [RouterLink],
	template: `...`,
	styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
	constructor(
		private loggingService: LoggingService,
		private alertLoggingService: AlertLoggingService,
		private consoleLoggingService: ConsoleLoggingService,
	) {}

	ngOnInit(): void {
		console.log('NavbarComponent initialized');
		this.loggingService.log('NavbarComponent initialized');
		this.alertLoggingService.log('NavbarComponent initialized');
		this.consoleLoggingService.log('NavbarComponent initialized');
	}
}
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728802140426/d072fefd-00a6-4cc5-b2ed-1526c9323e64.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728802166093/eabf150c-2edb-4e4c-b97d-84630c06b6d9.png align="center")

---

## Interface Segregation Principle (ISP):

This principle is somewhat similar to the KISS Principle—Keep It Simple Stupid—in that the implementation should be simple and not overly complex which might not be necessary, essentially avoiding being overly complex. According to GeeksForGeeks:

This principle, which is comparable to the single responsibility principle, is the first one in SOLID that pertains to interfaces rather than classes. The directive reads, "Do not compel any client to implement an interface that is unnecessary for them." Here, the fundamental objective is to prioritize numerous small, client-specific interfaces above fat interfaces. Multiple client interfaces are preferable to a single general interface, and each interface should have a distinct function.  
**Let's say you are a strict vegetarian and you walk into a restaurant. You were given the menu card in that restaurant by the server, which has drinks, desserts, and vegetarian and non-vegetarian options.**

* In this situation, as a customer, you ought to receive a menu card that solely consists of vegetarian options—that is, not a list of everything you shouldn't eat. Here, the menu ought to vary depending on the kind of customer.
    
* It is possible to create many cards rather than just one common or universal menu card for everyone. Applying this idea lessens the negative impacts and need for frequent adjustments.
    
    ```python
    from abc import ABC, abstractmethod
    # We have a single, sizable interface machine with printing, scanning,
    # and faxing capabilities. A SimplePrinter does not require the faxing
    # feature, while a MultiFunctionPrinter implements all the procedures.
    class Machine(ABC):
        @abstractmethod
        def print(self, document):
            pass
    
        @abstractmethod
        def scan(self, document):
            pass
    
        @abstractmethod
        def fax(self, document):
            pass
    
    class MultiFunctionPrinter(Machine):
        def print(self, document):
            print(f"Printing: {document}")
    
        def scan(self, document):
            print(f"Scanning: {document}")
    
        def fax(self, document):
            print(f"Faxing: {document}")
    
    class SimplePrinter(Machine):
        def print(self, document):
            print(f"Printing: {document}")
        # Although this class supports the print method, it does not support
        # the scan and fax functions, hence it produces problems when using
        # them. Because of this architecture, SimplePrinter is forced to rely
        # on methods it does not employ, which is against ISP policy.
        def scan(self, document):
            raise NotImplementedError("This printer cannot scan.")
    
        def fax(self, document):
            raise NotImplementedError("This printer cannot fax.")
    
    # Using the classes
    printer = SimplePrinter()
    printer.print("My Document")
    try:
        printer.scan("My Document")  # This will raise an error
    except NotImplementedError as e:
        print(e)  # Output: This printer cannot scan.
    
    # Refactored version to adhere with ISP Policy:
    from abc import ABC, abstractmethod
    
    class Printer(ABC):
        @abstractmethod
        def print(self, document):
            pass
    
    class Scanner(ABC):
        @abstractmethod
        def scan(self, document):
            pass
    
    class Fax(ABC):
        @abstractmethod
        def fax(self, document):
            pass
    
    class MultiFunctionPrinter(Printer, Scanner, Fax):
        def print(self, document):
            print(f"Printing: {document}")
    
        def scan(self, document):
            print(f"Scanning: {document}")
    
        def fax(self, document):
            print(f"Faxing: {document}")
    
    class SimplePrinter(Printer):
        def print(self, document):
            print(f"Printing: {document}")
    
    # Using the classes
    multi_function_printer = MultiFunctionPrinter()
    multi_function_printer.print("My Document")
    multi_function_printer.scan("My Document")
    multi_function_printer.fax("My Document")
    
    simple_printer = SimplePrinter()
    simple_printer.print("My Document")
    ```
    
    ```typescript
    // interface/logger.ts
    export interface Logger {
    	log(message: string): void;
    }
    
    export interface ConsoleLogger extends Logger {
    	logConsole(message: string): void;
    }
    
    export interface AlertLogger extends Logger {
    	logAlert(message: string): void;
    }
    
    // alert-logging.service.ts:
    import { Injectable } from '@angular/core';
    import { AlertLogger } from './interface/logger';
    
    @Injectable({
    	providedIn: 'root',
    })
    export class AlertLoggingService implements AlertLogger {
    	constructor() {}
    	logAlert(message: string): void {
    		alert(`Alert: ${message}`);
    	}
    	log(message: string): void {
    		console.log(`Log: ${message}`);
    	}
    }
    
    // console-logging.service.ts
    import { Injectable } from '@angular/core';
    import { ConsoleLogger } from './interface/logger';
    @Injectable({
    	providedIn: 'root',
    })
    export class ConsoleLoggingService implements ConsoleLogger {
        constructor() { }
        log(message: string): void {
            console.log(`Log: ${message}`);
        }
    	logConsole(message: string): void {
    		console.log(`Console: ${message}`);
    	}
    }
    
    // logging.service.ts
    import { Injectable } from '@angular/core';
    import { Logger } from './interface/logger';
    
    @Injectable({
    	providedIn: 'root',
    })
    export class LoggingService implements Logger {
    	constructor() {}
    	log(message: string): void {
    		console.log(`Log: ${message}`);
    	}
    }
    
    // navbar.component.ts
    import { Component } from '@angular/core';
    import { RouterLink } from '@angular/router';
    import { OnInit } from '@angular/core';
    import { LoggingService } from '../../logging.service';
    import { AlertLoggingService } from '../../alert-logging.service';
    import { ConsoleLoggingService } from '../../console-logging.service';
    
    @Component({
    	selector: 'app-navbar',
    	standalone: true,
    	imports: [RouterLink],
    	template: `...`,
    	styleUrl: './navbar.component.css',
    })
    export class NavbarComponent implements OnInit {
    	constructor(
    		private loggingService: LoggingService,
    		private alertLoggingService: AlertLoggingService,
    		private consoleLoggingService: ConsoleLoggingService,
    	) {}
    
    	ngOnInit(): void {
    		this.loggingService.log('NavbarComponent initialized');
    		this.alertLoggingService.logAlert('NavbarComponent initialized');
    		this.consoleLoggingService.logConsole('NavbarComponent initialized');
    	}
    }
    ```
    

---

## Dependency Inversion Principle (DIP):

This principle states that: In object-oriented design, the Dependency Inversion Principle (DIP) asserts that "High-level modules should not depend on low-level modules." Abstractions should be the basis for both. Furthermore, abstractions must not to rely on specifics. Abstractions should drive details.

* Put more simply, the DIP recommends against using concrete implementations for classes and instead relying on abstractions (such as interfaces or abstract classes).
    
* This makes it possible to write code that is more decoupled and adaptable, which facilitates changing implementations without affecting other areas of the codebase.
    
    *To manage and track changes to the codebase, engineers in a software development team rely on an abstract version control system (like Git). They are independent of particulars regarding the internal operations of Git.*
    
    ```python
    class EmailService:
        def send_email(self, message):
            print(f"Sending email with message: {message}")
    
    class NotificationService:
        def __init__(self):
            self.email_service = EmailService()  # Direct dependency
    
        def notify(self, message):
            self.email_service.send_email(message)
    
    # Tight Coupling: The NotificationService is tightly coupled to the
    # EmailService. If we want to change the notification method
    # (e.g., to SMS or push notifications), we must modify the
    # NotificationService class.
    # Using the NotificationService
    notification_service = NotificationService()
    notification_service.notify("Hello, this is a notification!")
    
    # Refactored Version:
    from abc import ABC, abstractmethod
    
    # Define an abstraction for notification services
    class NotificationServiceInterface(ABC):
        @abstractmethod
        def send(self, message: str):
            pass
    # The NotificationService now depends on the NotificationServiceInterface,
    # not on a specific implementation. This means you can easily swap out
    # EmailService for SmsService or any other notification service without
    # changing NotificationService.
    
    # Adding new notification types (like push notifications) becomes easier.
    # Just implement the NotificationServiceInterface, and you can integrate
    # it without modifying existing code.
    
    class EmailService(NotificationServiceInterface):
        def send(self, message: str):
            print(f"Sending email with message: {message}")
    
    class SmsService(NotificationServiceInterface):
        def send(self, message: str):
            print(f"Sending SMS with message: {message}")
    
    class NotificationService:
        def __init__(self, notification_service: NotificationServiceInterface):
            self.notification_service = notification_service  # Depend on abstraction
    
        def notify(self, message: str):
            self.notification_service.send(message)
    
    # Using the services
    email_service = EmailService()
    sms_service = SmsService()
    
    email_notification = NotificationService(email_service)
    email_notification.notify("Hello via Email!")
    
    sms_notification = NotificationService(sms_service)
    sms_notification.notify("Hello via SMS!")
    ```
    

```typescript
// email-notification.service.ts
import { Injectable } from '@angular/core';

interface Notification {
	send(message: string): void;
}

@Injectable({
	providedIn: 'root',
})
export class EmailNotificationService implements Notification {
    constructor() { }

    send(message: string): void {
        console.log(`Sending email with message: ${message}`);
    }
}

// navbar.component.ts
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
	template: `...`,
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
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1728805494703/ee9af0f7-66e0-4759-925a-574d8e2e7ebe.png align="center")

## **Repository Link:** [uaenaaaa/act-25-solid-principles-in-angular](https://github.com/uaenaaaa/act-25-solid-principles-in-angular)
