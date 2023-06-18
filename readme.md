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

To run the Lighthouse audit locally, follow these steps:

1. Run the Lighthouse audit by executing the appropriate npm script:
   - For mobile audit:
     ```
     npm run mobile-audit
     ```

   - For desktop audit:
     ```
     npm run desktop-audit
     ```

   The command will execute the `node index.js` script with the `IS_MOBILE` environment variable set to `true` for mobile audit or `false` for desktop audit. The Lighthouse audit will be performed accordingly.

2. After the audit completes, the results will be saved in the local `temp` directory as JSON files.

You can customize the websites to be audited by updating the `constants.js` file, and you can modify the Lighthouse configuration in the `config.js` file.

Note: Make sure you have the necessary dependencies installed before running the Lighthouse audit locally.

Feel free to modify the scripts or configurations as per your project requirements.

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

## Deployment

The Lighthouse Audit project provides the flexibility to deploy the Cloud Function for different device types, such as mobile and desktop. Follow the instructions below to deploy the appropriate version of the Cloud Function based on your needs.

### Deploying the Cloud Function

To deploy the Cloud Function, use the following commands:

#### Deploying for Mobile

```shell
npm run deploy-mobile
```

This command will deploy the Cloud Function with the `isMobile` flag set to `true`. It will execute the lighthouse audit for mobile devices.

#### Deploying for Desktop

```shell
npm run deploy-desktop
```

This command will deploy the Cloud Function with the `isMobile` flag set to `false`. It will execute the lighthouse audit for desktop devices.

### Verifying the Deployment

Once the deployment is complete, you can verify the Cloud Function's functionality by accessing the provided URL. The Cloud Function will perform the lighthouse audit for the specified device type (mobile or desktop) and save the results accordingly.

**Note:** Make sure to wait for a few moments after deployment before accessing the Cloud Function URL to allow for the initialization and setup process.

### Cleaning Up

To clean up the deployed Cloud Functions, you can use the following command:

```shell
gcloud functions delete ceLighthouse --project cybagexl-staging
```

Running this command will delete the Cloud Function, freeing up the associated resources.

## Conclusion

By following the deployment instructions provided above, you can easily deploy the Lighthouse Audit Cloud Function for different device types and conduct lighthouse audits to gather performance metrics for your websites.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/smraikode/Lighthouse-Audit-Automation).

## License

This project is licensed under the [MIT License](LICENSE).