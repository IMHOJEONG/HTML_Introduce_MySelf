// import bb, {gauge} from "billboard.js";

class App{
    constructor(){
        bb.generate({
            data: {
                columns: [
                    ["Javascript", 300],
                    ["Java", 100],
                    ["Golang", 70],

                ],  
                type: "gauge",
                order: "asc",
            },
            gauge: {
                title: "Skills"
            },
            bindto: "#chart"
        })
        bb.generate({
            data: {
                columns: [
                    ["online Study", 80],
                    ["offline Study", 70],
                    ["Self Study", 50]
                ],
                type:"pie",
            },
            pie: {
                label: {
                    format: function(value, ratio, id) {
                        return value+" Study Hours";
                    }
                }
            },
            bindto: "#multilineLabel"
        })
    }
}

window.onload = () => {
    new App();
}