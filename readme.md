# Lighthouse Audit Automation

Lighthouse Audit is a Node.js application that performs website audits using Google Lighthouse and stores the results in Google BigQuery. It can be deployed as a Google Cloud Function or run locally.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js 16.16.0
- Google Cloud SDK
- Google Cloud project with BigQuery enabled

## Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/smraikode/Lighthouse-Audit-Automation
cd lighthouse-audit
```

Install the dependencies:

```bash
npm run install-deps
```

Create a `.env` file in the project root directory and provide the following environment variables:

```dotenv
PROJECT_ID=<your_project_id>
DATASET_ID=<your_dataset_id>
TABLE_ID=<your_table_id>
```

## Usage

### Running Locally

To run the application locally, use the following command:

```bash
npm start
```
This will start the server on the default port (8080) and initiate the website audits.
We can git http trigger with cURL to check the out put.
The results will be stored in local JSON files in temp/ folder.

## Writing Test Cases

1. Create test files for your functions in the `test` directory.

2. Use a testing framework like Mocha or Jest to define your test cases.

3. Write test cases to validate the behavior of your functions and ensure they produce the expected results.

4. Run the tests:

   ```bash
   npm test
   ```

   The test framework will execute your test cases and provide feedback on the pass/fail status of each test.

   **Note:** The tests are executed locally and do not impact the execution of your Cloud Functions.

### Deploying as a Google Cloud Function

To deploy the application as a Google Cloud Function, use the following command:

```bash
npm run deploy
```

This will deploy the function to Google Cloud Functions with the specified configuration. The function will be triggered via HTTP and perform the website audits, storing the results in Google BigQuery.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/smraikode/Lighthouse-Audit-Automation).

## License

This project is licensed under the [MIT License](LICENSE).