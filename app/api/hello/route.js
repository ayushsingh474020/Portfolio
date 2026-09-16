// import {NextResponse} from "next/server"

// export async function GET (){
//     return NextResponse.json({
//         hello:"world"
//     })
// }
const { NextResponse} = require("next/server");

async function GET(req,res) {
    console.log(req);
    return NextResponse.json({
        hello: "world"
    });
}

module.exports = {
    GET
};

// export default function GET() {
//     return NextResponse.json({hello: 'world' })
// }