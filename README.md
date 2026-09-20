# 🌤️ Thiranex Task 4 – Weather Dashboard

A responsive **Real-Time Weather Dashboard** developed as part of the **Thiranex Internship – Task 4: Asynchronous JavaScript & RESTful APIs**.

The application allows users to search for any city and view real-time weather information using public REST APIs, JavaScript `fetch()` and `async/await`.

## 🌐 Live Demo

👉 https://divyabanuka.github.io/Thiranex_Task4_Weather_Dashboard/

## 📌 Project Overview

This project demonstrates how asynchronous JavaScript can be used to fetch, process and display real-time JSON data from RESTful APIs.

Users can enter a city name and retrieve:

- 🌡️ Current Temperature
- ☁️ Weather Condition
- 💧 Humidity
- 💨 Wind Speed
- 🌡️ Feels Like Temperature

The dashboard also includes error handling for invalid city names and failed API requests.

## ✨ Features

- 🔍 Search weather by city name
- ⚡ Uses JavaScript Fetch API
- 🔄 Uses async/await
- 🌐 Fetches real-time weather data
- 📦 Processes JSON API responses
- 🌡️ Displays current temperature
- 💧 Displays humidity
- 💨 Displays wind speed
- 🌡️ Displays feels-like temperature
- ☁️ Converts weather codes into readable descriptions
- ❌ Handles invalid city names
- 🛡️ Includes API error handling
- ⌨️ Supports pressing Enter to search
- 📱 Responsive mobile-friendly design

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- Async/Await
- RESTful APIs
- JSON
- GitHub Pages

## 🌐 APIs Used

### Open-Meteo Geocoding API

Used to search for a city and obtain its latitude and longitude.

https://geocoding-api.open-meteo.com/v1/search

### Open-Meteo Weather API

Used to retrieve current weather information using latitude and longitude.

https://api.open-meteo.com/v1/forecast

No API key is required for this project.

## 🔄 How It Works

```text
User enters city
       ↓
JavaScript validates input
       ↓
Geocoding API searches for city
       ↓
Latitude & Longitude received
       ↓
Weather API is called
       ↓
JSON weather data received
       ↓
Data is processed using JavaScript
       ↓
Weather information displayed


👩‍💻 Author

Divya Banuka

B.Tech – Artificial Intelligence & Machine Learning

GitHub: https://github.com/divyabanuka⁠�