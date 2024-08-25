# ngx-scrollbar

`@omnedia/ngx-scrollbar` is an Angular library that provides a customizable and lightweight scrollbar component. This component offers a custom scrollbar with smooth scrolling functionality and allows for full control over its appearance through styling.

## Features

- Custom scrollbar for the y-Direction with adjustable styles and behavior.
- Smooth scrolling with click-and-drag functionality.
- Easily integratable into Angular projects as a standalone component.
- Allows for styling customization via CSS classes and inline styles.

## Installation

Install the library using npm:

```bash
npm install @omnedia/ngx-scrollbar
```

## Usage

Import the `NgxScrollbarComponent` in your Angular module or component:

```typescript
import { NgxScrollbarComponent } from '@omnedia/ngx-scrollbar';

@Component({
  ...
  imports: [
    ...
    NgxScrollbarComponent,
  ],
  ...
})
```

Use the component in your template:

```html
<om-scrollbar [styleClass]="'custom-scrollbar'">
  <div>
    <!-- Your scrollable content here -->
    <p>Scrollable content 1</p>
    <p>Scrollable content 2</p>
    <p>Scrollable content 3</p>
  </div>
</om-scrollbar>
```

## How It Works

- Custom Scrollbar: The ngx-scrollbar component wraps your content inside a custom scrollbar container. The appearance of the scrollbar can be controlled via the styleClass input, allowing for full customization.
- Smooth Scrolling: The scrollbar supports smooth scrolling, and users can drag the scrollbar for precise control.
- Dynamic Calculation: The size of the scrollbar is calculated based on the content height relative to the container.

## API

```html
<om-scrollbar [styleClass]="'your-custom-class'" [onlyShowOnHover]="onlyShowOnHover">
  <ng-content></ng-content>
</om-scrollbar>
```

- `styleClass` (optional): A custom CSS class to apply to the scrollbar component for additional styling.
- `onlyShowOnHover` (optional): Sets if the scrollbar is only visible while you hover the content.

## Example

```html
<om-scrollbar [styleClass]="'custom-scrollbar-style'">
  <div>
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3</p>
    <!-- Add more content here -->
  </div>
</om-scrollbar>
```

This will create a custom scrollbar for the content with the specified custom styles.

## Styling

You can style the component globally or use the styleClass input to apply your custom styles. <br>
Make sure to give the `om-scrollbar` component a height of 100% in your component. <br>
The `max-height` is defined by the components parent component.

## Custom Scrollbar Styling Example

In this example, the scrollbar bar is styled to be larger and colored differently:

```html
<div class="nav-bar">
    <om-scrollbar styleClass="custom-scrollbar">
        <div class="nav-items">
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
        </div>
    </om-scrollbar>
</div>
```

```css
/* Component styling */
om-scrollbar {
    height: 100%;
}

.nav-bar {
    height: 500px
}

.nav-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 2rem;
}


/* Global styling */
.custom-scrollbar {
  background-color: rgb(60, 60, 60) !important;
  width: 0.5rem !important;
  border-radius: 12px !important;
  transition: background-color 0.2s;

  &:hover,
  &.om-scrollbar-bar-active {
    background-color: rgb(80, 80, 80) !important;
    opacity: 1 !important;
  }
}
```

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License.