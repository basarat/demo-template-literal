type Size = 'small' | 'medium' | 'large';
type Color = 'primary' | 'secondary';
type Style = `${Size}-${Color}`;

/**
 * @param style is a combination of 
 *  Size: 'small' or 'medium' or 'large'
 *  Color: 'primary' or 'secondary'
 * e.g. 'small-secondary'
 */
function applyStyle(style: Style) {
  // ...
}

applyStyle('small-primary');
applyStyle('large-secondary');
applyStyle('medim-primary'); // Error