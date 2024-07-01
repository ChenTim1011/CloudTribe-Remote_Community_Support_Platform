# CloudTribe 順路經濟平台

## Project Description

During the winter break of 2024, we visited the Sbunawtribe in Taoyuan, a small community with around 200 residents. The local economy is primarily based on agriculture, guesthouses, and camping. The area is difficult to access due to steep, winding mountain roads, making external transportation challenging. Due to these transportation issues, no logistics companies are willing to make deliveries to the mountain. This has led to the development of a "convenience economy," where residents who go down to the town for supplies also bring back goods for other residents, reducing the need for multiple trips. This system is usually based on mutual help among familiar residents.

We aim to scale up this model, allowing residents to earn money by helping more people while improving the flow of goods in the mountainous area. The platform involves three roles: buyers, sellers, and drivers. The core functionality will enable these roles to express their needs and use a backend matching system to fulfill them. Detailed information can be found in proposal.pdf. We hope to create an information platform that supports remote communities and eventually expand its use to other indigenous tribes.

## Core Features

1. **Role Selection Functionality**
2. **Order Submission and Matching Functionality**
3. **Notification Functionality**
4. **Route and Estimated Time Functionality**

## Additional Features

1. **Login and Registration Functionality**
2. **Order Tracking Functionality**
3. **Messaging Functionality**
4. **User Profile Functionality**
5. **Accounting Functionality**

# Technology Stack

1. **Frontend: Javascript+ React**
2. **Backend: Python + FastAPI**
3. **Database: PostgreSQL**
4. **Container: Docker**
5. **Real-Time Communication: Socket.IO**
6. **Maps and Route Planning: Google Maps API**
7. **Reverse Proxy: Nginx**
8. **LineBOT**

## Steps to install (TBD)

1. git clone https://github.com/ChenTim1011/CloudTribe.git

2. change file .env.txt -> .env, and setting the environment variable about PostgreSQL
3. Docker compose:

      docker-compose up --build.

5. Open http://localhost:8080/ login with the env email and password.

6. Go to the admin page -> Go to register -> server and setting -> Fill the form with the corresponding env data .

7. Create the table :

       cat ./database/createdb.sql | docker compose exec -T postgres psql --username postgres --dbname stadium

9. Insert the data :

        cat ./database/data.sql | docker compose exec -T postgres psql --username postgres --dbname pg


### Schedule: 2024 6/25-7/24:Complete basic functionalities before military service
### Schedule: 2024 7/4-7/7:Field visit to Sbunaw tribe
### Schedule: 2024 7/10:First checkpoint

By leveraging the power of technology, we aim to support remote communities and improve their access to essential goods and services.
