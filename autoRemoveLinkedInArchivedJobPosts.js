// Function to simulate a click event
function simulateClick(element) {
    element.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true}));
}

// Function to find and click the "Remove job" button
function findAndClickRemoveJobButton() {
    // Find all dropdown items
    const dropdownItems = document.querySelectorAll('.artdeco-dropdown__content-inner .artdeco-dropdown__item--is-dropdown');
    for (let item of dropdownItems) {
        if (item.innerText.includes('Remove job')) {
            simulateClick(item);
            console.log('Job removed.');
            return true;
        }
    }
    console.log('Remove job button not found.');
    return false;
}

// Function to process all jobs and remove them
async function processJobs() {
    let menuButtons = document.querySelectorAll('.entity-result__actions-overflow-menu-dropdown .artdeco-dropdown__trigger');
    if (menuButtons.length === 0) {
        console.log('No more jobs found to remove.');
        return false;
    }

    for (let button of menuButtons) {
        // Click the menu button to open the dropdown
        simulateClick(button);

        // Wait for the dropdown to be visible
        await new Promise(resolve => setTimeout(resolve, 500)); // Adjust timing as necessary

        // Try to find and click the "Remove Job" option
        findAndClickRemoveJobButton();

        // Wait for the job to be removed (if found and clicked)
        await new Promise(resolve => setTimeout(resolve, 500)); // Adjust timing as necessary
    }
    return true;
}

// Main function to remove all archived jobs, retries if new jobs load
async function removeAllArchivedJobs() {
    let jobsProcessed;
    do {
        // Process all current jobs
        jobsProcessed = await processJobs();

        // Wait a bit for potentially new jobs to load
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Check if there are new jobs to process by trying to find menu buttons again
        const menuButtons = document.querySelectorAll('.entity-result__actions-overflow-menu-dropdown .artdeco-dropdown__trigger');
    } while (menuButtons.length > 0 && jobsProcessed);

    console.log('Finished removing all archived jobs.');
}

// Execute the function
removeAllArchivedJobs();
