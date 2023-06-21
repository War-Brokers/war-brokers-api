import { onRequest } from "firebase-functions/v2/https"

export const ping = onRequest((request, response) => {
	response.send("pong!")
})
