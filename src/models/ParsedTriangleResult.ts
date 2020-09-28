import ParsedTriangleLine from './ParsedTriangleLine';

export default class ParsedTriangleResult {

    /** Array of parsed lines, each representing one line from a parsed file. */
    lines: ParsedTriangleLine[];

    /** Sum of highest values from lines. */
    maximumTotal: number;

    constructor(lines: ParsedTriangleLine[]) {       
        this.lines = lines;

        this.maximumTotal = this.getMaximumTotal(lines);
    }

    /** Filters valid lines and reduces to find highest possible value for overall result. */ 
    private getMaximumTotal(lines: ParsedTriangleLine[]): number {      
        // Using class functions to make code more readable.
        return lines.filter((line) => line.valid)
                    .map((line) => line.highestValue)
                    .reduce((acc, val) => acc + val, 0);
    }

}