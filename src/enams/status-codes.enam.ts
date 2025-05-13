export enum StatusCodesEnum {
    OK=200,  //get, ...
    CREATED=201,
    NO_CONTENT=204, //delete
    BED_REQUEST=400,  //validation
    UNAUTHORIZED=401,  //login
    FORBIDDEN=403,  //block
    NOT_FOUND=404 //no object
}