import { Document } from "../models/index.js"
import multer from 'multer'
import CODE from '../constants/status.js'

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
async function bulkCreate(req, res) {
  try {
    await upload(req, res, async (error) => {
      if (error) {
        res.status(500).json({message: 'Upload error'})
      }
      const documents = req.files // use .files to get files from request
  
      if (documents.length === 0) return res.status(500).json({message: 'Upload error'})
  
      const payload = documents.map((document) => ({
        name: document.originalname,
        type: document.mimetype,
        size: document.size,
        url: `/static/documents/${document.originalname}`,
        accountId: req.params.id,
        // account_id: request.account.id,
      }))
      
      const result = await Document.bulkCreate(payload)
      return res.status(CODE.SUCCESS).json(result)
    })
  } catch (error) {
    console.log(error)
  }
}

function findByLesson(req, res) {

}


export {
  bulkCreate,
    findByLesson,
}