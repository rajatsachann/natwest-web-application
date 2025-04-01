# Natwest Forecasting Application

## Overview
The **Natwest Forecasting Application** is an Angular 19-based web application that provides real-time weather forecasts for different locations. Users can search for a city and view detailed weather insights, including temperature, humidity, wind speed, and future predictions.

## Features

### **Landing Page**

<img width="1678" alt="image" src="https://github.com/user-attachments/assets/d4cd1ae9-62d8-49c5-a59e-761547e21228" />

- Users can search for weather forecasts by entering the name of a country or city (e.g., Bristol).
- Provides an intuitive search bar to retrieve location-specific weather data.



### **Dashboard**



<img width="1679" alt="image" src="https://github.com/user-attachments/assets/001280b6-7076-4165-ae2c-6dbfffb614f1" />



### **Current Weather Overview:**

- Current temperature.
- Weather condition (e.g., scattered clouds, clear, rainy).
- Wind speed and status (e.g., breezy).
- Humidity levels and comfort indicators.
- Visibility distance and clarity status.

### **Hourly Forecast:**

- Displays weather conditions for upcoming hours with temperature trends.
- Helps users plan based on expected weather changes throughout the day.

### **5-Day Forecast:**

- Provides daily forecasts with minimum and maximum temperatures.
- Visual representation of upcoming weather patterns.

### **What to Wear Recommendation:**
- Suggests appropriate clothing based on temperature and weather conditions.

## Installation & Setup

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: LTS version)
- [Angular CLI](https://angular.io/cli) (Latest version)

### **Installation Steps**

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-repo/natwest-forecasting-app.git
   cd natwest-forecasting-app
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Run the Application Locally:**
   ```sh
   ng serve
   ```
   The application will be available at: `http://localhost:4200/`

## **Environment Variables**
To set up API keys, create an environment file:

1. Navigate to `src/environments/` and update `environment.ts`:
   ```typescript
   export const environment = {
     production: false,
     weatherApiKey: 'YOUR_API_KEY_HERE',
     weatherApiUrl: 'https://api.weather.com/'
   };
   ```
