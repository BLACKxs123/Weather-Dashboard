Weather Dashboard

Weather Dashboard is a single-page application (SPA) built with React and Vite that allows users to search for and view weather conditions for any location using the OpenWeatherMap API.
Table of Contents

    Features
    Technologies
    Setup and Installation
    Usage
    File Structure
    Contributors
    Resources
    Contributing
    License

Features

    Search for weather by city or location
    Display current weather conditions, including temperature, humidity, and wind speed
    Show a 5-day weather forecast
    Users can save favorite locations for quick access
    Toggle between light and dark modes

Technologies

    React
    Vite
    OpenWeatherMap API
    CSS

Setup and Installation

    Clone the repository:

    sh

git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard

Install dependencies:

sh

npm install

Set up environment variables:
Create a .env file in the root directory and add your OpenWeatherMap API key:

plaintext

VITE_APP_ID=your_openweathermap_api_key

Run the application:

sh

    npm run dev

Usage

    Search Weather:
        Enter a city name in the search bar and click the search icon to view the weather details for that location.

    View Weather Details:
        The application displays the current temperature, humidity, and wind speed for the searched location.

    Toggle Dark Mode:
        Click the "Switch to Dark Mode" button to toggle between light and dark themes.

    Save Favorite Locations:
        (Optional) Add functionality to save favorite locations for quick access.

File Structure

arduino

├── public
│   └── index.html
├── src
│   ├── assets
│   │   ├── clear.png
│   │   ├── cloud.png
│   │   ├── drizzle.png
│   │   ├── humidity.png
│   │   ├── rain.png
│   │   ├── search.png
│   │   ├── snow.png
│   │   └── wind.png
│   ├── components
│   │   └── Weather.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
├── README.md
└── vite.config.js

Contributors

    Christopher Kiprop
    Roy Njuguna
    Wesley Alinyo
    Salyviah Kamau
    Warren Gakundi
    Fonte Wanyama

Resources

    Google Slides Presentation
    Trello Board

Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

    Fork the repository
    Create your feature branch (git checkout -b feature/YourFeature)
    Commit your changes (git commit -m 'Add some feature')
    Push to the branch (git push origin feature/YourFeature)
    Open a pull request

License

This project is licensed under the MIT License.