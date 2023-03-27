const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  BlobSASPermissions,
  generateBlobSASQueryParameters,
} = require("@azure/storage-blob");

const accountName = process.env.accountName;
const accountKey = process.env.accountKey;

const containerName = "images";

const SharedKeyCredential = new StorageSharedKeyCredential(
  accountName,
  accountKey
);

const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  SharedKeyCredential
);

async function generateSASToken() {
  const containerClient = blobServiceClient.getContainerClient(containerName);

  const permissions = new BlobSASPermissions();

  permissions.write = true;
  permissions.create = true;
  permissions.read = true;

  const expiryDate = new Date();
  expiryDate.setMinutes(expiryDate.getMinutes() + 30);

  const sasToken = generateBlobSASQueryParameters(
    {
      containerName: containerClient.containerName,
      permissions: permissions.toString(),
      expiresOn: expiryDate,
    },
    SharedKeyCredential
  ).toString();

  return sasToken;
}

module.exports = generateSASToken;
