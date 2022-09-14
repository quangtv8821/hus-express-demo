import Documnent from '../models/document.model.js'
import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (request, document, cb) {
      cb(null, 'src/public/documents')
    },
    filename: function (request, document, cb) {
      cb(null, document.originalname)
    },
  })

const upload = multer({
    storage: storage,
}).array('documents', 12)
  

/*
* Create document has two part:
* 1. Upload cocument to server
* 2. Insert data of document info into database
*/
function create(req, res) {

}

function findByLesson(req, res) {

}


export {
    create,
    findByLesson,
}