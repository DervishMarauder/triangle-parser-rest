
export function HasValidMimetype(file, mimetype: string) {

    if (!file) {
        return false;
    }

    return file.mimetype === mimetype;

}