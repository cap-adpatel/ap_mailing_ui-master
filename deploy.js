const AWS = require("aws-sdk"); // imports AWS SDK
const mime = require('mime-types'); // mime type resolver
const fs = require("fs"); // utility from node.js to interact with the file system
const path = require("path"); // utility from node.js to manage file/folder paths

// configuration necessary for this script to run
const config1 = {
  s3BucketName: 'capdev-ui-artifacts/virtual-kit-staff',
  folderPath: './dist-staff' // path relative script's location
};

const config2 = {
  s3BucketName: 'capdev-ui-artifacts/virtual-kit-vendor',
  folderPath: './dist-vendor' // path relative script's location
};

// initialise S3 client
const s3 = new AWS.S3({
  signatureVersion: 'v4',
  profile: 'dev'
});

// resolve full folder path
const distFolderPath1 = path.join(__dirname, config1.folderPath);
const distFolderPath2 = path.join(__dirname, config2.folderPath);

// Normalize \\ paths to / paths.
function unixifyPath(filepath) {
  return process.platform === 'win32' ? filepath.replace(/\\/g, '/') : filepath;
}
// Recurse into a directory, executing callback for each file.
function walk(config, rootdir, callback, subdir) {

  // is sub-directory
  const isSubdir = subdir ? true : false;
  // absolute path
  const abspath = subdir ? path.join(rootdir, subdir) : rootdir;

  // read all files in the current directory
  fs.readdirSync(abspath).forEach((filename) => {
    // full file path
    const filepath = path.join(abspath, filename);
    // check if current path is a directory
    if (fs.statSync(filepath).isDirectory()) {
      walk(rootdir, callback, unixifyPath(path.join(subdir || '', filename || '')))
    } else {
      fs.readFile(filepath, (error, fileContent) => {
        // if unable to read file contents, throw exception
        if (error) {
          throw error;
        }

        // map the current file with the respective MIME type
        const mimeType = mime.lookup(filepath);

        // build S3 PUT object request
        const s3Obj = {
          // set appropriate S3 Bucket path
          Bucket: isSubdir ? `${config.s3BucketName}/${subdir}` : config.s3BucketName,
          Key: filename,
          Body: fileContent,
          ContentType: mimeType
        };

        // upload file to S3
        s3.putObject(s3Obj, (res) => {
          console.log(`Successfully uploaded '${filepath}' with MIME type '${mimeType}'`)
        })
      })
    }
  })
}

// start upload process
walk(distFolderPath1, (config1, filepath, rootdir, subdir, filename) => {
  console.log('Filepath', filepath);
});

// start upload process
walk(distFolderPath2, (config2, filepath, rootdir, subdir, filename) => {
  console.log('Filepath', filepath);
});
