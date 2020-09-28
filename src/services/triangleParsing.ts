import lineReader from 'line-reader';
import fs from 'fs';
import ParsedTriangleResult from '../models/ParsedTriangleResult';
import ParsedTriangleLine from '../models/ParsedTriangleLine';

export function ParseTriangleResultFromTextFile(path: string, onComplete: (result: ParsedTriangleResult) => any) {

    let parsedLines: ParsedTriangleLine[] = [];

    const stream = fs.createReadStream(path, { autoClose: true });

    lineReader.eachLine(stream, (line: string) => {
        parsedLines.push(new ParsedTriangleLine(line));
        return;
    }, () => {
        onComplete(new ParsedTriangleResult(parsedLines)); 
        stream.close();
    });

} 