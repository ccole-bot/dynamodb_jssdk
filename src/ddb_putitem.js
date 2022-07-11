/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-example-table-read-write.html.

Purpose:
ddb_putitem.js demonstrates how to create or replace an item in an Amazon DynamoDB table.

INPUTS:
- TABLE_NAME

Running the code:
node ddb_putitem.js
*/
// snippet-start:[dynamodb.JavaScript.item.putItemV3]

// Import required AWS SDK clients and commands for Node.js
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./libs/ddbClient.js";

// Set the parameters
export const params = {
  TableName: "TEST_TABLE",
  Item: {
    Season: { N: "1" },
    Episode: { N: "1" },
    Title: { S: "Stringer Things Ep 1" },
  },
};

export const run = async () => {
  try {
    const data = await ddbClient.send(new PutItemCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
run();
// snippet-end:[dynamodb.JavaScript.item.putItemV3]
// For unit tests only.
// module.exports ={run, params};
