# Changelog

- v0.1.0: Initial upload.
- v0.2.0: Swapped to new structure which includes:
    - Removed original blocks
    - Added new blocks:
        - image
        - section
        - shortcode
        - text
    - Setup styling so modifier classes can be added via PHP hooks for selection in the editor.
- v0.2.1: Updated README.md.
- v0.2.2: Change option attribute structure and added alignment controls for text block and caption/alt control over image block.
- v0.3.0: Finished basic Section functionality. Fixed editor styling for consistency on spacing. Added default layout styling for Section block.
- v0.4.0: Added Group block.
- v0.5.0: Changes:
    - Added Link block:
        - Added migration to help resolve issues where SEO plugins add `rel:"noopener"` on the front end
    - Split components and helpers into dedicated files
    - Fixed imports for new structure
