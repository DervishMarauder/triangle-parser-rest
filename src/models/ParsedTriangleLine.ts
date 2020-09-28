
export default class ParsedTriangleLine {

    numbers: number[] = [];
    valid: boolean = false;
    highestValue?: number;

    constructor(line: string) {
        // If string is empty, leave numbers as empty array;
        if (!line) {
            return;
        }

        this.numbers = this.getNumberValuesFromLineString(line);

        // Line is only valid if we have at least 1 number.
        this.valid = this.numbers.length > 0;

        this.highestValue = this.findHighestValueInNumberArray(this.numbers);
    }

    /** Processes the string in values that can be sorted easily. */
    private getNumberValuesFromLineString(line: string): number[] {
        // 1. Split the string into individual values.
        // 2. Try parse string list into int list.
        // 3. Remove any values that failed to parse.
        return line.split(" ")
                   .map((value: string) => parseInt(value))
                   .filter((value: number) => isNaN(value) === false);
    }

    private findHighestValueInNumberArray (numbers: number[]) {
        return Math.max.apply(null, numbers);
    }

}