

const function_block_to_create_s3_presigned_url = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Hello function_block_to_create_s3_presigned_url`}))
  res.end()
  
}

export default function_block_to_create_s3_presigned_url
