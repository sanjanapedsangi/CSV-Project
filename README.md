# CSV-Project
Problem:
To create a website where users can see and manage records of known security vulnerabilities, called CVE records. These records include details like the vulnerability's ID, how severe it is, what parts of software it affects, and more.

Step-by-Step Requirements:

Viewing CVE Records:

Show a list of CVE records in a table format.
Each record should have its details like ID, severity, affected software, etc.
Users should be able to edit or delete each record.
Adding a New CVE Record:

Provide a button to add a new vulnerability.
When clicked, a pop-up window appears with fields to fill in details of the new vulnerability.
Users can then save or cancel the addition.
Editing a CVE Record:

Allow users to edit existing vulnerabilities.
Clicking on an "edit" option opens a window with the current details filled in.
Users can make changes and save or cancel them.
Deleting a CVE Record:

Enable users to delete vulnerabilities.
Clicking on a "delete" option prompts a confirmation message.
If confirmed, the vulnerability is permanently removed.
Bonus Enhancements (Optional):

Allow users to sort and filter vulnerabilities based on different criteria like severity or affected software.
Requirements in HTML, CSS, and JavaScript:

Creating the Structure:

Set up the layout of the website, including tables for displaying records and pop-up windows for adding/editing them.
Styling:

Make the website visually appealing and easy to use by styling tables, pop-ups, and buttons.
Functionality:

Make sure everything works as intended, like opening/closing pop-up windows and handling user input.
Data Validation:

Check that users fill in all necessary fields and show error messages if they don't.
Code Quality:

Write clean, well-organized code that's easy to understand and maintain.
Evaluation Criteria:

Functionality: Check if all the features work correctly.
User Interface Design: Assess how easy and pleasant the website is to use.
Responsiveness: Test if the website looks and works well on different devices and browsers.
Data Handling: Make sure user input is handled properly and errors are displayed correctly.
Code Quality: Evaluate how well the code is written and organized.

Explaination of code
1. **HTML Structure (index.html):**
   - This part defines the structure of the webpage.
   - It includes a table to display CVE records and a modal for adding/editing CVE records.
   - Also, there's a button to add new CVE records.

2. **CSS Styling (styles.css):**
   - This section contains styles to make the webpage visually appealing.
   - It styles the table, modal, and buttons for better presentation.

3. **JavaScript Logic (script.js):**
   - This part contains the JavaScript code responsible for adding functionality to the webpage.
   - It starts by waiting for the DOMContentLoaded event, ensuring that the DOM (Document Object Model) has been fully loaded before executing any JavaScript code.

4. **Event Listeners:**
   - It attaches event listeners to various elements like the "Add CVE" button, close button in the modal, cancel button in the modal, and the form submission event.
   - When the "Add CVE" button is clicked, the openModal function is called, which displays the modal for adding a new CVE record.
   - Similarly, when the close button or cancel button in the modal is clicked, the closeModal function is called to close the modal.
   - When the form is submitted (either for adding or editing a CVE record), the handleSubmit function is called to handle the form submission.

5. **Displaying CVE Records:**
   - The displayCVEs function is responsible for displaying the CVE records in the table.
   - It loops through the array of dummy CVE data and dynamically creates table rows for each record, populating them with the CVE details.
   - Edit and delete buttons are added to each row to allow users to edit or delete individual records.

6. **Modal Functionality:**
   - The openModal and closeModal functions control the visibility of the modal for adding/editing CVE records.
   - When the modal is opened, it displays the form for adding/editing CVE details.
   - When the modal is closed, it hides the modal from the view.

7. **Form Submission Handling:**
   - The handleSubmit function is called when the form is submitted.
   - This function prevents the default form submission behavior (which would refresh the page) and performs any necessary actions, such as saving the CVE record.

Overall, this code sets up a basic frontend application for managing CVE records, including functionalities for viewing, adding, editing, and deleting records. It uses HTML for structure, CSS for styling, and JavaScript for interactivity. The dummy data provided in the JavaScript file is used for demonstration purposes.
