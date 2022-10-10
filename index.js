import * as S3Helper from './s3-helper.js';

const function_block_to_create_s3_presigned_url = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  // Add your code here
  try {
    const { path, contentType } = req.query;

    if(!path) {
      throw new Error('Invalid path')
    }
    if(!contentType) {
      throw new Error('No content type')
    }

    const presignedPUTURL = await S3Helper.getPresignedPUTUrl(path, contentType)

    res.write(JSON.stringify({success: true, msg: `Generated the pre-signed url to upload file`, data: {uploadUrl: presignedPUTURL}}))
    res.end()
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message })
  }

  
}

export default function_block_to_create_s3_presigned_url

