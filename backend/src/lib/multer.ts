import multer from 'fastify-multer';

const allowedMimes = ['application/pdf'];
const storage = multer.memoryStorage();

export const multerMiddleware = multer({
	storage,
	fileFilter: (req, file, cb) => {
		if (allowedMimes.includes(file.mimetype)) {
			cb(null, true);
		} else {
			cb(new Error('Invalid file type. Only PDF files are allowed.'));
		}
	},
});
