export class HelperUtils {

    public static getDispTimeStamp(date: Date = new Date()): string {
        if(isNaN(date.getTime()))
            date = new Date();

        let tempDate = new Date();

        let result: string = "";
        let hours: string = String(date.getHours() - (date.getHours() > 12 ? 12 : 0)).padStart(2,"0");        
        let minutes: string = String(date.getMinutes()).padStart(2,"0");        
        let day: string = String(date.getDate()).padStart(2,"0");
        let month: string = String(date.getMonth() + 1).padStart(2,"0");

        result = `${day}/${month}/${date.getFullYear()} ${hours}: ${minutes} ${date.getHours() >= 12 ? "PM" : "AM"}`

        return result;
    }

}