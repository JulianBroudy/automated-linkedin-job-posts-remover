# Automated LinkedIn Archived Job Posts Remover

This repository contains a JavaScript-based solution for automating the removal of archived job posts on LinkedIn. It leverages DOM manipulation to programmatically click through the LinkedIn UI, identifying and removing job posts marked as archived.

## Table of Contents
- [Motivation](#motivation)
- [Description](#description)
- [Features](#features)
- [How It Works](#how-it-works)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Safety and Compliance](#safety-and-compliance)
- [Contribution](#contribution)
- [License](#license)
- [Disclaimer](#disclaimer)

---

<br>

## Motivation

Just nailed the job hunt and landed the gig of your dreams? Congrats! But now, there's a tiny, niggling issue... You're a neat freak with a digital cleanliness streak a mile wide, and the sight of those archived LinkedIn job posts is like a smudge on your sparkling clean resume window. If the thought of all those "applied" and "closed" positions lurking in your profile makes your organizational senses tingle, fear not! You're in exactly the right place. Get ready to obliterate those pesky reminders of jobs past with the finesse of a professional digital declutterer. Let's turn that job post chaos into order, one automated click at a time. Welcome to your new sleep-inducing, archive-clearing haven.

<br>

## Description

As of February 5, 2024, LinkedIn does not provide a direct way to bulk-remove archived job posts from your profile. This script fills that gap by automating the process, significantly reducing the time and effort required to manage your job search effectively. It works by simulating clicks on the UI elements of the LinkedIn website, specifically targeting the removal buttons within archived job listings.

<br>

## Features

- **Automated Removal:** Automatically finds and clicks the "Remove job" buttons for archived job posts.
- **Dynamic Loading Support:** Waits for and handles dynamically loaded job posts, ensuring that even jobs loaded after initial page load are removed.
- **Easy to Use:** Can be run directly in the browser's console, requiring no additional software or setup beyond a modern web browser.

<br>

## How It Works

The script operates by:
1. Simulating click events on the "More actions" buttons of each job post to reveal dropdown menus.
2. Identifying and clicking the "Remove job" option within each dropdown.
3. Repeating the process for jobs loaded dynamically as the user scrolls or as the page auto-refreshes.

<br>

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge) with developer tools access.
- A LinkedIn account with archived job posts to remove.

<br>

## Installation

This script requires no traditional installation. However, you must have access to the browser's developer console to run it.

<br>

## Usage

1. **Open LinkedIn:** Log in to your LinkedIn account and navigate to your list of archived jobs.
2. **Open Developer Console:** Right-click anywhere on the page and select "Inspect" or use the shortcut `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Opt+I` (Mac) to open the developer tools. Switch to the "Console" tab.
3. **Run the Script:** Copy the JavaScript code from `removeArchivedJobs.js` in this repository and paste it into the console, then press Enter to run it.
4. **Monitoring:** The script will log actions to the console, indicating the removal of job posts and completion status.

<br>

## Safety and Compliance

This script automates user actions and does not use LinkedIn's official API. Therefore, it is subject to LinkedIn's terms of service regarding automated actions. Use it responsibly and at your own risk. Frequent use or misuse may lead to limitations on your LinkedIn account.

---

<br>

## Contribution

Contributions to improve this script are welcome. Please fork the repository and submit a pull request with your suggested changes.

## License

This project is open-sourced under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Disclaimer

This script is not endorsed by or affiliated with LinkedIn Corporation. LinkedIn is a registered trademark of LinkedIn Corporation.
