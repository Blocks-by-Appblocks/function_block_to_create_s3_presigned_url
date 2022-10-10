import aws from 'aws-sdk'
import dotenv from 'dotenv'
dotenv.config({path: '../.env.functions'})

const REGION = process.env.AWS_REGION
const S3_BUCKET = process.env.AWS_S3_BUCKET;

const params = {
    region: REGION,
    signatureVersion: 'v4'
}

const s3 = new aws.S3(params);

/**
 * Get the presigned url from S3 bucket
 * 
 * @param {String} path The entire path including the file name with extension
 * @param {String} ContentType The content type for the file to be upload
 * @returns 
 */
export const getPresignedPUTUrl = async function(path, ContentType) {
    if(!S3_BUCKET || !REGION) {
        throw new Error("Missing environment variables. Please check .env.functions.example file")
    }
    return await s3.getSignedUrl('putObject', {
        Bucket: S3_BUCKET,
        Key: path,
        Expires: 10000,
        ContentType,
    });
}