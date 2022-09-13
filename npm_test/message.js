// module.exports to export the module of Node?
module.exports = function (courseName, desc){
    // Local var courseName declaring
    this.courseName = courseName;
    // Local var desc declaring
    this.desc = desc;

    // Getter function 
    this.detail = () => {
        return this.courseName + "\t" + this.desc;
    }
}