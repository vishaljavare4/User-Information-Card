const userForm = document.getElementById('userForm');
        const userCard = document.getElementById('userCard');

        // Function to display user data
        function displayUserData() {
            const name = localStorage.getItem('name');
            const phoneNumber = localStorage.getItem('phoneNumber');
            const village = localStorage.getItem('village');
            const city = localStorage.getItem('city');

            if (name && phoneNumber && village && city) {
                userCard.innerHTML = `
                    <h2>${name}</h2>
                    <p>Phone Number: ${phoneNumber}</p>
                    <p>Village: ${village}</p>
                    <p>City: ${city}</p>
                `;
            } else {
                userCard.innerHTML = "<p>Please fill out the form to see your user card.</p>";
            }
        }

        // Display user data on page load
        displayUserData();

        // Event listener for form submission
        userForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const phoneNumber = document.getElementById('phoneNumber').value;
            const village = document.getElementById('village').value;
            const city = document.getElementById('city').value;

            localStorage.setItem('name', name);
            localStorage.setItem('phoneNumber', phoneNumber);
            localStorage.setItem('village', village);
            localStorage.setItem('city', city);

            displayUserData();

            // Reset the form
            userForm.reset();
        });