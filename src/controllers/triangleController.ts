import { Request, Response } from 'express';

import { HasValidMimetype } from '../services/fileValidation';
import { ParseTriangleResultFromTextFile } from '../services/triangleParsing';

const Parse = (req: Request, res: Response) => {

    // TODO: Add logging

    try { 

        // Check that files have content
        if (!req.files || req.files.length === 0) {
            return res.status(400).send({ message: "No files were uploaded" });
        }
    
        // Deconstruct file variable from request files
        const { file } = req.files;
    
        // Check that a file was actually uploaded
        if (file == undefined) {
            return res.status(400).send({ message: "No files were uploaded" });
        }
    
        // Don't save the file if it is an invalid type
        if (!HasValidMimetype(file, "text/plain")) {
            return res.status(400).send({ message: "Invalid file type was uploaded" });
        }
        
        const fileUploadPath = `uploads/${file.name}`;

        file.mv(fileUploadPath, () => {
            ParseTriangleResultFromTextFile(fileUploadPath, (result) => {
                return res.status(200).send({ result: result });
            });
        });

      } catch (err) {
        res.status(500).send({
          message: `Could not parse file: ${err}`,
        });
      }
};

export default { Parse }