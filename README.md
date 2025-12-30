# SB Admin 2 - Bootstrap 5 Upgrade

This project has been upgraded to use Bootstrap 5, Bootstrap Icons, and Vanilla JavaScript.

## Changes

-   **Bootstrap Version**: Upgraded from Bootstrap 4 to Bootstrap 5.
-   **Icons**: Replaced Font Awesome with Bootstrap Icons.
-   **JavaScript**:
    -   Removed jQuery dependency.
    -   Rewrote `js/sb-admin-2.js` to use Vanilla JavaScript.
    -   Replaced `vendor/jquery-easing` with native CSS smooth scrolling and JS scroll behavior.
-   **CSS**:
    -   `vendor/bootstrap-5/css/bootstrap.min.css` is now used.
    -   Custom styles are in `css/sb-admin-2-bs5.css`.
    -   Replaced Bootstrap 4 classes with Bootstrap 5 equivalents (e.g., `ml-auto` -> `ms-auto`, `data-toggle` -> `data-bs-toggle`).

## Usage

To use this template, simply open `index.html` in your browser. All dependencies are included in the `vendor` directory.

## Revision History

-   **[Current Date]**: Replaced Font Awesome with Bootstrap Icons and converted to Vanilla JavaScript.
    -   Installed Bootstrap Icons via npm and moved assets to `vendor/bootstrap-icons`.
    -   Replaced all Font Awesome classes (`fas`, `far`, `fab`, `fa-*`) with Bootstrap Icons equivalents (`bi`, `bi-*`).
    -   Refactored `js/sb-admin-2.js` to remove jQuery.
    -   Removed jQuery and jQuery Easing scripts from all HTML files.
-   **[Previous Date]**: Converted to Bootstrap 5.
    -   Extracted custom styles from `sb-admin-2.css`.
    -   Updated HTML attributes and classes.
    -   Updated vendor dependencies.
