// script.js

document.addEventListener("DOMContentLoaded", function() {
    const cveTable = document.getElementById('cveTable');
    const modal = document.getElementById('modal');
    const addCveBtn = document.getElementById('addCveBtn');
    const closeBtn = document.querySelector('.close');
    const cancelBtn = document.querySelector('.cancel');
    const cveForm = document.getElementById('cveForm');
  
    // Dummy data for demonstration
    const cveData = [
      { id: 'CVE-2024-001', severity: 'High', cvss: '8.9', affectedPackages: 'Package A', cweId: 'CWE-79' },
      { id: 'CVE-2024-002', severity: 'Medium', cvss: '6.5', affectedPackages: 'Package B', cweId: 'CWE-89' },
      { id: 'CVE-2024-003', severity: 'Low', cvss: '3.2', affectedPackages: 'Package C', cweId: 'CWE-119' }
    ];
  
    // Display CVE records in the table
    function displayCVEs() {
      const tbody = cveTable.querySelector('tbody');
      tbody.innerHTML = '';
      cveData.forEach(cve => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${cve.id}</td>
          <td>${cve.severity}</td>
          <td>${cve.cvss}</td>
          <td>${cve.affectedPackages}</td>
          <td>${cve.cweId}</td>
          <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </td>
        `;
        tbody.appendChild(row);
      });
    }
  
    // Open modal to add/edit CVE
    function openModal() {
      modal.style.display = 'block';
    }
  
    // Close modal
    function closeModal() {
      modal.style.display = 'none';
    }
  
    // Handle form submission
    function handleSubmit(event) {
      event.preventDefault();
      // Add your logic to save CVE record
      closeModal();
    }
  
    // Event listeners
    addCveBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    cveForm.addEventListener('submit', handleSubmit);
  
    // Initial display of CVE records
    displayCVEs();
  });
  