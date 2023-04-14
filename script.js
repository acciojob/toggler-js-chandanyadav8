const checkboxes = document.querySelectorAll('.toggle');
const labels = document.querySelectorAll('.toggle-container label');
let checkedCount = 0;
let lastChecked;

// Add event listener to each checkbox
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        // Check if the checkbox is being unchecked
        if (checkbox.checked === false) {
            checkedCount--;
        } else {
            // Check if two checkboxes are already checked
            if (checkedCount === 2) {
                lastChecked.checked = false;
                checkedCount--;
            }
            checkedCount++;
            lastChecked = checkbox;
        }
    });
});

// Add event listener to each label to toggle color when clicked
labels.forEach((label) => {
    label.addEventListener('click', (e) => {
        // Check if two checkboxes are already checked
        if (checkedCount === 2 && !e.target.classList.contains('active')) {
            return;
        }
        label.classList.toggle('active');
    });
});