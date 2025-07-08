// class FileUploader {
//   upload(file: { name: string; size: number; type: string }) {
//     // 1. Validate file
//     if (!file.type.startsWith('image/')) {
//       throw new Error('Only image files are allowed');
//     }
//     if (file.size > 5 * 1024 * 1024) {
//       throw new Error('File too large');
//     }

//     // 2. Save file
//     console.log(`Saving file: ${file.name}`);

//     // 3. Log upload
//     console.log(`${file.name} uploaded at ${new Date().toISOString()}`);

//     // 4. Notify user
//     console.log(`Notification: ${file.name} uploaded successfully.`);
//   }
// }