# Function to upload files to s3
This is a nodejs block to generate presigned put url to s3.

## Input query params
- path: string
- contentType: string

> Path is the entire s3 path including the file name with extension

## Environment variables
- AWS_REGION: string
- AWS_S3_BUCKET: string

> It will use the aws credentials available in the machine. [default / exported profile]
