// ============================================
// EXERCISE 4: DOM Manipulation and Event Handlers
// ============================================

// NOTE: These solutions assume the corresponding HTML structure exists.
// To test, create an HTML file with the required elements for each section.

// ============================================
// SELECTING ELEMENTS
// ============================================

// Exercise: Select Elements
// HTML structure assumed to exist (see Exercise.md)

// 1. Select the element with id "container"
const container = document.getElementById('container');
// OR: const container = document.querySelector('#container');

// 2. Select all elements with class "item"
const items = document.querySelectorAll('.item');
// OR: const items = document.getElementsByClassName('item');

// 3. Select the first element with class "title"
const title = document.querySelector('.title');
// OR: const title = document.getElementsByClassName('title')[0];

// 4. Select the button using its data attribute
const submitBtn = document.querySelector('[data-action="submit"]');

// 5. Select all <li> elements inside #item-list
const listItems = document.querySelectorAll('#item-list li');
// OR: const listItems = document.getElementById('item-list').getElementsByTagName('li');

// Exercise: Query Selector vs GetElement Methods
/*
Differences explained:

1. getElementById('myId')
   - Returns a single element (the first with that ID)
   - Fastest method for selecting by ID
   - Returns null if not found

2. getElementsByClassName('myClass')
   - Returns a LIVE HTMLCollection of all matching elements
   - Updates automatically when DOM changes
   - Returns empty collection if none found

3. getElementsByTagName('div')
   - Returns a LIVE HTMLCollection of all elements with that tag
   - Updates automatically when DOM changes

4. querySelector('.myClass')
   - Returns the FIRST element matching the CSS selector
   - More flexible - accepts any valid CSS selector
   - Returns null if not found

5. querySelectorAll('.myClass')
   - Returns a STATIC NodeList of all matching elements
   - Does NOT update when DOM changes
   - More flexible - accepts any valid CSS selector

When to use each:
- Use getElementById for single elements by ID (fastest)
- Use querySelector for complex selectors or single element selection
- Use querySelectorAll when you need all matching elements and don't need live updates
- Use getElementsByClassName/TagName when you need live collections that auto-update
*/

// ============================================
// MODIFYING ELEMENTS
// ============================================

// Exercise: Change Text Content
const message = document.getElementById('message');

// 1. Change the text to "Hello, World!"
message.textContent = 'Hello, World!';

// 2. Append " Welcome!" to the existing text
message.textContent += ' Welcome!';

// Exercise: Modify HTML Content
const content = document.getElementById('content');

// 1. Add an h2 heading with text "News" inside the div
content.innerHTML = '<h2>News</h2>';

// 2. Add a paragraph below the heading with text "Latest updates"
content.innerHTML += '<p>Latest updates</p>';

// 3. Clear all content from the div
content.innerHTML = '';
// OR: content.textContent = '';

// Exercise: Working with Attributes
const img = document.getElementById('profile-pic');

// 1. Change the src to "user.jpg"
img.src = 'user.jpg';
// OR: img.setAttribute('src', 'user.jpg');

// 2. Add a "title" attribute with value "User Profile"
img.title = 'User Profile';
// OR: img.setAttribute('title', 'User Profile');

// 3. Check if the element has a "data-loaded" attribute
const hasDataLoaded = img.hasAttribute('data-loaded');
console.log('Has data-loaded:', hasDataLoaded); // false

// 4. Remove the "alt" attribute
img.removeAttribute('alt');

// Exercise: Manipulating Styles
const box = document.getElementById('box');

// 1. Set the background color to blue
box.style.backgroundColor = 'blue';

// 2. Set the width to 200px and height to 100px
box.style.width = '200px';
box.style.height = '100px';

// 3. Add padding of 20px and a 2px solid black border
box.style.padding = '20px';
box.style.border = '2px solid black';

// 4. Make the text white and center-aligned
box.style.color = 'white';
box.style.textAlign = 'center';

// Exercise: Working with Classes
const card = document.getElementById('card');

// 1. Add the class "highlighted"
card.classList.add('highlighted');

// 2. Remove the class "shadow"
card.classList.remove('shadow');

// 3. Toggle the class "active"
card.classList.toggle('active');

// 4. Check if the element has the class "card"
const hasCardClass = card.classList.contains('card');
console.log('Has card class:', hasCardClass); // true

// 5. Replace "card" with "card-large"
card.classList.replace('card', 'card-large');

// ============================================
// CREATING AND REMOVING ELEMENTS
// ============================================

// Exercise: Create Elements Dynamically
function createArticle() {
    // Create the article element
    const article = document.createElement('article');
    article.className = 'post';

    // Create the h3 element
    const heading = document.createElement('h3');
    heading.textContent = 'Post Title';

    // Create the paragraph
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Post content goes here...';

    // Create the footer
    const footer = document.createElement('footer');

    // Create the author span
    const authorSpan = document.createElement('span');
    authorSpan.className = 'author';
    authorSpan.textContent = 'John Doe';

    // Create the date span
    const dateSpan = document.createElement('span');
    dateSpan.className = 'date';
    dateSpan.textContent = '2024-01-15';

    // Assemble the structure
    footer.appendChild(authorSpan);
    footer.appendChild(dateSpan);

    article.appendChild(heading);
    article.appendChild(paragraph);
    article.appendChild(footer);

    // Append to body
    document.body.appendChild(article);

    return article;
}

// Exercise: Build a List
function createList(items) {
    const ul = document.createElement('ul');

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    return ul;
}

// Usage:
// const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
// const list = createList(fruits);
// document.body.appendChild(list);

// Exercise: Remove Elements
// 1. Remove task-2 from the list
const task2 = document.getElementById('task-2');
task2.remove();
// OR: task2.parentElement.removeChild(task2);

// 2. Remove all <li> elements from the list
const tasks = document.getElementById('tasks');
while (tasks.firstChild) {
    tasks.removeChild(tasks.firstChild);
}
// OR: tasks.innerHTML = '';
// OR: tasks.replaceChildren();

// 3. Remove the entire #tasks element
tasks.remove();
// OR: tasks.parentElement.removeChild(tasks);

// ============================================
// EVENT HANDLERS
// ============================================

// Exercise: Basic Click Event
const alertBtn = document.getElementById('alert-btn');
alertBtn.addEventListener('click', () => {
    alert('Button clicked!');
});

// Exercise: Multiple Event Listeners
const multiBtn = document.getElementById('multi-btn');

// 1. On click: log "Button clicked" to the console
multiBtn.addEventListener('click', () => {
    console.log('Button clicked');
});

// 2. On mouseenter: change background to yellow
multiBtn.addEventListener('mouseenter', () => {
    multiBtn.style.backgroundColor = 'yellow';
});

// 3. On mouseleave: reset background to default
multiBtn.addEventListener('mouseleave', () => {
    multiBtn.style.backgroundColor = '';
});

// Exercise: Input Events
const nameInput = document.getElementById('name-input');
const greeting = document.getElementById('greeting');

nameInput.addEventListener('input', e => {
    const name = e.target.value.trim();
    if (name) {
        greeting.textContent = `Hello, ${name}!`;
    } else {
        greeting.textContent = '';
    }
});

// Exercise: Form Submission
const signupForm = document.getElementById('signup-form');
const result = document.getElementById('result');

signupForm.addEventListener('submit', e => {
    // 1. Prevent the default form submission
    e.preventDefault();

    // 2. Get the values from both inputs
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // 3. Display the welcome message
    result.textContent = `Welcome, ${username}! We'll contact you at ${email}`;

    // 4. Clear the form after submission
    signupForm.reset();
});

// Exercise: Keyboard Events
const searchInput = document.getElementById('search-input');
const searchResult = document.getElementById('search-result');

searchInput.addEventListener('keydown', e => {
    // 1. When the user presses Enter, display "Searching for: [value]"
    if (e.key === 'Enter') {
        const value = e.target.value.trim();
        if (value) {
            searchResult.textContent = `Searching for: ${value}`;
        }
    }

    // 2. When the user presses Escape, clear the input and search-result
    if (e.key === 'Escape') {
        e.target.value = '';
        searchResult.textContent = '';
    }
});

// ============================================
// EVENT OBJECT
// ============================================

// Exercise: Event Properties
const clickArea = document.getElementById('click-area');
const clickInfo = document.getElementById('click-info');

clickArea.addEventListener('click', e => {
    // Get coordinates relative to the element
    const rect = e.target.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    // Determine which mouse button was used
    let button;
    switch (e.button) {
        case 0:
            button = 'left';
            break;
        case 1:
            button = 'middle';
            break;
        case 2:
            button = 'right';
            break;
        default:
            button = 'unknown';
    }

    // Check for modifier keys
    const modifiers = [];
    if (e.ctrlKey) modifiers.push('Ctrl');
    if (e.shiftKey) modifiers.push('Shift');
    if (e.altKey) modifiers.push('Alt');
    if (e.metaKey) modifiers.push('Meta');

    const modifierText = modifiers.length > 0 ? modifiers.join(' + ') : 'None';

    clickInfo.innerHTML = `
    Coordinates: (${x}, ${y})<br>
    Button: ${button}<br>
    Modifiers: ${modifierText}
  `;
});

// Prevent context menu on right-click to capture right-click events
clickArea.addEventListener('contextmenu', e => {
    e.preventDefault();
});

// Exercise: Event Target
const menu = document.getElementById('menu');
const selected = document.getElementById('selected');

menu.addEventListener('click', e => {
    // Check if the clicked element is an <li>
    if (e.target.tagName === 'LI') {
        const action = e.target.dataset.action;
        selected.textContent = `Selected: ${action}`;
    }
});

// ============================================
// EVENT DELEGATION
// ============================================

// Exercise: Dynamic List with Delegation
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add new todo item
addBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();
    if (!text) return;

    // Create new <li> with the input text and a Delete button
    const li = document.createElement('li');
    li.innerHTML = `
    <span>${text}</span>
    <button class="delete-btn">Delete</button>
  `;

    todoList.appendChild(li);
    todoInput.value = '';
});

// Event delegation for delete buttons
todoList.addEventListener('click', e => {
    if (e.target.classList.contains('delete-btn')) {
        // Remove the parent <li>
        e.target.closest('li').remove();
    }
});

// Exercise: Table Row Selection
const dataTable = document.getElementById('data-table');
const selectedRow = document.getElementById('selected-row');

dataTable.addEventListener('click', e => {
    // Find the closest <tr> ancestor
    const row = e.target.closest('tr');

    // Ignore if no row found or if it's in the header
    if (!row || row.closest('thead')) return;

    // Remove "selected" from any previously selected row
    const previouslySelected = dataTable.querySelector('tr.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }

    // Add "selected" class to clicked row
    row.classList.add('selected');

    // Display the data-id
    const id = row.dataset.id;
    selectedRow.textContent = `Selected ID: ${id}`;
});

// ============================================
// PREVENTING DEFAULT BEHAVIOR
// ============================================

// Exercise: Custom Link Behavior
const customLink = document.getElementById('custom-link');
const linkMessage = document.getElementById('link-message');

customLink.addEventListener('click', e => {
    // Prevent the default navigation
    e.preventDefault();

    // 1. Display "You tried to visit: [href]"
    const href = e.target.href;
    linkMessage.textContent = `You tried to visit: ${href}`;

    // 2. Change the link text
    e.target.textContent = 'Custom action performed!';
});

// Exercise: Validate Before Submit
const registration = document.getElementById('registration');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const error = document.getElementById('error');

registration.addEventListener('submit', e => {
    const passwordValue = password.value;
    const confirmValue = confirm.value;

    // Clear previous errors
    error.textContent = '';

    // Validate password length
    if (passwordValue.length < 8) {
        e.preventDefault();
        error.textContent = 'Password must be at least 8 characters';
        return;
    }

    // Validate passwords match
    if (passwordValue !== confirmValue) {
        e.preventDefault();
        error.textContent = 'Passwords do not match';
        return;
    }

    // If we get here, validation passed - form will submit normally
    // (or you can prevent default and handle submission manually)
});

// ============================================
// EVENT PROPAGATION
// ============================================

// Exercise: Stop Propagation
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const btn = document.getElementById('btn');
const log = document.getElementById('log');

// Without stopPropagation - demonstrates bubbling
function logEvent(name) {
    return () => {
        log.textContent += name + ' → ';
    };
}

// Version 1: Observe bubbling behavior (Button → Inner → Outer)
outer.addEventListener('click', logEvent('Outer'));
inner.addEventListener('click', logEvent('Inner'));
btn.addEventListener('click', logEvent('Button'));

// Version 2: With stopPropagation - only logs "Button"
btn.addEventListener('click', e => {
    e.stopPropagation();
    log.textContent = 'Button';
});

// Exercise: Capture vs Bubble
// Clear previous listeners for this exercise
const outer2 = document.getElementById('outer');
const inner2 = document.getElementById('inner');
const btn2 = document.getElementById('btn');

// Capture phase (third argument = true)
outer2.addEventListener('click', () => console.log('Capture: Outer'), true);
inner2.addEventListener('click', () => console.log('Capture: Inner'), true);
btn2.addEventListener('click', () => console.log('Capture: Button'), true);

// Bubble phase (default, third argument = false)
outer2.addEventListener('click', () => console.log('Bubble: Outer'));
inner2.addEventListener('click', () => console.log('Bubble: Inner'));
btn2.addEventListener('click', () => console.log('Bubble: Button'));

// When clicking the button, the order will be:
// Capture: Outer
// Capture: Inner
// Capture: Button
// Bubble: Button
// Bubble: Inner
// Bubble: Outer

// ============================================
// CHALLENGING EXERCISES
// ============================================

// Challenge: Drag and Drop
const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', e => {
        // Store the id of the dragged element
        e.dataTransfer.setData('text/plain', e.target.id);
        e.target.style.opacity = '0.5';
    });

    draggable.addEventListener('dragend', e => {
        e.target.style.opacity = '1';
    });
});

dropzones.forEach(zone => {
    zone.addEventListener('dragover', e => {
        // Prevent default to allow drop
        e.preventDefault();
    });

    zone.addEventListener('dragenter', e => {
        e.preventDefault();
        zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', () => {
        zone.classList.remove('drag-over');
    });

    zone.addEventListener('drop', e => {
        e.preventDefault();
        zone.classList.remove('drag-over');

        // Get the id of the dragged element
        const id = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(id);

        // Move the element to this dropzone
        zone.appendChild(draggedElement);
    });
});

// Challenge: Interactive Image Gallery
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumb');
const imageCounter = document.getElementById('image-counter');
let currentIndex = 0;
const totalImages = thumbnails.length;

function updateGallery(index) {
    // Update current index with wrapping
    currentIndex = ((index % totalImages) + totalImages) % totalImages;

    // Get the new thumbnail
    const newThumb = thumbnails[currentIndex];

    // Update main image
    mainImage.src = newThumb.src;

    // Update active class on thumbnails
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    newThumb.classList.add('active');

    // Update counter
    imageCounter.textContent = `${currentIndex + 1} / ${totalImages}`;
}

// Click on thumbnails
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        updateGallery(index);
    });
});

// Keyboard navigation
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') {
        updateGallery(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
        updateGallery(currentIndex + 1);
    }
});

// Challenge: Build a Simple Modal
const modalButtons = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');

function openModal(modalId) {
    // Close any open modals first
    closeAllModals();

    // Open the specified modal
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.hidden = false;
    }
}

function closeAllModals() {
    modals.forEach(modal => {
        modal.hidden = true;
    });
}

// Open modal when button is clicked
modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.dataset.modal;
        openModal(modalId);
    });
});

// Close modal when X is clicked
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        closeAllModals();
    });
});

// Close modal when clicking outside modal-content
modals.forEach(modal => {
    modal.addEventListener('click', e => {
        // Only close if clicking the modal backdrop, not the content
        if (e.target === modal) {
            closeAllModals();
        }
    });
});

// Close modal on Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

// Challenge: Debounced Search
const searchInputDebounced = document.getElementById('search');
const searchStatus = document.getElementById('search-status');
const results = document.getElementById('results');
const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

let debounceTimer;

function debounce(func, delay) {
    return function (...args) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(this, args), delay);
    };
}

function performSearch(query) {
    // Clear results
    results.innerHTML = '';

    if (!query) {
        searchStatus.textContent = '';
        return;
    }

    // Filter data (case-insensitive)
    const matches = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    // Display results
    if (matches.length > 0) {
        searchStatus.textContent = `Found ${matches.length} result(s)`;
        matches.forEach(match => {
            const li = document.createElement('li');
            li.textContent = match;
            results.appendChild(li);
        });
    } else {
        searchStatus.textContent = 'No results found';
    }
}

const debouncedSearch = debounce(query => {
    performSearch(query);
}, 300);

searchInputDebounced.addEventListener('input', e => {
    const query = e.target.value.trim();

    if (query) {
        searchStatus.textContent = 'Searching...';
    }

    debouncedSearch(query);
});

// ============================================
// BONUS: Helper function to run exercises
// ============================================

// This function can be used to test individual sections
// by providing the necessary HTML structure dynamically
function setupExerciseHTML(exerciseName) {
    const htmlTemplates = {
        selectElements: `
      <div id="container">
        <h1 class="title">Welcome</h1>
        <p class="description">This is a paragraph.</p>
        <ul id="item-list">
          <li class="item">Item 1</li>
          <li class="item">Item 2</li>
          <li class="item active">Item 3</li>
        </ul>
        <button data-action="submit">Submit</button>
      </div>
    `,
        todoList: `
      <input type="text" id="todo-input" placeholder="Add a todo">
      <button id="add-btn">Add</button>
      <ul id="todo-list"></ul>
    `,
        modal: `
      <button data-modal="modal1">Open Modal 1</button>
      <button data-modal="modal2">Open Modal 2</button>
      <div id="modal1" class="modal" hidden>
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>Modal 1</h2>
          <p>This is the first modal.</p>
        </div>
      </div>
      <div id="modal2" class="modal" hidden>
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>Modal 2</h2>
          <p>This is the second modal.</p>
        </div>
      </div>
    `,
    };

    if (htmlTemplates[exerciseName]) {
        document.body.innerHTML = htmlTemplates[exerciseName];
    }
}
