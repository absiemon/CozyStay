# CozyStay

This is a Full stack booking app where you can book a place for accommodation. 
This is a MERN (MongoDB, Express, React, Node.js) application that serves as a starter template for building web applications. It has been created with best practices in mind and includes various features such as authentication, routing, and database integration.

## Installation
1. Download project
2. Download required node packages using the npm install command:


```bash
$ npm install
```
3. Create a .env file in the api directory of the application and add the following variables:
```bash
PORT= Your-port
MONGODB_URI= your-mongo-uri
JWT_SECRET=your-secret-key
```
4. Create a .env file in the client directory of the application and add the following variables:
```bash
VITE_API_BASE_URL= Your-api-url
```
5. Start the project by executing this command:
```bash
$ npm run dev
```

## Features
The following features are included in this application:

1. User authentication with JWT tokens.
2. Password reset functionality.
3. Protected routes.
4. CRUD operations with MongoDB.
5. React Router for client-side routing.
6. You can add a place, book a place, and edit a place. State-based filters are available for places.
7. If a place is booked or cancelled, the owner will receive a notification. Otp based auth is available.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
