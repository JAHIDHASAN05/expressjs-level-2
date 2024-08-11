

import { Server } from "http"
import app from "./app"
const port = 3000

let server:Server


async function bootstrao() {
    server =app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
    
}

bootstrao()



