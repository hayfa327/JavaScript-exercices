// Selecting Elements

// getElementById() - Selects a single element by its ID, RECOMMENDED
// Syntax: document.getElementById('idName')
// Returns: Single element or null if not found
// Use case: Targeting a unique element (e.g., a specific form, modal, or container)
const mainTitle = document.getElementById('mainHeader');

// getElementsByClassName() - Selects all elements with a given class
// Syntax: document.getElementsByClassName('className')
// Returns: Live HTMLCollection (auto-updates when DOM changes)
// Use case: Selecting multiple elements that share styling/behavior (e.g., all cards)
const getByClass = document.getElementsByClassName('articleOne');

// getElementsByTagName() - Selects all elements with a given tag
// Syntax: document.getElementsByTagName('tagName')
// Returns: Live HTMLCollection (auto-updates when DOM changes)
// Use case: Selecting all elements of a type (e.g., all paragraphs, all images)
const getByTagName = document.getElementsByTagName('article');

// querySelector() - Selects the first element matching a CSS selector, RECOMMENDED
// Syntax: document.querySelector('cssSelector')
// Returns: Single element or null if not found
// Use case: Precise selection using any CSS selector (most flexible)
const getElement = document.querySelector('.articleOne')

// querySelectorAll() - Selects all elements matching a CSS selector, RECOMMENDED
// Syntax: document.querySelectorAll('cssSelector')
// Returns: Static NodeList (does NOT update when DOM changes)
// Use case: Selecting multiple elements with complex CSS selectors
const getAllElements = document.querySelectorAll('.articleOne')

// getElementsByName() - Selects all elements with a given name attribute
// Syntax: document.getElementsByName('nameValue')
// Returns: Live NodeList (auto-updates when DOM changes)
// Use case: Selecting form elements that share a name (e.g., radio buttons)
const getByName = document.getElementsByName('articleOne')

// Creating Elements

// createElement() - Most common way to create a new element, RECOMMENDED
// Syntax: document.createElement('tagName')
// Use case: Creating any HTML element (div, p, span, button, etc.)
const newDivElement = document.createElement('div')

// createTextNode() - Creates a text node (just text, no HTML)
// Syntax: document.createTextNode('your text here')
// Use case: Adding plain text content to an element
const newText = document.createTextNode('This is a new text node');

// createDocumentFragment() - Creates a temporary container
// Syntax: document.createDocumentFragment()
// Use case: Batch multiple elements together before adding to DOM (better performance)
const newFragment = document.createDocumentFragment()

// cloneNode() - Creates a copy of an existing element
// Syntax: element.cloneNode(deep)
// deep = true: clones element AND all its children
// deep = false: clones only the element itself (no children)
// Use case: Duplicating existing elements (e.g., template rows in a table)
const clonedElement = getElement.cloneNode(false)

// Appending Elements

const container = document.getElementById('container');
// appendChild() - Adds a node as the last child of a parent
// Syntax: parent.appendChild(childElement)
// Use case: Adding a new element to the end of a container
const newButton = document.createElement('button')
newButton.textContent = 'Newest Button';
container.appendChild(newButton);

const newDiv = document.createElement('div');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'this is a paragraph inside a div';
newDiv.appendChild(newParagraph)
container.appendChild(newDiv)

// append() - Adds one or more nodes/strings as last children (modern)
// Syntax: parent.append(node1, node2, 'text', ...)
// Use case: Adding multiple elements or text at once
const newButton2 = document.createElement('button')
newButton2.textContent = 'Second Newest Button';
container.append('text before button', newButton2, 'text after button')

// prepend() - Adds one or more nodes/strings as first children
// Syntax: parent.prepend(node1, node2, 'text', ...)
// Use case: Adding elements to the beginning of a container
const newParagraphIntro = document.createElement('p');
newParagraphIntro.textContent = 'this is an introductory paragraph to DOM manipulation';
container.prepend('this is first', newParagraphIntro);
const btn = document.createElement('button');
btn.textContent = 'this is the first button';

container.prepend('this will be top ', 'thos ', btn)

// insertBefore() - Inserts a node before a reference node
// Syntax: parent.insertBefore(newNode, referenceNode)
// Use case: Inserting an element at a specific position

const newDivAgain = document.createElement('div');
const newParagraphAgain = document.createElement('p');
newParagraphAgain.textContent =' this will end up as a child to the new sibling div'
newDivAgain.appendChild(newParagraphAgain)
container.insertBefore(newDivAgain, mainTitle);

// after() - Inserts nodes/strings right after an element
// Syntax: element.after(node1, node2, ...)
// Use case: Adding a sibling immediately after an element
const newElementAgain = document.createElement('p')
newElementAgain.textContent = 'this will be a sibling to the main title'

mainTitle.after(newElementAgain)

// before() - Inserts nodes/strings right before an element
// Syntax: element.before(node1, node2, ...)
// Use case: Adding a sibling immediately before an element
const newElementBefore = document.createElement('p')
newElementBefore.textContent = 'this will be a sibling to the main TITLE but before it'

mainTitle.before(newElementBefore)

// insertAdjacentElement() - Inserts an element at a specific position
// Syntax: element.insertAdjacentElement(position, newElement)
// Positions: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'
// Use case: Precise control over where to insert relative to an element

// Removing Elements

// remove() - Removes the element from the DOM (modern, preferred)
// Syntax: element.remove()
// Use case: Deleting an element (e.g., removing a list item when user clicks delete)
container.remove();

// removeChild() - Removes a child element from its parent
// Syntax: parent.removeChild(childElement)
// Use case: When you need a reference to the removed element, or for older browser support
// Returns: The removed element (so you can reuse it)
const removedItem = container.removeChild(mainTitle)

// replaceChild() - Replaces a child element with a new one
// Syntax: parent.replaceChild(newChild, oldChild)
// Use case: Swapping out an element (e.g., replacing a placeholder with actual content)

// replaceWith() - Replaces the element with new nodes/strings (modern)
// Syntax: element.replaceWith(node1, node2, 'text', ...)
// Use case: Replacing an element with one or more new elements

// Modifying Element Content

// textContent - Gets/sets the text content of an element (no HTML parsing)
// Syntax: element.textContent = 'new text';
// Use case: Safely setting plain text (won't execute scripts, faster)
const title = document.getElementById('title');
title.textContent = 'this is the new text'

// innerText - Gets/sets the visible text content (respects CSS styling)
// Syntax: element.innerText = 'new text';
// Use case: When you need only the visible text (hidden elements excluded)
// Note: Slower than textContent because it triggers reflow

// innerHTML - Gets/sets the HTML content inside an element
// Syntax: element.innerHTML = '<span>HTML content</span>';
// Use case: When you need to insert HTML markup
// WARNING: Security risk with user input (XSS attacks) - sanitize first!
title.innerHTML = `<span>this is the new text with HTML</span>`

// outerHTML - Gets/sets the element itself including its HTML
// Syntax: element.outerHTML = '<div>Replaces entire element</div>';
// Use case: Replacing an element entirely with new HTML
// Note: The original element reference becomes invalid after setting

// insertAdjacentHTML() - Inserts HTML at a specific position (no re-parsing)
// Syntax: element.insertAdjacentHTML(position, 'html string')
// Positions: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'
// Use case: Adding HTML without destroying existing content (better performance than innerHTML +=)

// Modifying Element Attributes

// getAttribute() - Gets the value of an attribute
// Syntax: element.getAttribute('attributeName')
// Use case: Reading attribute values (src, href, data-*, etc.)
const link = document.querySelector('.link')
console.log(link.getAttribute('href'))

// setAttribute() - Sets or updates an attribute value
// Syntax: element.setAttribute('attributeName', 'value')
// Use case: Adding or changing any attribute
link.setAttribute('href', 'google.com')

// removeAttribute() - Removes an attribute entirely
// Syntax: element.removeAttribute('attributeName')
// Use case: Removing attributes like disabled, readonly, etc.
link.removeAttribute('href')

// hasAttribute() - Checks if an attribute exists
// Syntax: element.hasAttribute('attributeName')
// Use case: Conditional logic based on attribute presence
console.log(link.hasAttribute('href'))

// Direct property access - For common attributes (faster)
// Syntax: element.property = value
// Use case: Common properties like id, className, src, href, value
// Note: Property names may differ from attribute names (class vs className)
console.log(link.href)

// dataset - Access data-* attributes as an object
// Syntax: element.dataset.propertyName
// Use case: Storing custom data on elements
link.dataset.href

// classList - Manage CSS classes (better than className for multiple classes)
// Syntax: element.classList.add/remove/toggle/contains/replace
// Use case: Adding, removing, or toggling CSS classes
link.classList.add('newLinkClass')
link.classList.remove('newLinkClass')
link.classList.toggle('newLinkClass')
link.classList.contains('newLinkClass')
link.classList.replace('newLinkClass', 'newestClassName')

// link.className = 'all existing classNames plus the new ones because it overwrites all existing classNames'

// Modifying Element Styles

// style property - Sets inline styles directly on an element
// Syntax: element.style.propertyName = 'value'
// Note: CSS property names are camelCase (background-color → backgroundColor)
// Use case: Dynamic style changes based on user interaction or state
link.style.backgroundColor = 'blue'

// style.cssText - Sets multiple inline styles at once as a string
// Syntax: element.style.cssText = 'property: value; property: value;'
// Use case: Applying multiple styles in one statement
// Warning: Overwrites ALL existing inline styles
link.style.cssText = 'background-color: red; color: white; padding: 10px;'

// setProperty() - Sets a CSS property (supports CSS custom properties)
// Syntax: element.style.setProperty('property-name', 'value', priority?)
// Use case: Setting CSS variables or when you need to set !important
link.style.setProperty('background-color', 'green')

// getComputedStyle() - Gets the final computed styles of an element
// Syntax: window.getComputedStyle(element)
// Returns: Read-only CSSStyleDeclaration object
// Use case: Reading actual rendered styles (including inherited/stylesheet styles)

// removeProperty() - Removes an inline style property
// Syntax: element.style.removeProperty('property-name')
// Use case: Removing a specific inline style to revert to stylesheet styles
link.style.removeProperty('color')

// Event Handling

// ============ DOM Event Handler Levels ============

// DOM Level 0 (Inline HTML attributes) - Oldest method
// Syntax: <button onclick="handleClick()">Click</button>
// Limitation: Mixes HTML and JS, only one handler per event
// Use case: Quick prototypes, but avoid in production

// DOM Level 0 (Element property) - Old method
// Syntax: element.onclick = function() { ... }
// Limitation: Only ONE handler per event (overwrites previous)
// Use case: Simple cases, but addEventListener is preferred

// DOM Level 2 (addEventListener) - Modern, preferred method
// Syntax: element.addEventListener('eventType', handlerFunction, options?)
// Advantage: Multiple handlers, capture/bubble control, once option
// Use case: All modern event handling - responding to clicks, input, keypresses, etc.
const buttonEl = document.querySelector('.button');
buttonEl.addEventListener('click', (e) => {
    console.log('btn was clicked')
})

// Summary:
// | Level   | Syntax                          | Multiple Handlers? | Recommended? |
// |---------|----------------------------------|-------------------|--------------|
// | Level 0 | onclick="..." (HTML)            | No                | No           |
// | Level 0 | element.onclick = fn            | No                | No           |
// | Level 2 | addEventListener('click', fn)   | Yes               | Yes          |

// ============ Removing Event Handlers ============

// removeEventListener() - Removes an event handler from an element
// Syntax: element.removeEventListener('eventType', handlerFunction)
// Use case: Cleaning up event handlers (e.g., when removing elements, preventing memory leaks)
// Note: Must pass the SAME function reference used in addEventListener
buttonEl.removeEventListener('click', (e) => {})

// once option - Handler runs only once then auto-removes itself
// Syntax: element.addEventListener('click', handler, { once: true })
// Use case: One-time actions like showing a welcome modal
// Advantage: No need to manually remove the handler
buttonEl.addEventListener('click', (e) => {}, {once: true})

// ============ The Event Object ============

// When an event fires, the handler receives an event object with useful info:
// function handleClick(event) {
//     event.target        // The element that triggered the event (what was clicked)
//     event.currentTarget // The element the handler is attached to
//     event.type          // The type of event ('click', 'submit', etc.)
//     event.preventDefault()     // Stops default browser behavior (e.g., form submit)
//     event.stopPropagation()    // Stops event from bubbling up
// }

// preventDefault() - Stops default browser behavior
// Syntax: event.preventDefault()
// Use case: Prevent form submission, prevent link navigation, etc.
//     event.preventDefault();  // Stop form from submitting

// ============ Event Bubbling & Capturing ============

// Event Propagation - How events travel through the DOM
// When an event occurs, it goes through 3 phases:
// 1. Capturing Phase: Event travels DOWN from window → target element
// 2. Target Phase: Event reaches the target element
// 3. Bubbling Phase: Event travels UP from target element → window

// Event Bubbling (default behavior)
// When you click the button, the event bubbles UP:
// button → parent → grandparent → body → html → document → window
// All click handlers on parent elements will ALSO fire!

// stopPropagation() - Stops the event from bubbling up
// Syntax: event.stopPropagation()
// Use case: When you want ONLY the clicked element's handler to run
buttonEl.addEventListener('click', (e) => {
    e.target.value
})
// stopImmediatePropagation() - Stops bubbling AND other handlers on same element
// Syntax: event.stopImmediatePropagation()
// Use case: When you have multiple handlers on the same element and want to stop all

// Event Capturing - Listen during the capture phase (rarely used)
// Syntax: element.addEventListener('click', handler, { capture: true })
// Use case: Intercept events before they reach the target
// This fires BEFORE the child's handler

// target vs currentTarget
// event.target - The element that was actually clicked (the source)
// event.currentTarget - The element the handler is attached to
// Use case: In event delegation, target tells you which child was clicked

// ============ Event Delegation ============

// Event Delegation - Attach one handler to a parent for multiple children
// Syntax: parent.addEventListener('eventType', handler)
// Use case: Handling events on many similar elements or dynamically added elements
// Why it works: Bubbling - clicks on children bubble up to parent!
// Advantage: More efficient than adding handlers to each child element

// ============ Common Event Types ============

// Mouse Events:
// 'click'       - Single click
// 'dblclick'    - Double click
// 'mousedown'   - Mouse button pressed
// 'mouseup'     - Mouse button released
// 'mouseenter'  - Mouse enters element (doesn't bubble)
// 'mouseleave'  - Mouse leaves element (doesn't bubble)
// 'mouseover'   - Mouse enters element (bubbles)
// 'mouseout'    - Mouse leaves element (bubbles)

// Keyboard Events:
// 'keydown'     - Key pressed down (fires repeatedly if held)
// 'keyup'       - Key released

// Form Events:
// 'submit'      - Form submitted
// 'change'      - Input value changed (after losing focus)
// 'input'       - Input value changed (fires immediately)
// 'focus'       - Element gains focus
// 'blur'        - Element loses focus

// Window/Document Events:
// 'DOMContentLoaded' - HTML parsed, DOM ready (before images/CSS)
// 'load'        - Page fully loaded (including images/CSS)
// 'resize'      - Window resized
// 'scroll'      - Element or window scrolled

// Touch Events (mobile):
// 'touchstart'  - Finger touches screen
// 'touchend'    - Finger leaves screen
// 'touchmove'   - Finger moves on screen

// ============================================================
// Best Practices for DOM Manipulation, Event Handling and Performance
// ============================================================

// ============ DOM Manipulation Best Practices ============

// 1. Cache DOM references - Don't query the DOM repeatedly
// BAD: Queries DOM on every iteration

// GOOD: Cache the reference once

// 2. Use DocumentFragment for batch insertions
// BAD: Each appendChild triggers a reflow

// GOOD: Build in fragment, insert once
document.createDocumentFragment()

// 3. Prefer textContent over innerHTML for plain text
// - textContent is faster (no HTML parsing)
// - textContent is safer (no XSS risk)

// 4. Use classList instead of className for class manipulation
// BAD: Overwrites all classes

// GOOD: Add/remove specific classes

// 5. Minimize DOM depth - Flatter structures are faster to traverse

// 6. Use CSS classes instead of inline styles when possible
// BAD: Inline styles are harder to maintain
link.style.backgroundColor = 'blue'
// GOOD: Toggle a CSS class
link.classList.toggle('newLinkClass')
// ============ Event Handling Best Practices ============

// 1. Use Event Delegation for multiple similar elements
// BAD: Adding handler to each button

// GOOD: One handler on parent

// 2. Always use addEventListener, not inline handlers or onclick properties
// BAD: inline handler
// BAD: onclick property
// GOOD: addEventListener

// 3. Remove event listeners when no longer needed
// - Prevents memory leaks
// - Important when removing elements from DOM

// 4. Use passive: true for scroll/touch events (improves scroll performance)
// window.addEventListener('scroll', handleScroll, { passive: true });
// Note: Can't call preventDefault() with passive: true

// 5. Debounce or throttle expensive handlers
// Use case: scroll, resize, input events that fire rapidly
// Debounce: Wait until user stops (e.g., search input)
// Throttle: Run at most once per interval (e.g., scroll position tracking)

// 6. Use event.target.matches() or event.target.closest() for delegation

// ============ Performance Best Practices ============

// 1. Avoid layout thrashing (forced synchronous layouts)
// BAD: Reading then writing repeatedly forces layout recalculation

// GOOD: Batch reads, then batch writes

// 2. Use requestAnimationFrame for visual updates
// BAD: Updates may happen at wrong time, causing jank

// GOOD: Syncs with browser's paint cycle

// 3. Properties that trigger layout (reflow) - expensive!
// Reading: offsetWidth, offsetHeight, offsetTop, offsetLeft
//          clientWidth, clientHeight, scrollWidth, scrollHeight
//          getComputedStyle(), getBoundingClientRect()
// Writing: width, height, top, left, margin, padding, border, font-size

// 4. Properties that only trigger repaint (cheaper)
// color, background-color, visibility, box-shadow

// 5. Properties that skip layout AND paint (cheapest - GPU accelerated)
// transform, opacity
// BAD: Triggers layout

// GOOD: Use transform instead of top/left for animations

// 6. Use display: none or visibility: hidden when hiding elements
// display: none - Removes from layout (one reflow)
// visibility: hidden - Keeps space, just invisible (no reflow)

// 7. Lazy load off-screen content
// - Don't add elements to DOM until needed
// - Use Intersection Observer for scroll-triggered loading

// 8. Avoid excessive DOM size
// - Large DOMs are slow to query and manipulate
// - Consider virtual scrolling for long lists

// Summary of expensive operations to minimize:
// | Operation           | Cost    | Alternative                    |
// |---------------------|---------|--------------------------------|
// | DOM queries         | Medium  | Cache references               |
// | innerHTML +=        | High    | DocumentFragment               |
// | Reading layout      | High    | Batch reads together           |
// | Frequent reflows    | High    | Use transform/opacity          |
// | Many event handlers | Medium  | Event delegation               |
// | Rapid event firing  | High    | Debounce/throttle              |
// |---------------------|---------|--------------------------------|
