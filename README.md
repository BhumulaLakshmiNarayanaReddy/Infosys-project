# Infosys-project
# Milestone 1 - Frontend Common Components Development

## My Contribution

For Milestone 1, I was assigned the responsibility of developing the **Common Components** for the frontend of the **AI Ticket Management System**. The main objective of my work was to create reusable React components that can be used throughout the application by different modules such as Employee, Support, and Admin. Instead of creating the same UI elements repeatedly, I designed reusable components so that they can be easily integrated wherever required.

During this milestone, I focused on understanding React component architecture, component reusability, props, conditional rendering, routing concepts, and dynamic rendering. I implemented the following components:

### Button Component

I developed a reusable Button component that supports different button variants such as Primary, Secondary, and Danger. The component accepts properties like button type, click events, disabled state, and custom **CSS** classes, making it flexible enough to be used across different pages of the application.

### Loader Component

I created a Loader component that displays a loading spinner along with customizable loading text. This component can be reused whenever the application is waiting for data from the backend or performing asynchronous operations.

### Modal Component

I implemented a reusable Modal component that displays popup dialogs. It supports dynamic content using React's `children` prop and allows users to close the dialog using either the close button or by clicking outside the modal.

### Confirm Dialog Component

I developed a reusable Confirm Dialog component specifically for confirmation actions such as deleting a ticket or signing out. The dialog displays a customizable title and message along with Confirm and Cancel actions.

### Navbar Component

I created the application's Navbar, which displays the application title and logged-in user information. The Navbar is designed to accept nested components, allowing elements like the Notification Bell to be integrated without modifying the Navbar itself.

### Notification Bell Component

I implemented a reusable Notification Bell component that displays the unread notification count and triggers an action whenever the notification icon is clicked. The component also handles large notification counts by displaying *99+*.

### Sidebar Component

I developed a reusable Sidebar component that dynamically renders navigation items using React Router's `NavLink`. Instead of hardcoding navigation links, the Sidebar accepts menu items as props, making it suitable for Employee, Support, and Admin dashboards.

### Ticket Card Component

I created a reusable Ticket Card component to display individual ticket information such as title, category, priority, status, assigned user, and creation date. The component also supports click events for opening ticket details.

### Ticket Table Component

I implemented a reusable Ticket Table component that dynamically renders ticket information using JavaScript's `map()` function. The component gracefully handles empty datasets and allows row selection through click events.

### Analytics Chart Component

I developed the initial structure for the Analytics Chart component. The component is designed to receive analytics data dynamically and can later be integrated with chart libraries such as Recharts.

### Protected Route Component

I implemented a Protected Route component using React Router. It checks the user's authentication status before allowing access to protected pages. It also supports role-based authorization and redirects unauthorized users to the appropriate page while displaying a loader during authentication checks.


# Technologies Used

- React.js
- React Router **DOM**
- JavaScript (**ES6**+)
- **JSX**
- Vite


# React Concepts Applied

During this milestone, I gained practical experience with:

- Functional Components
- Component Reusability
- Props
- Children Props
- Conditional Rendering
- Dynamic Rendering using `map()`
- Event Handling
- React Router
- Protected Routing
- Role-Based Access Control


# Learning Outcome

This milestone helped me understand how reusable components are designed in React applications and how they improve maintainability and scalability. I also learned how React Router is used for navigation and route protection, how props enable component communication, and how dynamic rendering allows components to work with changing data.
