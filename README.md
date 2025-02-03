# Number Classification API

A RESTful API built with **NestJS** that classifies numbers based on mathematical properties and provides fun facts. The API returns information such as whether a number is prime, perfect, an Armstrong number, odd or even, and includes a fun fact sourced from the Numbers API.

## Features

- Determines if a number is prime
- Checks if a number is perfect
- Identifies Armstrong numbers
- Classifies numbers as odd or even
- Calculates the sum of digits
- Fetches a fun fact using the Numbers API

## Technology Stack

- **Framework:** [NestJS](https://nestjs.com/)
- **Language:** TypeScript
- **Deployment:** [Railway](https://railway.com)
- **Version Control:** Git & GitHub

## API Documentation

### Endpoint

```
GET https://hng12task01-production.up.railway.app/api/classify-number?number=9/api/classify-number?number=<number>
```

### Query Parameters

- **number** (required): An integer to classify.

### Example Response (200 OK)

```
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Error Response (400 Bad Request)

```
{
    "number": "alphabet",
    "error": true
}
```

## Number Properties Explained

- **Prime Number:** A number greater than 1 that has no positive divisors other than 1 and itself.
- **Perfect Number:** A number equal to the sum of its proper divisors.
- **Armstrong Number:** A number that is equal to the sum of its own digits each raised to the power of the number of digits.
- **Odd/Even:** Classifies the number based on parity.
- **Digit Sum:** The sum of all digits in the number.

## Possible `properties` Combinations

- `["armstrong", "odd"]` - If the number is both an Armstrong number and odd
- `["armstrong", "even"]` - If the number is an Armstrong number and even
- `["odd"]` - If the number is not an Armstrong number but is odd
- `["even"]` - If the number is not an Armstrong number but is even

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:timiwritescode/hng12_task_01.git
   cd hng12_task_01.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add `.env` file

    Create a .env file in the root root directory of project and add the following variable:

    ```
    API_URL=<numbers-api-url>
    ```

4. Run the application:
    
    Development production:
   ```bash
   npm run start:dev
   ```

   Production environment:
   ```bash
   npm run start:prod
   ```

### Deployment

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
2. Deploy to your preferred platform (e.g., Vercel, Render, Heroku).

### Example Usage

- **Request:**
  ```
  GET <your-deployment-url>/api/classify-number?number=28
  ```
- **Response:**
  ```
  {
      "number": 28,
      "is_prime": false,
      "is_perfect": true,
      "properties": ["even"],
      "digit_sum": 10,
      "fun_fact": "28 is a perfect number because its divisors sum to 28."
  }
  ```

## Error Handling

- Returns **400 Bad Request** for invalid inputs (e.g., non-integer values).
- Returns appropriate HTTP status codes for other errors.


## Acknowledgments

- [Numbers API](http://numbersapi.com/) for providing fun facts
- [Wikipedia](https://en.wikipedia.org/wiki/Parity_(mathematics)) for mathematical references

